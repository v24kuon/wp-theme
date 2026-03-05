import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, __experimentalUnitControl } from '@wordpress/components';
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
          <PanelBody title="レイアウト設定">

            <ToggleControl
              label="折り返しなし"
              checked={ !!noWrap }
              onChange={ (value) => setAttributes({ noWrap: value }) }
            />
            <SelectControl
              label="水平配置 (Justify Content)"
              value={ justifyContent }
              options={ [{label: '開始位置 (Flex Start)', value: 'flex-start'}, {label: '中央揃え (Center)', value: 'center'}, {label: '終了位置 (Flex End)', value: 'flex-end'}, {label: '均等配置 (Space Between)', value: 'space-between'}] }
              onChange={ (value) => setAttributes({ justifyContent: value }) }
            />
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
,
  deprecated: [
    {
      attributes: {},
      save: ({ attributes }) => {
        return (
          <div { ...useBlockProps.save({ className: 'tagme-cluster' }) }>
            <InnerBlocks.Content />
          </div>
        );
      }
    }
  ]
});