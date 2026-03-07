import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, __experimentalUnitControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { noWrap, tagName, justifyContent, padding } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-cluster-divided',
      'data-no-wrap': noWrap ? 'true' : undefined,
      'data-no-wrap': noWrap ? 'true' : undefined,
      'data-no-wrap': noWrap ? 'true' : undefined,
      'data-no-wrap': noWrap ? 'true' : undefined,
            'data-no-wrap': noWrap ? 'true' : undefined,
            'data-no-wrap': noWrap ? 'true' : undefined,
      style: {
      '--tagme-cluster-divided-justify-content': justifyContent,
      '--tagme-cluster-divided-padding': padding
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
              label="HTML 要素"
              value={ tagName }
              options={ [
                { label: '<div>', value: 'div' },
                { label: '<section>', value: 'section' },
                { label: '<article>', value: 'article' },
                { label: '<header>', value: 'header' },
                { label: '<footer>', value: 'footer' },
                { label: '<main>', value: 'main' },
                { label: '<aside>', value: 'aside' },
                { label: '<hgroup>', value: 'hgroup' },
                { label: '<ul>', value: 'ul' },
                { label: '<ol>', value: 'ol' },
              ] }
              onChange={ (value) => setAttributes({ tagName: value }) }
            />
            <SelectControl
              label="水平配置 (Justify Content)"
              value={ justifyContent }
              options={ [
                { label: '指定なし', value: '' },
                { label: '開始位置 (flex-start/start)', value: 'flex-start' },
                { label: '中央揃え (center)', value: 'center' },
                { label: '終了位置 (flex-end/end)', value: 'flex-end' },
                { label: 'ストレッチ (stretch)', value: 'stretch' },
                { label: '均等配置 (space-between)', value: 'space-between' }
              ] }
              onChange={ (value) => setAttributes({ justifyContent: value }) }
            />
            <__experimentalUnitControl
              label="パディング"
              value={ padding }
              onChange={ (value) => setAttributes({ padding: value }) }
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
    const { noWrap, tagName, justifyContent, padding } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-cluster-divided',
      'data-no-wrap': noWrap ? 'true' : undefined,
      'data-no-wrap': noWrap ? 'true' : undefined,
            'data-no-wrap': noWrap ? 'true' : undefined,
            'data-no-wrap': noWrap ? 'true' : undefined,
      style: {
      '--tagme-cluster-divided-justify-content': justifyContent,
      '--tagme-cluster-divided-padding': padding
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
