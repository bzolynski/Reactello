import { Comment } from './comment';
import { NormalizedModel, NormalizedNote } from './normalizedModels';

export interface NoteCreate {
	title: string;
	description: string;
	sectionId: number;
}
export interface Note {
	id: number;
	title: string;
	description: string;
	position: number;
	sectionId: number;
	comments: Comment[];
}

export const normalize = (note: Note): NormalizedModel<NormalizedNote> => {
	return {
		[note.id]: {
			id: note.id,
			title: note.title,
			position: note.position,
			description: note.description,
			sectionId: note.sectionId,
			comments: note.comments.map((x) => x.id)
		}
	};
};
