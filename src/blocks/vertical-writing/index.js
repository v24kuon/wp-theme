import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { textOrientation } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-vertical-writing',
      style: {
      '--tagme-vertical-writing-text-orientation': textOrientation
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="Settings">

            <TextControl
              label="textOrientation"
              value={ textOrientation }
              onChange={ (value) => setAttributes({ textOrientation: value }) }
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
    const { textOrientation } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-vertical-writing',
      style: {
      '--tagme-vertical-writing-text-orientation': textOrientation
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
