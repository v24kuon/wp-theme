import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, __experimentalUnitControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { breakpoint } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-responsive-switcher',
      style: {
      '--tagme-responsive-switcher-breakpoint': breakpoint
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="レイアウト設定">

            <TextControl
              label="breakpoint"
              value={ breakpoint }
              onChange={ (value) => setAttributes({ breakpoint: value }) }
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
    const { breakpoint } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-responsive-switcher',
      style: {
      '--tagme-responsive-switcher-breakpoint': breakpoint
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
