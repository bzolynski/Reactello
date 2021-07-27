import { Section } from '../../models/section';

export const CREATE_SECTION = 'CREATE_SECTION';
export const GET_SECTIONS_FOR_BOARD = 'GET_SECTIONS_FOR_BOARD';

export interface SectionTypes {
	CREATE_SECTION: {
		section: Section;
	};
	GET_SECTIONS_FOR_BOARD: {
		sections: Section[];
	};
}
