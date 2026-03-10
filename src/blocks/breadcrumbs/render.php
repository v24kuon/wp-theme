<?php
/**
 * Breadcrumbs Block Render Script
 */

$separator = isset( $attributes['separator'] ) ? esc_html( $attributes['separator'] ) : '/';
$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => 'tagme-breadcrumbs' ) );
?>
<nav aria-label="Breadcrumb" <?php echo $wrapper_attributes; ?>>
  <ol>
    <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">ホーム</a> <?php echo $separator; ?> </li>
    <?php if ( is_category() || is_single() ) : ?>
        <?php
        $categories = get_the_category();
        if ( ! empty( $categories ) ) {
            $cat = $categories[0];
            echo '<li><a href="' . esc_url( get_category_link( $cat->term_id ) ) . '">' . esc_html( $cat->name ) . '</a> ' . $separator . ' </li>';
        }
        ?>
    <?php endif; ?>
    <?php if ( is_single() || is_page() ) : ?>
        <li aria-current="page"><?php the_title(); ?></li>
    <?php elseif ( is_search() ) : ?>
        <li aria-current="page">検索結果: <?php echo get_search_query(); ?></li>
    <?php elseif ( is_404() ) : ?>
        <li aria-current="page">ページが見つかりません</li>
    <?php elseif ( is_archive() ) : ?>
        <li aria-current="page"><?php the_archive_title(); ?></li>
    <?php endif; ?>
  </ol>
</nav>
