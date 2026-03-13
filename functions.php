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

/**
 * Customizer settings for Breadcrumbs.
 */
function tagme_customize_register( $wp_customize ) {
	$wp_customize->add_section( 'tagme_breadcrumbs_section', array(
		'title'       => __( 'Breadcrumbs', 'tagme' ),
		'description' => __( 'Configure breadcrumbs display location.', 'tagme' ),
		'priority'    => 120,
	) );

	$wp_customize->add_setting( 'tagme_breadcrumbs_position', array(
		'default'           => 'top',
		'sanitize_callback' => 'sanitize_key',
	) );

	$wp_customize->add_control( 'tagme_breadcrumbs_position', array(
		'label'    => __( 'Display Position', 'tagme' ),
		'section'  => 'tagme_breadcrumbs_section',
		'type'     => 'radio',
		'choices'  => array(
			'none'   => __( 'Hide', 'tagme' ),
			'top'    => __( 'Top', 'tagme' ),
			'bottom' => __( 'Bottom', 'tagme' ),
		),
	) );
}
add_action( 'customize_register', 'tagme_customize_register' );

/**
 * Render Breadcrumbs logic.
 */
function tagme_render_breadcrumbs( $location ) {
	$position = get_theme_mod( 'tagme_breadcrumbs_position', 'top' );

	if ( $position === 'none' || $position !== $location ) {
		return;
	}

	if ( is_front_page() || is_home() ) {
		return;
	}

	echo '<nav class="tagme-breadcrumbs" aria-label="Breadcrumb">';
	echo '<a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Home', 'tagme' ) . '</a>';

	if ( is_single() ) {
		$categories = get_the_category();
		if ( ! empty( $categories ) ) {
			echo '<span class="separator">/</span>';
			echo '<a href="' . esc_url( get_category_link( $categories[0]->term_id ) ) . '">' . esc_html( $categories[0]->name ) . '</a>';
		}
		echo '<span class="separator">/</span>';
		echo '<span class="current" aria-current="page">' . esc_html( get_the_title() ) . '</span>';
	} elseif ( is_page() ) {
		echo '<span class="separator">/</span>';
		echo '<span class="current" aria-current="page">' . esc_html( get_the_title() ) . '</span>';
	} elseif ( is_archive() ) {
		echo '<span class="separator">/</span>';
		echo '<span class="current" aria-current="page">' . get_the_archive_title() . '</span>';
	}

	echo '</nav>';
}