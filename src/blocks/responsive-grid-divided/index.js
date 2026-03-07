import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, __experimentalUnitControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { gridMin, tagName, autoRepeat, alignContent, padding } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-responsive-grid-divided',
      style: {
      '--tagme-responsive-grid-divided-grid-min': gridMin,
      '--tagme-responsive-grid-divided-auto-repeat': autoRepeat,
      '--tagme-responsive-grid-divided-align-content': alignContent,
      '--tagme-responsive-grid-divided-padding': padding
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="レイアウト設定">

            <__experimentalUnitControl
              label="カラムの最小幅"
              value={ gridMin }
              onChange={ (value) => setAttributes({ gridMin: value }) }
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
              label="自動反復"
              value={ autoRepeat }
              options={ [
                { label: 'auto-fit (埋める)', value: 'auto-fit' },
                { label: 'auto-fill (維持する)', value: 'auto-fill' }
              ] }
              onChange={ (value) => setAttributes({ autoRepeat: value }) }
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
    const { gridMin, tagName, autoRepeat, alignContent, padding } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-responsive-grid-divided',
      style: {
      '--tagme-responsive-grid-divided-grid-min': gridMin,
      '--tagme-responsive-grid-divided-auto-repeat': autoRepeat,
      '--tagme-responsive-grid-divided-align-content': alignContent,
      '--tagme-responsive-grid-divided-padding': padding
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
