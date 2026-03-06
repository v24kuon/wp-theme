import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, __experimentalUnitControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { backgroundBehavior } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-layers',
      style: {
      '--tagme-layers-background-behavior': backgroundBehavior
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="レイアウト設定">

            <TextControl
              label="背景の扱い"
              value={ backgroundBehavior }
              onChange={ (value) => setAttributes({ backgroundBehavior: value }) }
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
    const { backgroundBehavior } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-layers',
      style: {
      '--tagme-layers-background-behavior': backgroundBehavior
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
