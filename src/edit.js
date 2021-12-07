import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const { attributes: { heading }, setAttributes } = props;

	return (
		<div {...useBlockProps()}>
			<p>
				<RichText
					allowedFormats={ [] }
					aria-label={ __( 'Heading text', 'wdsx' ) }
					identifier="heading"
					onChange={ ( newHeading ) => {
						setAttributes( { heading: newHeading } );
					} }
					placeholder={ __( 'Heading of your list', 'wdsx' ) }
					tagName="h2"
					value={ heading }
				/>
			</p>
			<p>
				<InnerBlocks
					allowedBlocks={ [
						'create-block/todo-item',
					] }
					template={ [ [ 'create-block/todo-item' ] ] }
				/>
			</p>
		</div>
	);
}
