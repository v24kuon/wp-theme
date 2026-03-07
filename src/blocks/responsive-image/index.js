import { registerBlockType } from '@wordpress/blocks';
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType( metadata.name, {
	edit: ( { attributes, setAttributes } ) => {
		const { imageUrl, alt } = attributes;
		const blockProps = useBlockProps( {
			className: 'tagme-responsive-image',
		} );
		return (
			<div { ...blockProps }>
				{ imageUrl ? (
					<img
						src={ imageUrl }
						alt={ alt || 'レスポンシブ画像' }
						style={ { maxWidth: '100%', height: 'auto' } }
					/>
				) : (
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) =>
								setAttributes( {
									imageUrl: media.url,
									alt: media.alt,
								} )
							}
							allowedTypes={ [ 'image' ] }
							render={ ( { open } ) => (
								<Button variant="primary" onClick={ open }>
									画像を選択
								</Button>
							) }
						/>
					</MediaUploadCheck>
				) }
			</div>
		);
	},
	save: ( { attributes } ) => {
		const { imageUrl, alt } = attributes;
		const blockProps = useBlockProps.save( {
			className: 'tagme-responsive-image',
		} );
		if ( ! imageUrl ) return null;
		return (
			<picture { ...blockProps }>
				{ /* Placeholder for actual picture sources representing art direction */ }
				<source srcSet={ imageUrl } media="(min-width: 768px)" />
				<img
					src={ imageUrl }
					alt={ alt || 'レスポンシブ画像' }
					loading="lazy"
					style={ { maxWidth: '100%', height: 'auto' } }
				/>
			</picture>
		);
	},
} );
