import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, __experimentalUnitControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { tagName, isReverse, padding } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-stack-divided',
      'data-is-reverse': isReverse ? 'true' : undefined,
      'data-is-reverse': isReverse ? 'true' : undefined,
      'data-is-reverse': isReverse ? 'true' : undefined,
      'data-is-reverse': isReverse ? 'true' : undefined,
            'data-is-reverse': isReverse ? 'true' : undefined,
            'data-is-reverse': isReverse ? 'true' : undefined,
      style: {
      '--tagme-stack-divided-padding': padding
    }
    });
    const TagName = tagName;
    return (
      <>
        <InspectorControls>
          <PanelBody title="レイアウト設定">

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
            <ToggleControl
              label="逆転する"
              checked={ !!isReverse }
              onChange={ (value) => setAttributes({ isReverse: value }) }
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
    const { tagName, isReverse, padding } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-stack-divided',
      'data-is-reverse': isReverse ? 'true' : undefined,
      'data-is-reverse': isReverse ? 'true' : undefined,
            'data-is-reverse': isReverse ? 'true' : undefined,
            'data-is-reverse': isReverse ? 'true' : undefined,
      style: {
      '--tagme-stack-divided-padding': padding
    }
    });
    const TagName = tagName;
    return (
      <TagName { ...blockProps }>
        <InnerBlocks.Content />
      </TagName>
    );
  }
});
