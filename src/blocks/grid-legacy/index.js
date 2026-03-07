import { registerBlockType, createBlock } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: () => (
		<div>
			このブロックは非推奨です。自動的に新しいレスポンシブグリッドに変換されます。
		</div>
	),
	save: () => null,
	transforms: {
		to: [
			{
				type: 'block',
				blocks: [ 'tagme/responsive-grid' ],
				transform: ( attributes, innerBlocks ) => {
					return createBlock(
						'tagme/responsive-grid',
						{ gridMin: '250px', autoRepeat: 'auto-fit' },
						innerBlocks
					);
				},
			},
		],
	},
	deprecated: [
		{
			attributes: { columns: { type: 'number', default: 3 } },
			save: ( { attributes } ) => {
				const blockProps = useBlockProps.save( {
					className: 'tagme-grid',
					style: { '--tagme-grid-columns': attributes.columns },
				} );
				return (
					<div { ...blockProps }>
						<InnerBlocks.Content />
					</div>
				);
			},
		},
	],
} );
