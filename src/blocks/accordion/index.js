import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { useLabel, summaryText } = attributes;
    const blockProps = useBlockProps({ className: 'tagme-accordion' });
    return (
      <>
        <InspectorControls>
          <PanelBody title="レイアウト設定">
            <ToggleControl
              label="ラベルを使用"
              checked={ !!useLabel }
              onChange={ (value) => setAttributes({ useLabel: value }) }
            />
          </PanelBody>
        </InspectorControls>
        <details { ...blockProps } open>
          {useLabel && (
            <RichText
              tagName="summary"
              value={summaryText}
              onChange={(value) => setAttributes({ summaryText: value })}
              placeholder="アコーディオンのラベルを入力..."
            />
          )}
          <div className="tagme-accordion-content">
            <InnerBlocks />
          </div>
        </details>
      </>
    );
  },
  save: ({ attributes }) => {
    const { useLabel, summaryText } = attributes;
    const blockProps = useBlockProps.save({ className: 'tagme-accordion' });
    return (
      <details { ...blockProps }>
        {useLabel && (
          <RichText.Content
            tagName="summary"
            value={summaryText}
          />
        )}
        <div className="tagme-accordion-content">
          <InnerBlocks.Content />
        </div>
      </details>
    );
  }
});
