import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { sidebarSide, sidebarWidth, mainMinWidth } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-with-sidebar',
      style: {
      '--tagme-with-sidebar-sidebar-side': sidebarSide,
      '--tagme-with-sidebar-sidebar-width': sidebarWidth,
      '--tagme-with-sidebar-main-min-width': mainMinWidth
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
            <TextControl
              label="sidebarWidth"
              value={ sidebarWidth }
              onChange={ (value) => setAttributes({ sidebarWidth: value }) }
            />
            <TextControl
              label="mainMinWidth"
              value={ mainMinWidth }
              onChange={ (value) => setAttributes({ mainMinWidth: value }) }
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
    const { sidebarSide, sidebarWidth, mainMinWidth } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-with-sidebar',
      style: {
      '--tagme-with-sidebar-sidebar-side': sidebarSide,
      '--tagme-with-sidebar-sidebar-width': sidebarWidth,
      '--tagme-with-sidebar-main-min-width': mainMinWidth
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
