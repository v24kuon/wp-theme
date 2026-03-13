<?php
/**
 * Title: Breadcrumbs (Top)
 * Slug: tagme/breadcrumbs-top
 * Categories: featured
 * Inserter: false
 */
?>
<!-- wp:group {"className":"tagme-breadcrumbs-wrapper top"} -->
<div class="wp-block-group tagme-breadcrumbs-wrapper top">
	<?php if ( function_exists( 'tagme_render_breadcrumbs' ) ) tagme_render_breadcrumbs( 'top' ); ?>
</div>
<!-- /wp:group -->
