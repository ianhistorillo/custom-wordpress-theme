<?php
function corporate_landing_setup() {
    register_nav_menus([
        'primary' => __('Primary Menu', 'corporate-landing'),
    ]);
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'corporate_landing_setup');

// ✅ Basic enqueue without 'type=module' (test purpose only)
function corporate_landing_scripts() {
    wp_enqueue_style('corporate-style', get_stylesheet_uri());

    // Enqueue main.js ONLY on front page
    if (is_front_page()) {
        wp_enqueue_script(
            'corporate-main-js',
            get_template_directory_uri() . '/js/main.js',
            array(),
            null,
            true
        );
        
        // chatbot.js
        wp_enqueue_script(
            'chatbot-js',
            get_template_directory_uri() . '/js/chatbot.js',
            array(), // dependencies (empty means none)
            null,    // version (null = no versioning)
            true     // load in footer
        );
    }

    // Enqueue if other page (by slug)
    if (!is_front_page()) {
        wp_enqueue_script(
            'corporate-individual-page-js',
            get_template_directory_uri() . '/js/individual-page.js',
            array(),
            null,
            true
        );
    }
}

add_action('wp_enqueue_scripts', 'corporate_landing_scripts');

