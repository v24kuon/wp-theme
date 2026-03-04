import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { noWrap, justifyContent, alignItems } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-cluster',
      style: {
      '--tagme-cluster-wrap': noWrap ? 'nowrap' : 'wrap',
      '--tagme-cluster-justify-content': justifyContent,
      '--tagme-cluster-align-items': alignItems
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="Settings">

            <ToggleControl
              label="noWrap"
              checked={ !!noWrap }
              onChange={ (value) => setAttributes({ noWrap: value }) }
            />
            <TextControl
              label="justifyContent"
              value={ justifyContent }
              onChange={ (value) => setAttributes({ justifyContent: value }) }
            />
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
    const { noWrap, justifyContent, alignItems } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-cluster',
      style: {
      '--tagme-cluster-wrap': noWrap ? 'nowrap' : 'wrap',
      '--tagme-cluster-justify-content': justifyContent,
      '--tagme-cluster-align-items': alignItems
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
