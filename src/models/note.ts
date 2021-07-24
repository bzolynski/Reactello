import { Comment } from './comment';

export interface CreateNote {
	title: string;
	description: string;
	sectionId: number;
}
export interface Note {
	id: number;
	title: string;
	description: string;
	position: number;
	comments: Comment[];
}
