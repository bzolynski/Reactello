export enum ElementType {
	board = 'board',
	section = 'section',
	note = 'note',
	comment = 'comment'
}

export interface SearchBase {
	id: number;
	title: string;
	type: ElementType;
}

export interface SearchBoard extends SearchBase {
	background: string;
	sectionCount: number;
	//workspaceName:string;
}
export interface SearchSection extends SearchBase {
	boardId: number;
	notesCount: number;
	boardName: string;
}
export interface SearchNote extends SearchBase {
	sectionId: number;
	commentsCount: number;
	hasDescription: boolean;
	boardId: number;
	boardName: string;
	sectionName: string;
}
