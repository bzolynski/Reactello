export enum ElementType {
	board,
	section,
	note,
	comment
}

export interface SearchBase {
	id: number;
	title: string;
	type: ElementType;
}

export interface SearchNote extends SearchBase {
	sectionId: number;
	commentsCount: number;
	hasDescription: boolean;
}
export interface SearchBoard extends SearchBase {
	background: string;
	sectionCount: number;
}
export interface SearchSection extends SearchBase {
	boardId: number;
	notesCount: number;
}
