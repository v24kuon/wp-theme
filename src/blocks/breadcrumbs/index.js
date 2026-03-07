import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { separator } = attributes;
    const blockProps = useBlockProps({ className: 'tagme-breadcrumbs' });
    return (
      <>
        <InspectorControls>
          <PanelBody title="レイアウト設定">

            <__experimentalUnitControl
              label="区切り文字"
              value={ separator }
              onChange={ (value) => setAttributes({ separator: value }) }
            />
          </PanelBody>
        </InspectorControls>
        <nav aria-label="Breadcrumb" { ...blockProps }>
          <ol>
            <li><a href="#">ホーム</a> {separator} </li>
            <li><a href="#">カテゴリー</a> {separator} </li>
            <li aria-current="page">現在のページ (編集中)</li>
          </ol>
        </nav>
      </>
    );
  },
  save: () => {
    // Rendered dynamically via render.php
    return null;
  }
});
