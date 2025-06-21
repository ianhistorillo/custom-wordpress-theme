<?php
function corporate_landing_setup() {
    // Enable dynamic menus
    register_nav_menus([
        'primary' => __('Primary Menu', 'corporate-landing'),
    ]);

    // Add support for title tag
    add_theme_support('title-tag');

    // Support post thumbnails
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'corporate_landing_setup');

function corporate_landing_scripts() {
    // Enqueue compiled CSS
    wp_enqueue_style('corporate-style', get_stylesheet_uri());

    // Enqueue ES6+ JavaScript with type="module"
    wp_enqueue_script(
        'corporate-main-js',
        get_template_directory_uri() . '/js/main.js',
        [],
        null,
        true
    );

    // Add type="module" attribute to script tag for ES6+
    add_filter('script_loader_tag', function($tag, $handle) {
        if ($handle === 'corporate-main-js') {
            return str_replace('src=', 'type="module" src=', $tag);
        }
        return $tag;
    }, 10, 2);
}

add_action('wp_enqueue_scripts', 'corporate_landing_scripts');
?>
