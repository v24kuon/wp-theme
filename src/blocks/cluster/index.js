import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import metadata from './block.json';
import './style.css';

registerBlockType(metadata.name, {
  edit: () => {
    const blockProps = useBlockProps({ className: 'tagme-cluster' });
    return (
      <div { ...blockProps }>
        <InnerBlocks />
      </div>
    );
  },
  save: () => {
    const blockProps = useBlockProps.save({ className: 'tagme-cluster' });
    return (
      <div { ...blockProps }>
        <InnerBlocks.Content />
      </div>
    );
  }
});
