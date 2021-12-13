<?php

include_once 'Model.php';

class QLTTF_Feed extends QLTTF_Model
{

  protected $table = 'tiktok_feed_feeds';

  function get_args()
  {
    return array(
      'id' => 1,
      'order' => 1,
      'source' => 'hashtag',
      'username' => 'tiktok',
      'hashtag' => 'wordpress',
      'trending' => 'wordpress',
      'challenge' => 'wordpress',
      'layout' => 'masonry',
      'limit' => 12,
      'columns' => 3,
      'lazy' => true,
      'video' => array(
        'covers' => 'default',
        'spacing' => 10,
        'radius' => 0,
      ),
      'highlight' => array(
        'id' => '',
        'tag' => '',
        'position' => '1, 5, 7'
      ),
      'highlight-square' => array(
        'id' => '',
        'tag' => '',
        'position' => '1, 5, 7'
      ),
      'mask' => array(
        'display' => true,
        'background' => '#000000',
        'digg_count' => true,
        'comment_count' => true,
      ),
      'box' => array(
        'display' => false,
        'padding' => 1,
        'radius' => 0,
        'background' => '#fefefe',
        'text_color' => '#000000',
        'profile' => false,
        'desc' => 'Hello, we\'re QuadLayers',
      ),
      'card' => array(
        'display' => false,
        'radius' => 0,
        'font_size' => '12',
        'background' => '#ffffff',
        'background_hover' => '#ffffff',
        'text_color' => '#000000',
        'padding' => '5',
        'info' => true,
        'length' => 10,
        'text' => true,
        'comments' => true
      ),
      'carousel' => array(
        'slidespv' => 5,
        'autoplay' => false,
        'autoplay_interval' => 3000,
        'navarrows' => true,
        'navarrows_color' => '',
        'pagination' => true,
        'pagination_color' => ''
      ),
      'carousel-vertical' => array(
        'slidespv' => 5,
        'autoplay' => false,
        'autoplay_interval' => 3000,
        'navarrows' => true,
        'navarrows_color' => '',
        'pagination' => true,
        'pagination_color' => ''
      ),
      'popup' => array(
        'display' => true,
        'profile' => true,
        'download' => false,
        'text' => true,
        'digg_count' => true,
        'autoplay' => true,
        'comment_count' => true,
        'date_count' => true,
        'controls' => true,
        'align' => 'right',
      ),
      'button' => array(
        'display' => true,
        'text' => 'View on TikTok',
        'background' => '',
        'background_hover' => '',
      ),
      'button_load' => array(
        'display' => false,
        'text' => 'Load more...',
        'background' => '#000000',
        'background_hover' => '#ffffff',
        'profile'     => ''
      ),
    );
  }

  function get_defaults()
  {
    return array(
      1 => $this->get_args()
    );
  }

  function get_next_id()
  {
    $feeds = $this->get_feeds();
    if (count($feeds)) {
      return max(array_keys($feeds)) + 1;
    }
    return 0;
  }

  function get_feed($id)
  {

    $feeds = $this->get_feeds();

    if (isset($feeds[$id])) {
      return $feeds[$id];
    }
  }

  function get_feeds()
  {

    $feeds = $this->get_all();
    //make sure each feed has all values
    if (count($feeds)) {
      foreach ($feeds as $id => $feed) {
        $feeds[$id] = array_replace_recursive($this->get_args(), $feeds[$id]);
      }
    }
    return $feeds;
  }

  function update_feed($feed_data)
  {
    return $this->save_feed($feed_data);
  }

  function update_feeds($feeds, $order = 0)
  {
    return $this->save_all($feeds);
  }

  // create a new feed, get the next id
  function add_feed($feed_data)
  {
    $feed_id = $this->get_next_id();
    $feed_data['id'] = $feed_id;
    $feed_data['order'] = $feed_id + 1;
    $feed_data['hashtag'] = qlttf_sanitize_tiktok_feed($feed_data['hashtag']);
    $feed_data['username'] = qlttf_sanitize_tiktok_feed($feed_data['username']);
    return $this->save_feed($feed_data);
  }

  function save_feed($feed_data = null)
  {
    $feeds = $this->get_feeds();
    $feeds[$feed_data['id']] = array_replace_recursive($this->get_args(), $feed_data);
    return $this->save_all($feeds);
  }

  function delete_feed($id = null)
  {
    $feeds = $this->get_all();
    if ($feeds) {
      if (count($feeds) > 0) {
        unset($feeds[$id]);
        return $this->save_all($feeds);
      }
    }
  }
}
