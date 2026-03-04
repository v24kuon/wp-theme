import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { minHeight, padding } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-cover',
      style: {
      '--tagme-cover-min-height': minHeight,
      '--tagme-cover-padding': padding
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="Settings">

            <TextControl
              label="minHeight"
              value={ minHeight }
              onChange={ (value) => setAttributes({ minHeight: value }) }
            />
            <TextControl
              label="padding"
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
    const { minHeight, padding } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-cover',
      style: {
      '--tagme-cover-min-height': minHeight,
      '--tagme-cover-padding': padding
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
