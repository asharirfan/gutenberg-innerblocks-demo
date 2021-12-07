import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import './item'

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('create-block/todo-list', {
	attributes: {
		heading: {
			type: 'string',
			default: ''
		}
	},
	edit: Edit,
	save,
});
