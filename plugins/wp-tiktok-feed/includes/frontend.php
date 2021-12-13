<?php
include_once(QLTTF_PLUGIN_DIR . 'includes/models/Feed.php');
if (!defined('ABSPATH'))
  exit;

if (!class_exists('QLTTF_Frontend')) {


  class QLTTF_Frontend
  {

    protected static $instance;

    function add_js()
    {
      $events = include_once(QLTTF_PLUGIN_DIR . 'assets/frontend/js/frontend.asset.php');

      wp_register_style('wp-tiktok-feed', plugins_url('/assets/frontend/css/frontend.css', QLTTF_PLUGIN_FILE), null, QLTTF_PLUGIN_VERSION);

      wp_register_script('wp-tiktok-feed', plugins_url('/assets/frontend/js/frontend.js', QLTTF_PLUGIN_FILE), $events['dependencies'], $events['version'], true);

      wp_localize_script('wp-tiktok-feed', 'qlttf', array(
        'ajax_url' => admin_url('admin-ajax.php')
      ));

      // Masonry
      // -----------------------------------------------------------------------
      wp_register_script('masonry', plugins_url('/assets/frontend/masonry/masonry.pkgd.min.js', QLTTF_PLUGIN_FILE), null, QLTTF_PLUGIN_VERSION, true);

      // Swiper
      // -----------------------------------------------------------------------
      wp_register_style('swiper', plugins_url('/assets/frontend/swiper/swiper.min.css', QLTTF_PLUGIN_FILE), null, QLTTF_PLUGIN_VERSION);
      wp_register_script('swiper', plugins_url('/assets/frontend/swiper/swiper.min.js', QLTTF_PLUGIN_FILE), array('jquery'), QLTTF_PLUGIN_VERSION, true);

      // Popup
      // -----------------------------------------------------------------------
      wp_register_style('magnific-popup', plugins_url('/assets/frontend/magnific-popup/magnific-popup.min.css', QLTTF_PLUGIN_FILE), null, QLTTF_PLUGIN_VERSION);
      wp_register_script('magnific-popup', plugins_url('/assets/frontend/magnific-popup/jquery.magnific-popup.min.js', QLTTF_PLUGIN_FILE), array('jquery'), QLTTF_PLUGIN_VERSION, true);
    }

    function get_items($feed = false, $next_max_id = false)
    {

      if (isset($feed['source'])) {

        if ($feed['source'] == 'username') {
          return qlttf_get_username_videos($feed['username'], $feed['limit'], $next_max_id);
        }
        if ($feed['source'] == 'hashtag') {
          return qlttf_get_hashtag_videos($feed['hashtag'], $feed['limit'], $next_max_id);
        }
        if ($feed['source'] == 'trending') {
          return qlttf_get_trending_videos($feed['limit'], $next_max_id);
        }
      }

      return array();
    }

    function ajax_load_item_images()
    {
      global $qlttf_api;

      if (!isset($_REQUEST['feed'])) {
        wp_send_json_error(esc_html__('Invalid item id', 'wp-tiktok-feed'));
      }

      $feed = json_decode(stripslashes($_REQUEST['feed']), true);

      $next_max_id = isset($_REQUEST['next_max_id']) ? $_REQUEST['next_max_id'] : null;

      ob_start();

      if (is_array($feed_items = $this->get_items($feed, $next_max_id))) {

        // Template
        // ---------------------------------------------------------------------

        $i = 1;

        foreach ($feed_items as $item) {

          $image = $item['covers'][$feed['video']['covers']];

          include(self::template_path('item/item.php'));

          $i++;

          if (($feed['limit'] != 0) && ($i > $feed['limit'])) {
            break;
          }
        }

        wp_send_json_success(ob_get_clean());
      }

      $messages = array(
        $qlttf_api->getMessage()
      );

      include(self::template_path('alert.php'));

      wp_send_json_error(ob_get_clean());
    }

    static function template_path($template_name, $template_file = false)
    {

      if (file_exists(QLTTF_PLUGIN_DIR . "templates/{$template_name}")) {
        $template_file = QLTTF_PLUGIN_DIR . "templates/{$template_name}";
      }

      if (file_exists(trailingslashit(get_stylesheet_directory()) . "tiktok-feed/{$template_name}")) {
        $template_file = trailingslashit(get_stylesheet_directory()) . "tiktok-feed/{$template_name}";
      }

      return apply_filters('qlttf_template_file', $template_file, $template_name);
    }


    static function create_shortcut($feed, $id = null)
    {
      if (isset($feed['source'])) {
        if ($feed['source'] == 'username') {
          $profile_info = qlttf_get_username_profile($feed['username']);
        } else
        if ($feed['source'] == 'hashtag') {
          $profile_info = qlttf_get_hashtag_profile($feed['hashtag']);
        } else
        if ($feed['source'] == 'trending') {
          $profile_info = qlttf_get_trending_profile();
        }
      }

      $feed['highlight'] = explode(',', trim(str_replace(' ', '', "{$feed['highlight']['tag']},{$feed['highlight']['id']},{$feed['highlight']['position']}"), ','));
      $feed['highlight-square'] = explode(',', trim(str_replace(' ', '', "{$feed['highlight-square']['tag']},{$feed['highlight-square']['id']},{$feed['highlight-square']['position']}"), ','));

      wp_enqueue_style('wp-tiktok-feed');
      wp_enqueue_script('wp-tiktok-feed');

      if (!empty($feed['popup']['display'])) {
        wp_enqueue_style('magnific-popup');
        wp_enqueue_script('magnific-popup');
      }

      if ($feed['layout'] == 'carousel' || $feed['layout'] == 'carousel-vertical') {
        wp_enqueue_style('swiper');
        wp_enqueue_script('swiper');
      }

      if ($feed['layout'] == 'highlight' || $feed['layout'] == 'highlight-square' || $feed['layout'] == 'masonry') {
        wp_enqueue_script('masonry');
      }
      if ($id === null) {
        $id = rand();
      }
      $item_selector = "tiktok-feed-feed-{$id}";

      ob_start();
?>
      <style>
        <?php

        if ($feed['layout'] != 'carousel') {
          if (!empty($feed['video']['spacing'])) {
            echo "#{$item_selector} .tiktok-feed-list {margin: 0 -{$feed['video']['spacing']}px;}";
          }
          if (!empty($feed['video']['spacing'])) {
            echo "#{$item_selector} .tiktok-feed-list .tiktok-feed-item {padding: {$feed['video']['spacing']}px;}";
          }
          if (!empty($feed['video']['radius'])) {
            echo "#{$item_selector} .tiktok-feed-item .tiktok-feed-video-wrap {border-radius: {$feed['video']['radius']}px; overflow: hidden;}";
            echo "#{$item_selector} .tiktok-feed-list .tiktok-feed-link {border-radius: {$feed['video']['radius']}px; overflow: hidden;}";
          }
        }
        if (!empty($feed['mask']['background'])) {
          echo "#{$item_selector} .tiktok-feed-list .tiktok-feed-item .tiktok-feed-video-wrap .tiktok-feed-video-mask {background-color: {$feed['mask']['background']};}";
        }
        if (!empty($feed['button']['background'])) {
          echo "#{$item_selector} .tiktok-feed-actions .tiktok-feed-button {background-color: {$feed['button']['background']};}";
        }
        if (!empty($feed['button']['background_hover'])) {
          echo "#{$item_selector} .tiktok-feed-actions .tiktok-feed-button:hover {background-color: {$feed['button']['background_hover']};}";
        }


        if (!empty($settings['spinner_id'])) {

          $spinner = wp_get_attachment_image_src($settings['spinner_id'], 'full');

          if (!empty($spinner[0])) {
            echo "#{$item_selector} .tiktok-feed-spinner {background-image:url($spinner[0])}";
          }
        }
        do_action('qlttf_template_style', $item_selector, $feed);
        ?>
      </style>
<?php
      if ($template_file = self::template_path("{$feed['layout']}.php")) {
        include($template_file);
        return ob_get_clean();
      }

      $messages = array(
        sprintf(esc_html__('The layout %s is not a available.', 'wp-tiktok-feed'), $feed['layout'])
      );
      include(self::template_path('alert.php'));
      return ob_get_clean();
    }



    function do_shortcode($atts, $content = null)
    {

      global $qlttf_api;

      $feed_model = new QLTTF_Feed();
      $feeds = $feed_model->get_feeds();
      $settings_model = new QLTTF_Setting();
      $settings = $settings_model->get_settings();

      $atts = shortcode_atts(array(
        'id' => 0
      ), $atts);

      // Start loading
      // -----------------------------------------------------------------------
      $id = absint($atts['id']);

      if (count($feeds)) {
        if (isset($feeds[$id])) {
          $feed = wp_parse_args($feeds[$id], $feed_model->get_args());
          return self::create_shortcut($feed, $id);
        }
      }
    }


    //        }

    function init()
    {
      add_action('wp_ajax_nopriv_qlttf_load_item_images', array($this, 'ajax_load_item_images'));
      add_action('wp_ajax_qlttf_load_item_images', array($this, 'ajax_load_item_images'));
      ///add_action('qlttf_template_style', array($this, 'add_template_style'), 10, 2);
      add_action('wp_enqueue_scripts', array($this, 'add_js'));
      add_shortcode('tiktok-feed', array($this, 'do_shortcode'));
    }

    public static function instance()
    {
      if (!isset(self::$instance)) {
        self::$instance = new self();
        self::$instance->init();
      }
      return self::$instance;
    }
  }

  QLTTF_Frontend::instance();
}
