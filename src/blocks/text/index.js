import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, __experimentalUnitControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { maxWidth, intrinsic, multiColumn, padding } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-text',
      'data-intrinsic': intrinsic ? 'true' : undefined,
      'data-multi-column': multiColumn ? 'true' : undefined,
      'data-intrinsic': intrinsic ? 'true' : undefined,
      'data-multi-column': multiColumn ? 'true' : undefined,
      'data-intrinsic': intrinsic ? 'true' : undefined,
      'data-multi-column': multiColumn ? 'true' : undefined,
      'data-intrinsic': intrinsic ? 'true' : undefined,
      'data-multi-column': multiColumn ? 'true' : undefined,
            'data-intrinsic': intrinsic ? 'true' : undefined,
      'data-multi-column': multiColumn ? 'true' : undefined,
            'data-intrinsic': intrinsic ? 'true' : undefined,
      'data-multi-column': multiColumn ? 'true' : undefined,
      style: {
      '--tagme-text-max-width': maxWidth,
      '--tagme-text-padding': padding
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="レイアウト設定">

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
            <ToggleControl
              label="マルチカラム"
              checked={ !!multiColumn }
              onChange={ (value) => setAttributes({ multiColumn: value }) }
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
    const { maxWidth, intrinsic, multiColumn, padding } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-text',
      'data-intrinsic': intrinsic ? 'true' : undefined,
      'data-multi-column': multiColumn ? 'true' : undefined,
      'data-intrinsic': intrinsic ? 'true' : undefined,
      'data-multi-column': multiColumn ? 'true' : undefined,
            'data-intrinsic': intrinsic ? 'true' : undefined,
      'data-multi-column': multiColumn ? 'true' : undefined,
            'data-intrinsic': intrinsic ? 'true' : undefined,
      'data-multi-column': multiColumn ? 'true' : undefined,
      style: {
      '--tagme-text-max-width': maxWidth,
      '--tagme-text-padding': padding
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
