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
		const { gridMin, autoRepeat, stairs } = attributes;
		const blockProps = useBlockProps( {
			className: 'tagme-responsive-grid',
			'data-stairs': stairs ? 'true' : undefined,
			style: {
				'--tagme-responsive-grid-grid-min': gridMin,
				'--tagme-responsive-grid-auto-repeat': autoRepeat,
			},
		} );
		const TagName = 'div';
		return (
			<>
				<InspectorControls>
					<PanelBody title="レイアウト設定">
						<__experimentalUnitControl
							label="カラムの最小幅"
							value={ gridMin }
							onChange={ ( value ) =>
								setAttributes( { gridMin: value } )
							}
						/>
						<SelectControl
							label="自動反復"
							value={ autoRepeat }
							options={ [
								{
									label: 'auto-fit (埋める)',
									value: 'auto-fit',
								},
								{
									label: 'auto-fill (維持する)',
									value: 'auto-fill',
								},
							] }
							onChange={ ( value ) =>
								setAttributes( { autoRepeat: value } )
							}
						/>
						<ToggleControl
							label="階段グリッド"
							checked={ !! stairs }
							onChange={ ( value ) =>
								setAttributes( { stairs: value } )
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
		const { gridMin, autoRepeat, stairs } = attributes;
		const blockProps = useBlockProps.save( {
			className: 'tagme-responsive-grid',
			'data-stairs': stairs ? 'true' : undefined,
			style: {
				'--tagme-responsive-grid-grid-min': gridMin,
				'--tagme-responsive-grid-auto-repeat': autoRepeat,
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
