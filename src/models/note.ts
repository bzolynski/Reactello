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
	comments: Comment[];
}

export interface NoteListing {
	id: number;
	title: string;
	position: number;
	sectionId: number;
}

export const normalize = (note: NoteListing): NormalizedModel<NormalizedNote> => {
	return {
		[note.id]: {
			id: note.id,
			title: note.title,
			position: note.position,
			sectionId: note.sectionId
		}
	};
};
