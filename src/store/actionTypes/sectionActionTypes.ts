import { Section } from '../../models/section';

export const CREATE_SECTION = 'CREATE_SECTION';
export const DELETE_SECTION = 'DELETE_SECTION';
export const FETCH_SECTIONS_BY_BOARD = 'FETCH_SECTIONS_BY_BOARD';
export const ADD_NOTE_TO_SECTION = 'ADD_NOTE_TO_SECTION';

export interface SectionTypes {
	CREATE_SECTION: {
		section: Section;
	};
	FETCH_SECTIONS_BY_BOARD: {
		sections: Section[];
	};
	DELETE_SECTION: {
		sectionId: number;
	};
	ADD_NOTE_TO_SECTION: {
		sectionId: number;
		noteId: number;
	};
}
