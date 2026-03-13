<?php
/**
 * Title: Breadcrumbs (Bottom)
 * Slug: tagme/breadcrumbs-bottom
 * Categories: featured
 * Inserter: false
 */
?>
<!-- wp:group {"className":"tagme-breadcrumbs-wrapper bottom"} -->
<div class="wp-block-group tagme-breadcrumbs-wrapper bottom">
	<?php if ( function_exists( 'tagme_render_breadcrumbs' ) ) tagme_render_breadcrumbs( 'bottom' ); ?>
</div>
<!-- /wp:group -->
