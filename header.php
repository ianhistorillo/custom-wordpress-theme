<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <meta charset="utf-8" />
    <title>YDRTW - Your Data Runs The World</title>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
     <!-- Menu Overlay -->
    <div class="menu-overlay" id="menuOverlay">
      <header class="header menu-header">
        <div class="logo menu-logo">YDRTW</div>
        <button class="menu-button menu-close" id="menuClose" aria-label="Close Menu">
          <span class="menu-static"> <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/menu-close-white-static.svg" alt="music"> </span>
          <span class="menu-hover"> <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/menu-close-white-hover.svg" alt="music"> </span>
        </button>
      </header>
      
      <nav class="menu-nav">
        <ul class="menu-list">
          <li><a href="/" class="menu-link" data-page="home">Home</a></li>
          <li><a href="/about" class="menu-link" data-page="about">About</a></li>
          <li><a href="/pricing" class="menu-link" data-page="pricing">Pricing</a></li>
          <li><a href="/contact" class="menu-link" data-page="contact">Contact</a></li>
        </ul>
      </nav>
    </div>

    <!-- CTA Content Page -->
    <div class="cta-page" id="ctaPage">
      <header class="header cta-header">
        <div class="logo">
            <a href="/">
                <span class="logo-text"> <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/Logo.svg" alt="music"> </span>
                <span class="logo-img"> <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/Logo-hover.svg" alt="music"> </span>
            </a>
        </div>
        <button class="menu-button" id="menuCtaButton" aria-label="Menu">
          <span class="menu-static"> <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/menu-static.svg" alt="music"> </span>
          <span class="menu-hover"> <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/menu-hover.svg" alt="music"> </span>
        </button>
      </header>
              
    <!-- <header>
        <nav>
            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => '',
                'items_wrap' => '<ul>%3$s</ul>',
            ]);
            ?>
        </nav>
    </header> -->
