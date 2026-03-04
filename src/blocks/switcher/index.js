import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { threshold } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-switcher',
      style: {
      '--tagme-switcher-threshold': threshold
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="Settings">

            <TextControl
              label="threshold"
              value={ threshold }
              onChange={ (value) => setAttributes({ threshold: value }) }
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
    const { threshold } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-switcher',
      style: {
      '--tagme-switcher-threshold': threshold
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
