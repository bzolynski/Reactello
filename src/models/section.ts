import { Note } from './note';

export interface CreateSection {
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
