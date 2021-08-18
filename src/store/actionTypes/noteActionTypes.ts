import { Note } from '../../models/note';

export const STORE_NOTES = 'STORE_NOTES';
export const CREATE_NOTE = 'CREATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_SECTION_NOTES = 'DELETE_SECTION_NOTES';

export interface NoteTypes {
	STORE_NOTES: {
		notes: Note[];
	};
	CREATE_NOTE: {
		note: Note;
	};
	DELETE_NOTE: {
		noteId: number;
	};
	DELETE_SECTION_NOTES: {
		sectionId: number;
	};
}
