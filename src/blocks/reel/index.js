import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { height, hideScrollbar } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-reel',
      style: {
      '--tagme-reel-height': height,
      '--tagme-reel-scrollbar-width': hideScrollbar ? 'none' : 'auto'
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="Settings">

            <TextControl
              label="height"
              value={ height }
              onChange={ (value) => setAttributes({ height: value }) }
            />
            <ToggleControl
              label="hideScrollbar"
              checked={ !!hideScrollbar }
              onChange={ (value) => setAttributes({ hideScrollbar: value }) }
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
    const { height, hideScrollbar } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-reel',
      style: {
      '--tagme-reel-height': height,
      '--tagme-reel-scrollbar-width': hideScrollbar ? 'none' : 'auto'
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
