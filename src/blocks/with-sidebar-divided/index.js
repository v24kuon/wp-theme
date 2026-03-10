import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, __experimentalUnitControl } from '@wordpress/components';
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
          <PanelBody title="レイアウト設定">

            <TextControl
              label="サイドバーの位置"
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
