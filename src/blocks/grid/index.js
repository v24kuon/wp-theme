import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: ({ attributes, setAttributes }) => {
    const { columns } = attributes;
    const blockProps = useBlockProps({
      className: 'tagme-grid',
      style: { '--tagme-grid-columns': columns }
    });

    return (
      <>
        <InspectorControls>
          <PanelBody title="Grid Settings">
            <RangeControl
              label="Columns"
              value={columns}
              onChange={(value) => setAttributes({ columns: value })}
              min={1}
              max={12}
            />
          </PanelBody>
        </InspectorControls>
        <div { ...blockProps }>
          <InnerBlocks />
        </div>
      </>
    );
  },
  save: ({ attributes }) => {
    const { columns } = attributes;
    const blockProps = useBlockProps.save({
      className: 'tagme-grid',
      style: { '--tagme-grid-columns': columns }
    });
    return (
      <div { ...blockProps }>
        <InnerBlocks.Content />
      </div>
    );
  }
});
