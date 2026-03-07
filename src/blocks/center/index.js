import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, __experimentalUnitControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { textAlign, maxWidth, intrinsic, padding } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-center',
      'data-text-align': textAlign ? 'true' : undefined,
      'data-intrinsic': intrinsic ? 'true' : undefined,
      'data-text-align': textAlign ? 'true' : undefined,
      'data-intrinsic': intrinsic ? 'true' : undefined,
      'data-text-align': textAlign ? 'true' : undefined,
      'data-intrinsic': intrinsic ? 'true' : undefined,
      'data-text-align': textAlign ? 'true' : undefined,
      'data-intrinsic': intrinsic ? 'true' : undefined,
            'data-text-align': textAlign ? 'true' : undefined,
      'data-intrinsic': intrinsic ? 'true' : undefined,
            'data-text-align': textAlign ? 'true' : undefined,
      'data-intrinsic': intrinsic ? 'true' : undefined,
      style: {
      '--tagme-center-max-width': maxWidth,
      '--tagme-center-padding': padding
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="レイアウト設定">

            <ToggleControl
              label="テキストの中央揃え"
              checked={ !!textAlign }
              onChange={ (value) => setAttributes({ textAlign: value }) }
            />
            <__experimentalUnitControl
              label="最大幅"
              value={ maxWidth }
              onChange={ (value) => setAttributes({ maxWidth: value }) }
            />
            <ToggleControl
              label="子要素の内在的なサイズによって中央揃えする"
              checked={ !!intrinsic }
              onChange={ (value) => setAttributes({ intrinsic: value }) }
            />
            <__experimentalUnitControl
              label="パディング"
              value={ padding }
              onChange={ (value) => setAttributes({ padding: value }) }
            />
          </PanelBody>
        </InspectorControls>
        <TagName { ...blockProps }>
          <InnerBlocks />
        </TagName>
      </>
    );
  },
  save: ({ attributes }) => {
    const { textAlign, maxWidth, intrinsic, padding } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-center',
      'data-text-align': textAlign ? 'true' : undefined,
      'data-intrinsic': intrinsic ? 'true' : undefined,
      'data-text-align': textAlign ? 'true' : undefined,
      'data-intrinsic': intrinsic ? 'true' : undefined,
            'data-text-align': textAlign ? 'true' : undefined,
      'data-intrinsic': intrinsic ? 'true' : undefined,
            'data-text-align': textAlign ? 'true' : undefined,
      'data-intrinsic': intrinsic ? 'true' : undefined,
      style: {
      '--tagme-center-max-width': maxWidth,
      '--tagme-center-padding': padding
    }
    });
    const TagName = 'div';
    return (
      <TagName { ...blockProps }>
        <InnerBlocks.Content />
      </TagName>
    );
  }
});
