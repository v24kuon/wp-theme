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
			sidebarWidth,
			mainMinWidth,
			isReverse,
			alignItems,
			overflow,
		} = attributes;
		const blockProps = useBlockProps( {
			className: 'tagme-with-sidebar',
			'data-sidebar-side': sidebarSide,
			'data-is-reverse': isReverse ? 'true' : undefined,
			style: {
				'--tagme-with-sidebar-sidebar-side': sidebarSide,
				'--tagme-with-sidebar-sidebar-width': sidebarWidth,
				'--tagme-with-sidebar-main-min-width': mainMinWidth,
				'--tagme-with-sidebar-align-items': alignItems,
				'--tagme-with-sidebar-overflow': overflow,
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
						<__experimentalUnitControl
							label="オーバーフロー"
							value={ overflow }
							onChange={ ( value ) =>
								setAttributes( { overflow: value } )
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
			sidebarWidth,
			mainMinWidth,
			isReverse,
			alignItems,
			overflow,
		} = attributes;
		const blockProps = useBlockProps.save( {
			className: 'tagme-with-sidebar',
			'data-sidebar-side': sidebarSide,
			'data-is-reverse': isReverse ? 'true' : undefined,
			style: {
				'--tagme-with-sidebar-sidebar-side': sidebarSide,
				'--tagme-with-sidebar-sidebar-width': sidebarWidth,
				'--tagme-with-sidebar-main-min-width': mainMinWidth,
				'--tagme-with-sidebar-align-items': alignItems,
				'--tagme-with-sidebar-overflow': overflow,
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
