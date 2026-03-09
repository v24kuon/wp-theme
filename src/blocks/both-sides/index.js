import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, __experimentalUnitControl } from '@wordpress/components';
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
          <PanelBody title="レイアウト設定">

            <SelectControl
              label="垂直配置 (Align Items)"
              value={ alignItems }
              options={ [{label: '開始位置 (Flex Start)', value: 'flex-start'}, {label: '中央揃え (Center)', value: 'center'}, {label: '終了位置 (Flex End)', value: 'flex-end'}, {label: 'ストレッチ (Stretch)', value: 'stretch'}] }
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
