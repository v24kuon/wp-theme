import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, __experimentalUnitControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { noWrap } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-cluster-divided',
      style: {
      '--tagme-cluster-divided-wrap': noWrap ? 'nowrap' : 'wrap'
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="レイアウト設定">

            <ToggleControl
              label="折り返しなし"
              checked={ !!noWrap }
              onChange={ (value) => setAttributes({ noWrap: value }) }
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
    const { noWrap } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-cluster-divided',
      style: {
      '--tagme-cluster-divided-wrap': noWrap ? 'nowrap' : 'wrap'
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
