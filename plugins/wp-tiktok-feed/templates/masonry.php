<div id="<?php echo esc_attr($item_selector); ?>" class="tiktok-feed-feed" data-feed="<?php echo htmlentities(json_encode($feed), ENT_QUOTES, 'UTF-8'); ?>" data-feed_layout="masonry">
  <?php
  if (!empty($feed['box']['profile']) && ($template_file =  QLTTF_Frontend::template_path('parts/profile.php'))) {
    include($template_file);
  }
  ?>
  <div class="tiktok-feed-list">
    <?php //QLTTF_Frontend::create_feed($feed) ?>
  </div>
  <?php include(QLTTF_Frontend::template_path('parts/spinner.php')); ?>
  <?php include(QLTTF_Frontend::template_path('parts/actions.php')); ?>
</div>