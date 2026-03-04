import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { gridMin, autoRepeat } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-responsive-grid',
      style: {
      '--tagme-grid-min': gridMin,
      '--tagme-grid-auto-repeat': autoRepeat
    }
    });
    const TagName = 'div';
    return (
      <>
        <InspectorControls>
          <PanelBody title="Settings">

            <TextControl
              label="gridMin"
              value={ gridMin }
              onChange={ (value) => setAttributes({ gridMin: value }) }
            />
            <TextControl
              label="autoRepeat"
              value={ autoRepeat }
              onChange={ (value) => setAttributes({ autoRepeat: value }) }
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
    const { gridMin, autoRepeat } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-responsive-grid',
      style: {
      '--tagme-grid-min': gridMin,
      '--tagme-grid-auto-repeat': autoRepeat
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
