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
		const { height, hideScrollbar } = attributes;
		const blockProps = useBlockProps( {
			className: 'tagme-reel',
			'data-hide-scrollbar': hideScrollbar ? 'true' : undefined,
			style: {
				'--tagme-reel-height': height,
			},
		} );
		const TagName = 'div';
		return (
			<>
				<InspectorControls>
					<PanelBody title="レイアウト設定">
						<__experimentalUnitControl
							label="高さ"
							value={ height }
							onChange={ ( value ) =>
								setAttributes( { height: value } )
							}
						/>
						<ToggleControl
							label="スクロールバーなし"
							checked={ !! hideScrollbar }
							onChange={ ( value ) =>
								setAttributes( { hideScrollbar: value } )
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
		const { height, hideScrollbar } = attributes;
		const blockProps = useBlockProps.save( {
			className: 'tagme-reel',
			'data-hide-scrollbar': hideScrollbar ? 'true' : undefined,
			style: {
				'--tagme-reel-height': height,
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
