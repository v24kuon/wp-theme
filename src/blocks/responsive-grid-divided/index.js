import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { gridMin } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-responsive-grid-divided',
      style: {
      '--tagme-responsive-grid-divided-grid-min': gridMin
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="Settings">

            <TextControl
              label="gridMin"
              value={ gridMin }
              onChange={ (value) => setAttributes({ gridMin: value }) }
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
    const { gridMin } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-responsive-grid-divided',
      style: {
      '--tagme-responsive-grid-divided-grid-min': gridMin
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
