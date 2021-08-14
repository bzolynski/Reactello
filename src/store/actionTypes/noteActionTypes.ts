import { NoteCreate, NoteListing } from '../../models/note';

export const STORE_NOTES = 'STORE_NOTES';
export const CREATE_NOTE = 'CREATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export interface NoteTypes {
	STORE_NOTES: {
		notes: NoteListing[];
	};
	CREATE_NOTE: {
		note: NoteListing;
	};
	DELETE_NOTE: {
		noteId: number;
	};
}
