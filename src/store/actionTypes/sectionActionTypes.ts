import { Section } from '../../models/section';

export const CREATE_SECTION = 'CREATE_SECTION';
export const DELETE_SECTION = 'DELETE_SECTION';
export const ADD_NOTE_TO_SECTION = 'ADD_NOTE_TO_SECTION';
export const REMOVE_NOTE_FROM_SECTION = 'REMOVE_NOTE_FROM_SECTION';
export const STORE_SECTIONS = 'STORE_SECTIONS';

export interface SectionTypes {
	CREATE_SECTION: {
		section: Section;
	};
	STORE_SECTIONS: {
		sections: Section[];
	};
	DELETE_SECTION: {
		sectionId: number;
	};
	ADD_NOTE_TO_SECTION: {
		sectionId: number;
		noteId: number;
	};
	REMOVE_NOTE_FROM_SECTION: {
		sectionId: number;
		noteId: number;
	};
}
