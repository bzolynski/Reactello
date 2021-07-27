import { Note } from './note';

export interface SectionCreate {
	name: string;
	color: string;
	position: number;
	boardId: number;
}
export interface Section {
	id: number;
	name: string;
	color: string;
	position: number;
	notes: Note[];
}
