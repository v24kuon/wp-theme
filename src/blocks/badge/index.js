import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { shape, size } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-badge',
      style: {
      '--tagme-badge-shape': shape,
      '--tagme-badge-size': size
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="Settings">

            <TextControl
              label="shape"
              value={ shape }
              onChange={ (value) => setAttributes({ shape: value }) }
            />
            <TextControl
              label="size"
              value={ size }
              onChange={ (value) => setAttributes({ size: value }) }
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
    const { shape, size } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-badge',
      style: {
      '--tagme-badge-shape': shape,
      '--tagme-badge-size': size
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
