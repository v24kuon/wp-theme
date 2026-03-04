import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { alignItems } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-both-sides',
      style: {
      '--tagme-both-sides-align-items': alignItems
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="Settings">

            <TextControl
              label="alignItems"
              value={ alignItems }
              onChange={ (value) => setAttributes({ alignItems: value }) }
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
    const { alignItems } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-both-sides',
      style: {
      '--tagme-both-sides-align-items': alignItems
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
