import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';

/**
 * Register block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'create-block/todo-item', {
	title: __( 'Todo Item', 'todo-list' ),
	description: __( 'An item of todo list.', 'todo-list' ),
	icon: 'saved',
	category: 'widgets',
	keywords: [ __( 'todo list item', 'todo-list' ) ],
	parent: [ 'create-block/todo-list' ],
	attributes: {
		item: {
			type: 'string',
			default: '',
		},
	},
	edit,
} );
