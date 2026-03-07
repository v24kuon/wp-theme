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
		const { threshold, isReverse, alignItems, stairs } = attributes;
		const blockProps = useBlockProps( {
			className: 'tagme-switcher',
			'data-is-reverse': isReverse ? 'true' : undefined,
			'data-stairs': stairs ? 'true' : undefined,
			style: {
				'--tagme-switcher-threshold': threshold,
				'--tagme-switcher-align-items': alignItems,
			},
		} );
		const TagName = 'div';
		return (
			<>
				<InspectorControls>
					<PanelBody title="レイアウト設定">
						<__experimentalUnitControl
							label="閾値"
							value={ threshold }
							onChange={ ( value ) =>
								setAttributes( { threshold: value } )
							}
						/>
						<ToggleControl
							label="逆転する"
							checked={ !! isReverse }
							onChange={ ( value ) =>
								setAttributes( { isReverse: value } )
							}
						/>
						<SelectControl
							label="垂直配置 (Align Items)"
							value={ alignItems }
							options={ [
								{ label: '指定なし', value: '' },
								{
									label: '開始位置 (flex-start/start)',
									value: 'flex-start',
								},
								{ label: '中央揃え (center)', value: 'center' },
								{
									label: '終了位置 (flex-end/end)',
									value: 'flex-end',
								},
								{
									label: 'ストレッチ (stretch)',
									value: 'stretch',
								},
								{
									label: '均等配置 (space-between)',
									value: 'space-between',
								},
							] }
							onChange={ ( value ) =>
								setAttributes( { alignItems: value } )
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
		const { threshold, isReverse, alignItems, stairs } = attributes;
		const blockProps = useBlockProps.save( {
			className: 'tagme-switcher',
			'data-is-reverse': isReverse ? 'true' : undefined,
			'data-stairs': stairs ? 'true' : undefined,
			style: {
				'--tagme-switcher-threshold': threshold,
				'--tagme-switcher-align-items': alignItems,
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
