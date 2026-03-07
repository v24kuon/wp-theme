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
			sidebarSide,
			isReverse,
			sidebarWidth,
			mainMinWidth,
			alignItems,
			alignContent,
			padding,
			tagName,
		} = attributes;
		const blockProps = useBlockProps( {
			className: 'tagme-with-sidebar-divided',
			'data-sidebar-side': sidebarSide,
			'data-is-reverse': isReverse ? 'true' : undefined,
			style: {
				'--tagme-with-sidebar-divided-sidebar-side': sidebarSide,
				'--tagme-with-sidebar-divided-sidebar-width': sidebarWidth,
				'--tagme-with-sidebar-divided-main-min-width': mainMinWidth,
				'--tagme-with-sidebar-divided-align-items': alignItems,
				'--tagme-with-sidebar-divided-align-content': alignContent,
				'--tagme-with-sidebar-divided-padding': padding,
			},
		} );
		const TagName = 'div';
		return (
			<>
				<InspectorControls>
					<PanelBody title="レイアウト設定">
						<SelectControl
							label="サイドバーとして扱うカラム"
							value={ sidebarSide }
							options={ [
								{ label: '左 (Left)', value: 'left' },
								{ label: '右 (Right)', value: 'right' },
							] }
							onChange={ ( value ) =>
								setAttributes( { sidebarSide: value } )
							}
						/>
						<ToggleControl
							label="逆転する"
							checked={ !! isReverse }
							onChange={ ( value ) =>
								setAttributes( { isReverse: value } )
							}
						/>
						<__experimentalUnitControl
							label="（サイドバーの）幅"
							value={ sidebarWidth }
							onChange={ ( value ) =>
								setAttributes( { sidebarWidth: value } )
							}
						/>
						<__experimentalUnitControl
							label="（メインエリアの）最小幅"
							value={ mainMinWidth }
							onChange={ ( value ) =>
								setAttributes( { mainMinWidth: value } )
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
						<SelectControl
							label="コンテンツの垂直配置 (Align Content)"
							value={ alignContent }
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
								setAttributes( { alignContent: value } )
							}
						/>
						<__experimentalUnitControl
							label="パディング"
							value={ padding }
							onChange={ ( value ) =>
								setAttributes( { padding: value } )
							}
						/>
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
			sidebarSide,
			isReverse,
			sidebarWidth,
			mainMinWidth,
			alignItems,
			alignContent,
			padding,
			tagName,
		} = attributes;
		const blockProps = useBlockProps.save( {
			className: 'tagme-with-sidebar-divided',
			'data-sidebar-side': sidebarSide,
			'data-is-reverse': isReverse ? 'true' : undefined,
			style: {
				'--tagme-with-sidebar-divided-sidebar-side': sidebarSide,
				'--tagme-with-sidebar-divided-sidebar-width': sidebarWidth,
				'--tagme-with-sidebar-divided-main-min-width': mainMinWidth,
				'--tagme-with-sidebar-divided-align-items': alignItems,
				'--tagme-with-sidebar-divided-align-content': alignContent,
				'--tagme-with-sidebar-divided-padding': padding,
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
