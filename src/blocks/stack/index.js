import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { tagName, isReverse, justifyContent } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-stack',
      style: {
      '--tagme-stack-justify-content': justifyContent
    }
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
            <ToggleControl
              label="isReverse"
              checked={ !!isReverse }
              onChange={ (value) => setAttributes({ isReverse: value }) }
            />
            <TextControl
              label="justifyContent"
              value={ justifyContent }
              onChange={ (value) => setAttributes({ justifyContent: value }) }
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
    const { tagName, isReverse, justifyContent } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-stack',
      style: {
      '--tagme-stack-justify-content': justifyContent
    }
    });
    const TagName = tagName;
    return (
      <TagName { ...blockProps }>
        <InnerBlocks.Content />
      </TagName>
    );
  }
});
