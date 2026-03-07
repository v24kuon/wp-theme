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
		const { aspectRatio, switchRatio } = attributes;
		const blockProps = useBlockProps( {
			className: 'tagme-frame',
			'data-switch-ratio': switchRatio ? 'true' : undefined,
			style: {
				'--tagme-frame-aspect-ratio': aspectRatio,
			},
		} );
		const TagName = 'div';
		return (
			<>
				<InspectorControls>
					<PanelBody title="レイアウト設定">
						<__experimentalUnitControl
							label="アスペクト比"
							value={ aspectRatio }
							onChange={ ( value ) =>
								setAttributes( { aspectRatio: value } )
							}
						/>
						<ToggleControl
							label="アスペクト比の切り替え"
							checked={ !! switchRatio }
							onChange={ ( value ) =>
								setAttributes( { switchRatio: value } )
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
		const { aspectRatio, switchRatio } = attributes;
		const blockProps = useBlockProps.save( {
			className: 'tagme-frame',
			'data-switch-ratio': switchRatio ? 'true' : undefined,
			style: {
				'--tagme-frame-aspect-ratio': aspectRatio,
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
