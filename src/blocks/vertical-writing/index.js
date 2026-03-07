import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, __experimentalUnitControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { textOrientation, threshold, switchPortrait, maxWidth, maxHeight } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-vertical-writing',
      'data-switch-portrait': switchPortrait ? 'true' : undefined,
      'data-switch-portrait': switchPortrait ? 'true' : undefined,
      'data-switch-portrait': switchPortrait ? 'true' : undefined,
      'data-switch-portrait': switchPortrait ? 'true' : undefined,
            'data-switch-portrait': switchPortrait ? 'true' : undefined,
            'data-switch-portrait': switchPortrait ? 'true' : undefined,
      style: {
      '--tagme-vertical-writing-text-orientation': textOrientation,
      '--tagme-vertical-writing-threshold': threshold,
      '--tagme-vertical-writing-max-width': maxWidth,
      '--tagme-vertical-writing-max-height': maxHeight
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="レイアウト設定">

            <SelectControl
              label="テキストの向き"
              value={ textOrientation }
              options={ [
                { label: 'Mixed', value: 'mixed' },
                { label: 'Upright', value: 'upright' },
                { label: 'Sideways', value: 'sideways' }
              ] }
              onChange={ (value) => setAttributes({ textOrientation: value }) }
            />
            <__experimentalUnitControl
              label="閾値"
              value={ threshold }
              onChange={ (value) => setAttributes({ threshold: value }) }
            />
            <ToggleControl
              label="ポートレートのときは横書きに切り替える"
              checked={ !!switchPortrait }
              onChange={ (value) => setAttributes({ switchPortrait: value }) }
            />
            <__experimentalUnitControl
              label="最大幅"
              value={ maxWidth }
              onChange={ (value) => setAttributes({ maxWidth: value }) }
            />
            <__experimentalUnitControl
              label="最大の高さ"
              value={ maxHeight }
              onChange={ (value) => setAttributes({ maxHeight: value }) }
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
    const { textOrientation, threshold, switchPortrait, maxWidth, maxHeight } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-vertical-writing',
      'data-switch-portrait': switchPortrait ? 'true' : undefined,
      'data-switch-portrait': switchPortrait ? 'true' : undefined,
            'data-switch-portrait': switchPortrait ? 'true' : undefined,
            'data-switch-portrait': switchPortrait ? 'true' : undefined,
      style: {
      '--tagme-vertical-writing-text-orientation': textOrientation,
      '--tagme-vertical-writing-threshold': threshold,
      '--tagme-vertical-writing-max-width': maxWidth,
      '--tagme-vertical-writing-max-height': maxHeight
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
