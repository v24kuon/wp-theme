import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
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
          <PanelBody title="Settings">

            <ToggleControl
              label="textAlign"
              checked={ !!textAlign }
              onChange={ (value) => setAttributes({ textAlign: value }) }
            />
            <TextControl
              label="maxWidth"
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
