import { NormalizedBoard, NormalizedModel } from './normalizedModels';
import { Section } from './section';

export interface BoardForm {
	id?: number;
	isPublic: boolean;
	name: string;
	background: string;
}

export interface Board {
	id: number;
	isPublic: boolean;
	name: string;
	background: string;
	dateCreated?: string;
	sections: Section[];
}

export const normalize = (board: Board): NormalizedModel<NormalizedBoard> => {
	return {
		[board.id]: {
			id: board.id,
			isPublic: board.isPublic,
			name: board.name,
			background: board.background,
			dateCreated: board.dateCreated,
			sections: board.sections.map((x) => x.id)
		}
	};
};
