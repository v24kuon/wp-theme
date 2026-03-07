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
			tagName,
			isReverse,
			justifyContent,
			alignItems,
			useNegativeMargin,
		} = attributes;
		const blockProps = useBlockProps( {
			className: 'tagme-stack',
			'data-is-reverse': isReverse ? 'true' : undefined,
			'data-use-negative-margin': useNegativeMargin ? 'true' : undefined,
			style: {
				'--tagme-stack-justify-content': justifyContent,
				'--tagme-stack-align-items': alignItems,
			},
		} );
		const TagName = tagName;
		return (
			<>
				<InspectorControls>
					<PanelBody title="レイアウト設定">
						<SelectControl
							label="HTML 要素"
							value={ tagName }
							options={ [
								{ label: '<div>', value: 'div' },
								{ label: '<section>', value: 'section' },
								{ label: '<article>', value: 'article' },
								{ label: '<header>', value: 'header' },
								{ label: '<footer>', value: 'footer' },
								{ label: '<main>', value: 'main' },
								{ label: '<aside>', value: 'aside' },
								{ label: '<hgroup>', value: 'hgroup' },
								{ label: '<ul>', value: 'ul' },
								{ label: '<ol>', value: 'ol' },
							] }
							onChange={ ( value ) =>
								setAttributes( { tagName: value } )
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
							label="水平配置 (Justify Content)"
							value={ justifyContent }
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
								setAttributes( { justifyContent: value } )
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
							label="ネガティブマージンを使用する"
							checked={ !! useNegativeMargin }
							onChange={ ( value ) =>
								setAttributes( { useNegativeMargin: value } )
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
			tagName,
			isReverse,
			justifyContent,
			alignItems,
			useNegativeMargin,
		} = attributes;
		const blockProps = useBlockProps.save( {
			className: 'tagme-stack',
			'data-is-reverse': isReverse ? 'true' : undefined,
			'data-use-negative-margin': useNegativeMargin ? 'true' : undefined,
			style: {
				'--tagme-stack-justify-content': justifyContent,
				'--tagme-stack-align-items': alignItems,
			},
		} );
		const TagName = tagName;
		return (
			<TagName { ...blockProps }>
				<InnerBlocks.Content />
			</TagName>
		);
	},
	deprecated: [
		{
			attributes: {},
			save: ( { attributes } ) => {
				return (
					<div
						{ ...useBlockProps.save( {
							className: 'tagme-stack',
						} ) }
					>
						<InnerBlocks.Content />
					</div>
				);
			},
		},
	],
} );
