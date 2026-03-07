import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, __experimentalUnitControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { maxWidth, padding } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-container',
      style: {
      '--tagme-container-max-width': maxWidth,
      '--tagme-container-padding': padding
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
    const { maxWidth, padding } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-container',
      style: {
      '--tagme-container-max-width': maxWidth,
      '--tagme-container-padding': padding
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
