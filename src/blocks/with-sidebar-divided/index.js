import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { sidebarSide } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-with-sidebar-divided',
      style: {
      '--tagme-with-sidebar-divided-sidebar-side': sidebarSide
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="Settings">

            <TextControl
              label="sidebarSide"
              value={ sidebarSide }
              onChange={ (value) => setAttributes({ sidebarSide: value }) }
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
    const { sidebarSide } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-with-sidebar-divided',
      style: {
      '--tagme-with-sidebar-divided-sidebar-side': sidebarSide
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
