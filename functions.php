<?php
/**
 * Theme functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package tagme
 */

if ( ! function_exists( 'tagme_support' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 */
	function tagme_support() {
		// Enqueue editor styles.
		add_theme_support( 'editor-styles' );
		add_editor_style( 'style.css' );
	}
endif;
add_action( 'after_setup_theme', 'tagme_support' );

/**
 * Enqueue scripts and styles.
 */
function tagme_scripts() {
	wp_enqueue_style( 'tagme-style', get_stylesheet_uri(), array(), wp_get_theme()->get( 'Version' ) );
}
add_action( 'wp_enqueue_scripts', 'tagme_scripts' );