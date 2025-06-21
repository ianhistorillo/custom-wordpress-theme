<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <meta charset="utf-8" />
    <title>YDRTW - Your Data Runs The World</title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <div class="hero-container">
        <div class="bg-gradient"></div>
        
        <!-- Header -->
        <header class="header">
            <div class="logo">YDRTW</div>
            <button class="menu-button" aria-label="Menu">
                <div class="menu-line"></div>
                <div class="menu-line"></div>
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
