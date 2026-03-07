import { registerBlockType } from '@wordpress/blocks';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	ToggleControl,
	SelectControl,
	__experimentalUnitControl,
} from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType( metadata.name, {
	edit: ( { attributes, setAttributes } ) => {
		const { paddingY } = attributes;
		const blockProps = useBlockProps( {
			className: 'tagme-gutters',
			style: {
				'--tagme-gutters-padding-y': paddingY,
			},
		} );
		const TagName = 'div';
		return (
			<>
				<InspectorControls>
					<PanelBody title="レイアウト設定">
						<__experimentalUnitControl
							label="上下パディング"
							value={ paddingY }
							onChange={ ( value ) =>
								setAttributes( { paddingY: value } )
							}
						/>
					</PanelBody>
				</InspectorControls>
				<TagName { ...blockProps }>
					<InnerBlocks />
				</TagName>
			</>
		);
	},
	save: ( { attributes } ) => {
		const { paddingY } = attributes;
		const blockProps = useBlockProps.save( {
			className: 'tagme-gutters',
			style: {
				'--tagme-gutters-padding-y': paddingY,
			},
		} );
		const TagName = 'div';
		return (
			<TagName { ...blockProps }>
				<InnerBlocks.Content />
			</TagName>
		);
	},
} );
