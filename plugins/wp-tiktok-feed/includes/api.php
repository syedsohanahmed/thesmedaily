<?php

if (!defined('ABSPATH'))
  exit;

class QLTTF_API
{

  public $message;
  public $tiktok_url = 'https://www.tiktok.com';
  private $tiktok_api_url = 'https://www.tiktok.com/node';
  private $config = [];
  private $ajax_stream = 'qlttf-stream';
  private $ajax_download = 'qlttf-download';

  private $defaults = [
    "user-agent"     => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36',
    "proxy-host"     => false,
    "proxy-port"     => false,
    "proxy-username" => false,
    "proxy-password" => false,
    "cache-timeout"  => 3600, // in seconds
  ];

  public function __construct()
  {

    $this->init_config();

    add_action("wp_ajax_{$this->ajax_stream}", [$this, 'video_stream']);
    add_action("wp_ajax_nopriv_{$this->ajax_stream}", [$this, 'video_stream']);
    add_action("wp_ajax_{$this->ajax_download}", [$this, 'video_download']);
    add_action("wp_ajax_nopriv_{$this->ajax_download}", [$this, 'video_download']);
  }

  public function init_config()
  {

    $this->config = array_merge(
      [
        'cookie_file' => get_temp_dir() . 'tiktok.txt'
      ],
      $this->defaults
    );
  }

  public function video_stream()
  {
    $this->init_config();
    $streamer = new QLTTF_Stream($this->config);

    if (
      !isset($_GET['url']) ||
      !isset($_GET['user_name']) ||
      !isset($_GET['video_id'])
    ) {
      wp_die('Cheating?');
    }

    $user_name = sanitize_key($_GET['user_name']);
    $video_id =  sanitize_key($_GET['video_id']);
    $protocols = array('http://', 'http://www.', 'www.');
    $home_url = str_replace($protocols, '', home_url());
    $http_referer = wp_get_referer();
    $url = base64_decode(esc_url_raw($_GET['url']));

    if (strpos($http_referer, $home_url) === false) {
      wp_die('Cheating?');
    }
    if (!$streamer->stream($url)) {
      $url = $this->getVideoByUser($user_name, $video_id);
      $streamer->stream($url);
    }
  }
  public function video_download()
  {

    if (
      !isset($_GET['url']) ||
      !isset($_GET['video_id'])
    ) {
      wp_die('Cheating?');
    }

    if (!class_exists('QLTTF_Download')) {
      wp_die('Cheating?');
    }

    $downloader = new QLTTF_Download();

    $video_id = sanitize_key($_GET['video_id']);
    $url =  sanitize_text_field($_GET['url']);

    if (strpos(wp_get_referer(), home_url()) !== false) {
      $downloader->force_download($url, $video_id);
    }
  }

  function getVideoByUser($user_name = '', $video_id = '')
  {
    $url = "{$this->tiktok_api_url}/share/video/@{$user_name}/{$video_id}";

    $data = $this->remote_get($url);

    return $data->itemInfo->itemStruct->video->playAddr;
  }

  function getHashTagProfile($hashtag)
  {

    if (!$hashtag) {
      return;
    }
    $url = "{$this->tiktok_api_url}/share/tag/{$hashtag}";

    $response =  $this->remote_get($url);


    if (!isset($response->challengeInfo->challenge->id)) {
      return;
    }

    return array(
      'id' => $response->challengeInfo->challenge->id,
      'full_name' => $response->challengeInfo->challenge->title,
      'username' => $hashtag,
      'video_count' => $response->challengeInfo->stats->videoCount,
      'views_count' => $response->challengeInfo->stats->viewCount,
      'tagline' => null, //$response->metaParams->title,
      'profile_pic_url' => isset($response->challengeInfo->challenge->coverThumb) ? $response->challengeInfo->challenge->coverThumb : '',
      'profile_pic_url_hd' => isset($response->challengeInfo->challenge->coversMedium) ? $response->challengeInfo->challenge->coversMedium : '',
      'link' => "{$this->tiktok_url}/tag/{$hashtag}"
    );
  }

  function getHashTagMedia($hashtag = null, $after = null)
  {

    $profile = $this->getHashTagProfile($hashtag);


    if (!isset($profile['id'])) {
      return;
    }

    $url = add_query_arg(array(
      'id' => $profile['id'],
      'minCursor' => 0,
      'maxCursor' => 0,
      'count' => 30,
      'type' => 3,
      "shareUid"  => "",
      "lang"      => "",
      "verifyFp"  => "",
    ), "{$this->tiktok_api_url}/video/feed");


    $response = $this->remote_get($url);


    if (!isset($response->body)) {
      return;
    }

    return $response->body;
  }

  function getTrendingMedia($after = null)
  {
    $url = add_query_arg(array(
      'id' => 1,
      'minCursor' => 0,
      'maxCursor' => 0,
      'count' => 30,
      'type' => 5,
      "shareUid"  => "",
      "lang"      => "",
      "verifyFp"  => "",
    ), "{$this->tiktok_api_url}/video/feed");

    $response = $this->remote_get($url);
    if (!isset($response->body)) {
      return;
    }

    return $response->body;
  }

  function getUserNameProfile($username)
  {

    if (!$username) {
      return;
    }

    $username = str_replace('@', '', $username);

    $url = "{$this->tiktok_api_url}/share/user/@{$username}";

    $response = $this->remote_get($url);


    if (!isset($response->userInfo->user->id)) {
      return;
    }

    return array(
      'id' => $response->userInfo->user->id,
      'full_name' => $response->userInfo->user->nickname,
      'username' => $response->userInfo->user->uniqueId,
      'following_count' => $response->userInfo->stats->followingCount,
      'fans_count' => $response->userInfo->stats->followerCount,
      'heart_count' => $response->userInfo->stats->heartCount,
      'video_count' => $response->userInfo->stats->videoCount,
      'verified' => $response->userInfo->user->verified,
      'tagline' => $response->userInfo->user->signature,
      'profile_pic_url' => $response->userInfo->user->avatarThumb,
      'profile_pic_url_hd' => $response->userInfo->user->avatarLarger,
      'link' => "{$this->tiktok_url}/@{$username}"
    );
  }

  function getUserNameMedia($username = null, $after = null)
  {

    if (class_exists('QLTTF_Username')) {

      $user_api = new QLTTF_Username();
      $response = $user_api->getUserByName($username);

      if (!isset($response['id'])) {
        return;
      }

      $url = add_query_arg(array(
        'id' => $response['id'],
        'minCursor' => 0,
        'maxCursor' => 0,
        'count' => 30,
        'type' => 1
      ), "{$this->tiktok_api_url}/video/feed");

      $response = $this->remote_get($url);

      if (!isset($response->body)) {
        return;
      }

      return $response->body;
    }
  }

  function setupMediaItems($data, $last_id = null)
  {

    static $load = false;
    static $i = 1;

    if (!$last_id) {
      $load = true;
    }

    $tiktok_items = array();


    if (is_array($data) && !empty($data)) {

      foreach ($data as $item) {

        if ($load) {

          //preg_match_all("/#(\\w+)/", $item['itemInfos->text'], $hashtags);
          preg_match_all('/(?<!\S)#([0-9a-zA-Z]+)/', $item->itemInfos->text, $hashtags);

          $url_encode = base64_encode($item->itemInfos->video->urls[0]);


          $url_ajax = admin_url("admin-ajax.php?action={$this->ajax_stream}&url={$url_encode}&user_name={$item->authorInfos->uniqueId}&video_id={$item->itemInfos->id}");

          $url_download = base64_encode($url_ajax);
          $tiktok_items[] = array(
            'i' => $i,
            'id' => $item->itemInfos->id,
            'covers' => array(
              'default' => $item->itemInfos->covers[0],
              'origin' => $item->itemInfos->coversOrigin[0],
              'dynamic' => $item->itemInfos->coversDynamic[0],
              'video' => $url_ajax,
            ),
            'download' =>  admin_url("admin-ajax.php?action={$this->ajax_download}&url={$url_download}&video_id={$item->itemInfos->id}"), //admin_url("admin-ajax.php?action={$this->ajax_download}&url={$url_encode}&user_name={$item->authorInfos->uniqueId}&video_id={$item->itemInfos->id}"),
            'digg_count' => $item->itemInfos->shareCount,
            'comment_count' => $item->itemInfos->commentCount,
            'digg_count' => $item->itemInfos->diggCount,
            'play_count' => $item->itemInfos->playCount,
            'width' => $item->itemInfos->video->videoMeta->width,
            'height'  =>  $item->itemInfos->video->videoMeta->height,
            'text' => preg_replace('/(?<!\S)#([0-9a-zA-Z]+)/', "<a target=\"_blank\" href=\"{$this->tiktok_url}/tag/$1\">#$1</a>", htmlspecialchars($item->itemInfos->text)),
            'hashtags' => isset($hashtags[1]) ? $hashtags[1] : '',
            'link' => "{$this->tiktok_url}/@{$item->authorInfos->uniqueId}/video/{$item->itemInfos->id}",
            'date' => date_i18n('j F, Y', strtotime($item->itemInfos->createTime)),
            'author' => array(
              'id' => $item->authorInfos->userId,
              'username' => $item->authorInfos->uniqueId,
              'full_name' => $item->authorInfos->nickName,
              'tagline' => $item->authorInfos->signature,
              'verified' => $item->authorInfos->verified,
              'image' => array(
                'small' => $item->authorInfos->covers[0],
                'medium' => $item->authorInfos->coversMedium[0],
                'larger' => $item->authorInfos->coversLarger[0],
              ),
              'link' => "{$this->tiktok_url}/@{$item->authorInfos->uniqueId}",
            )
          );
        }
        if ($last_id && ($last_id == $i)) {
          $i = $last_id;
          $load = true;
        }
        $i++;
      }
    }

    return $tiktok_items;
  }

  function validateResponse($json = null)
  {

    if (!($response = json_decode(wp_remote_retrieve_body($json), true)) || 200 !== wp_remote_retrieve_response_code($json)) {

      if (is_wp_error($json)) {
        $response = array(
          'error' => 1,
          'message' => $json->get_error_message()
        );
      } else {
        $response = array(
          'error' => 1,
          'message' => esc_html__('Unknow error occurred, please try again', 'wp-tiktok-feed')
        );
      }
    }

    return $response;
  }
  function remote_get($url = '', $isJson = true)
  {

    $ch      = curl_init();

    $options = [
      CURLOPT_URL            => $url,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_HEADER         => false,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_USERAGENT      => $this->config['user-agent'],
      CURLOPT_ENCODING       => "utf-8",
      CURLOPT_AUTOREFERER    => true,
      CURLOPT_CONNECTTIMEOUT => 30,
      CURLOPT_SSL_VERIFYHOST => false,
      CURLOPT_SSL_VERIFYPEER => false,
      CURLOPT_TIMEOUT        => 30,
      CURLOPT_MAXREDIRS      => 10,
      CURLOPT_HTTPHEADER     => [
        'Referer: https://www.tiktok.com/foryou?lang=en',
      ],
      CURLOPT_COOKIEJAR      => $this->config['cookie_file'],
    ];

    if (file_exists($this->config['cookie_file'])) {
      curl_setopt($ch, CURLOPT_COOKIEFILE, $this->config['cookie_file']);
    }

    curl_setopt_array($ch, $options);

    if (defined('CURLOPT_IPRESOLVE') && defined('CURL_IPRESOLVE_V4')) {
      curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
    }

    if ($this->config['proxy-host'] && $this->config['proxy-port']) {
      curl_setopt($ch, CURLOPT_PROXY, $this->config['proxy-host'] . ":" . $this->config['proxy-port']);
      if ($this->config['proxy-username'] && $this->config['proxy-password']) {
        curl_setopt($ch, CURLOPT_PROXYUSERPWD, $this->config['proxy-username'] . ":" . $this->config['proxy-password']);
      }
    }

    $data = curl_exec($ch);

    curl_close($ch);


    return json_decode($data);
  }

  // Return message
  // ---------------------------------------------------------------------------
  public function getMessage()
  {
    return $this->message;
  }

  public function setMessage($message = '')
  {
    $this->message = $message;
  }
}
