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
		const { minHeight, padding } = attributes;
		const blockProps = useBlockProps( {
			className: 'tagme-cover',
			style: {
				'--tagme-cover-min-height': minHeight,
				'--tagme-cover-padding': padding,
			},
		} );
		const TagName = 'div';
		return (
			<>
				<InspectorControls>
					<PanelBody title="レイアウト設定">
						<__experimentalUnitControl
							label="最小の高さ"
							value={ minHeight }
							onChange={ ( value ) =>
								setAttributes( { minHeight: value } )
							}
						/>
						<__experimentalUnitControl
							label="パディング"
							value={ padding }
							onChange={ ( value ) =>
								setAttributes( { padding: value } )
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
		const { minHeight, padding } = attributes;
		const blockProps = useBlockProps.save( {
			className: 'tagme-cover',
			style: {
				'--tagme-cover-min-height': minHeight,
				'--tagme-cover-padding': padding,
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
