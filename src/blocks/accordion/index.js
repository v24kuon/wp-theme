import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { useLabel, summaryText, mark, defaultOpen, useQuestionLabel, questionWidth, useAnswerLabel, answerWidth, padding } = attributes;
    const blockProps = useBlockProps({ className: 'tagme-accordion' });
    return (
      <>
        <InspectorControls>
          <PanelBody title="レイアウト設定">

            <ToggleControl
              label="useLabel"
              checked={ !!useLabel }
              onChange={ (value) => setAttributes({ useLabel: value }) }
            />
            <__experimentalUnitControl
              label="summaryText"
              value={ summaryText }
              onChange={ (value) => setAttributes({ summaryText: value }) }
            />
            <__experimentalUnitControl
              label="マーク"
              value={ mark }
              onChange={ (value) => setAttributes({ mark: value }) }
            />
            <ToggleControl
              label="デフォルトで開く"
              checked={ !!defaultOpen }
              onChange={ (value) => setAttributes({ defaultOpen: value }) }
            />
            <ToggleControl
              label="質問のラベルを使用する"
              checked={ !!useQuestionLabel }
              onChange={ (value) => setAttributes({ useQuestionLabel: value }) }
            />
            <__experimentalUnitControl
              label="質問のラベル幅"
              value={ questionWidth }
              onChange={ (value) => setAttributes({ questionWidth: value }) }
            />
            <ToggleControl
              label="回答のラベルを使用する"
              checked={ !!useAnswerLabel }
              onChange={ (value) => setAttributes({ useAnswerLabel: value }) }
            />
            <__experimentalUnitControl
              label="回答のラベル幅"
              value={ answerWidth }
              onChange={ (value) => setAttributes({ answerWidth: value }) }
            />
            <__experimentalUnitControl
              label="パディング"
              value={ padding }
              onChange={ (value) => setAttributes({ padding: value }) }
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
    const { useLabel, summaryText, mark, defaultOpen, useQuestionLabel, questionWidth, useAnswerLabel, answerWidth, padding } = attributes;
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
