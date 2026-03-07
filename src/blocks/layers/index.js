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
		const {
			backgroundBehavior,
			blur,
			switchGrid,
			columns,
			rows,
			minHeight,
		} = attributes;
		const blockProps = useBlockProps( {
			className: 'tagme-layers',
			'data-switch-grid': switchGrid ? 'true' : undefined,
			style: {
				'--tagme-layers-background-behavior': backgroundBehavior,
				'--tagme-layers-blur': blur,
				'--tagme-layers-columns': columns,
				'--tagme-layers-rows': rows,
				'--tagme-layers-min-height': minHeight,
			},
		} );
		const TagName = 'div';
		return (
			<>
				<InspectorControls>
					<PanelBody title="レイアウト設定">
						<__experimentalUnitControl
							label="背景画像/動画の扱い"
							value={ backgroundBehavior }
							onChange={ ( value ) =>
								setAttributes( { backgroundBehavior: value } )
							}
						/>
						<__experimentalUnitControl
							label="背景をぼかす"
							value={ blur }
							onChange={ ( value ) =>
								setAttributes( { blur: value } )
							}
						/>
						<ToggleControl
							label="グリッド線の方向の切り替え"
							checked={ !! switchGrid }
							onChange={ ( value ) =>
								setAttributes( { switchGrid: value } )
							}
						/>
						<TextControl
							type="number"
							label="カラム数"
							value={ columns }
							onChange={ ( value ) =>
								setAttributes( { columns: parseInt( value ) } )
							}
						/>
						<TextControl
							type="number"
							label="行数"
							value={ rows }
							onChange={ ( value ) =>
								setAttributes( { rows: parseInt( value ) } )
							}
						/>
						<__experimentalUnitControl
							label="最小の高さ"
							value={ minHeight }
							onChange={ ( value ) =>
								setAttributes( { minHeight: value } )
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
		const {
			backgroundBehavior,
			blur,
			switchGrid,
			columns,
			rows,
			minHeight,
		} = attributes;
		const blockProps = useBlockProps.save( {
			className: 'tagme-layers',
			'data-switch-grid': switchGrid ? 'true' : undefined,
			style: {
				'--tagme-layers-background-behavior': backgroundBehavior,
				'--tagme-layers-blur': blur,
				'--tagme-layers-columns': columns,
				'--tagme-layers-rows': rows,
				'--tagme-layers-min-height': minHeight,
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
