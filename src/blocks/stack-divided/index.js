import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { tagName } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-stack-divided',
      style: {}
    });
    const TagName = tagName;
    return (
      <>
        <InspectorControls>
          <PanelBody title="Settings">

            <TextControl
              label="tagName"
              value={ tagName }
              onChange={ (value) => setAttributes({ tagName: value }) }
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
    const { tagName } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-stack-divided',
      style: {}
    });
    const TagName = tagName;
    return (
      <TagName { ...blockProps }>
        <InnerBlocks.Content />
      </TagName>
    );
  }
});
