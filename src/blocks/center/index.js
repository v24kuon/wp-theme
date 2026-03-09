import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, __experimentalUnitControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { textAlign, maxWidth } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-center',
      style: {
      '--tagme-center-text-align': textAlign ? 'center' : 'initial',
      '--tagme-center-max-width': maxWidth
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="レイアウト設定">

            <ToggleControl
              label="テキストを中央揃え"
              checked={ !!textAlign }
              onChange={ (value) => setAttributes({ textAlign: value }) }
            />
            <__experimentalUnitControl
              label="最大幅"
              value={ maxWidth }
              onChange={ (value) => setAttributes({ maxWidth: value }) }
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
    const { textAlign, maxWidth } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-center',
      style: {
      '--tagme-center-text-align': textAlign ? 'center' : 'initial',
      '--tagme-center-max-width': maxWidth
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
