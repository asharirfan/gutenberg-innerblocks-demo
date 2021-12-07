import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const { attributes: { item }, setAttributes } = props;

	return (
		<p>
			<RichText
				allowedFormats={ [
					'core/bold',
					'core/italic',
				] }
				aria-label={ __( 'Block items text', 'wdsx' ) }
				identifier="item"
				onChange={ ( newItem ) => {
					setAttributes( { item: newItem } );
				} }
				placeholder={ __( 'List down the item', 'wdsx' ) }
				tagName="p"
				value={ item }
			/>
		</p>
	);
}
