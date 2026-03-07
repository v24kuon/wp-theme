import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, __experimentalUnitControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { backdropFilter, maxWidth, minWidth, maxHeight, minHeight, justifyItems, alignContent, backgroundClip, padding, overflow } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-decorator',
      'data-background-clip': backgroundClip ? 'true' : undefined,
      'data-background-clip': backgroundClip ? 'true' : undefined,
      'data-background-clip': backgroundClip ? 'true' : undefined,
      'data-background-clip': backgroundClip ? 'true' : undefined,
            'data-background-clip': backgroundClip ? 'true' : undefined,
            'data-background-clip': backgroundClip ? 'true' : undefined,
      style: {
      '--tagme-decorator-backdrop-filter': backdropFilter,
      '--tagme-decorator-max-width': maxWidth,
      '--tagme-decorator-min-width': minWidth,
      '--tagme-decorator-max-height': maxHeight,
      '--tagme-decorator-min-height': minHeight,
      '--tagme-decorator-justify-items': justifyItems,
      '--tagme-decorator-align-content': alignContent,
      '--tagme-decorator-padding': padding,
      '--tagme-decorator-overflow': overflow
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="レイアウト設定">

            <__experimentalUnitControl
              label="背景フィルター"
              value={ backdropFilter }
              onChange={ (value) => setAttributes({ backdropFilter: value }) }
            />
            <__experimentalUnitControl
              label="最大幅"
              value={ maxWidth }
              onChange={ (value) => setAttributes({ maxWidth: value }) }
            />
            <__experimentalUnitControl
              label="最小幅"
              value={ minWidth }
              onChange={ (value) => setAttributes({ minWidth: value }) }
            />
            <__experimentalUnitControl
              label="最大の高さ"
              value={ maxHeight }
              onChange={ (value) => setAttributes({ maxHeight: value }) }
            />
            <__experimentalUnitControl
              label="最小の高さ"
              value={ minHeight }
              onChange={ (value) => setAttributes({ minHeight: value }) }
            />
            <SelectControl
              label="項目の水平配置 (Justify Items)"
              value={ justifyItems }
              options={ [
                { label: '指定なし', value: '' },
                { label: '開始位置 (flex-start/start)', value: 'flex-start' },
                { label: '中央揃え (center)', value: 'center' },
                { label: '終了位置 (flex-end/end)', value: 'flex-end' },
                { label: 'ストレッチ (stretch)', value: 'stretch' },
                { label: '均等配置 (space-between)', value: 'space-between' }
              ] }
              onChange={ (value) => setAttributes({ justifyItems: value }) }
            />
            <SelectControl
              label="コンテンツの垂直配置 (Align Content)"
              value={ alignContent }
              options={ [
                { label: '指定なし', value: '' },
                { label: '開始位置 (flex-start/start)', value: 'flex-start' },
                { label: '中央揃え (center)', value: 'center' },
                { label: '終了位置 (flex-end/end)', value: 'flex-end' },
                { label: 'ストレッチ (stretch)', value: 'stretch' },
                { label: '均等配置 (space-between)', value: 'space-between' }
              ] }
              onChange={ (value) => setAttributes({ alignContent: value }) }
            />
            <ToggleControl
              label="テキストで背景を切り取る"
              checked={ !!backgroundClip }
              onChange={ (value) => setAttributes({ backgroundClip: value }) }
            />
            <__experimentalUnitControl
              label="パディング"
              value={ padding }
              onChange={ (value) => setAttributes({ padding: value }) }
            />
            <__experimentalUnitControl
              label="オーバーフロー"
              value={ overflow }
              onChange={ (value) => setAttributes({ overflow: value }) }
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
    const { backdropFilter, maxWidth, minWidth, maxHeight, minHeight, justifyItems, alignContent, backgroundClip, padding, overflow } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-decorator',
      'data-background-clip': backgroundClip ? 'true' : undefined,
      'data-background-clip': backgroundClip ? 'true' : undefined,
            'data-background-clip': backgroundClip ? 'true' : undefined,
            'data-background-clip': backgroundClip ? 'true' : undefined,
      style: {
      '--tagme-decorator-backdrop-filter': backdropFilter,
      '--tagme-decorator-max-width': maxWidth,
      '--tagme-decorator-min-width': minWidth,
      '--tagme-decorator-max-height': maxHeight,
      '--tagme-decorator-min-height': minHeight,
      '--tagme-decorator-justify-items': justifyItems,
      '--tagme-decorator-align-content': alignContent,
      '--tagme-decorator-padding': padding,
      '--tagme-decorator-overflow': overflow
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
