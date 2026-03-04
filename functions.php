<?php
/**
 * tagme functions and definitions
 *
 * @package tagme
 */

if ( ! function_exists( 'tagme_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 */
	function tagme_setup() {
		// Make theme available for translation.
		load_theme_textdomain( 'tagme', get_template_directory() . '/languages' );

		// Add support for core custom logo.
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);

		// Enqueue editor styles.
		add_editor_style( 'editor-style.css' );

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );
	}
endif;
add_action( 'after_setup_theme', 'tagme_setup' );

/**
 * Enqueue scripts and styles.
 */
function tagme_scripts() {
	wp_enqueue_style( 'tagme-style', get_stylesheet_uri(), array(), wp_get_theme()->get( 'Version' ) );
}
add_action( 'wp_enqueue_scripts', 'tagme_scripts' );

/**
 * Register Custom Blocks
 */
function tagme_register_blocks() {
	// Our output directory will be build/blocks
	$blocks_dir = get_theme_file_path( '/build/blocks' );

	if ( ! is_dir( $blocks_dir ) ) {
		return;
	}

	// Get all block folders dynamically
	$block_folders = array_diff( scandir( $blocks_dir ), array( '..', '.' ) );

	foreach ( $block_folders as $folder ) {
		$block_path = $blocks_dir . '/' . $folder;
		if ( file_exists( $block_path . '/block.json' ) ) {
			register_block_type( $block_path );
		}
	}
}
add_action( 'init', 'tagme_register_blocks' );
