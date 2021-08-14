import { NormalizedModel, NormalizedSection } from './normalizedModels';
import { NoteListing } from './note';

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
	notes: NoteListing[];
	boardId: number;
}

export const normalize = (section: Section): NormalizedModel<NormalizedSection> => {
	return {
		[section.id]: {
			id: section.id,
			name: section.name,
			color: section.color,
			position: section.position,
			notes: section.notes.map((x) => x.id),
			boardId: section.boardId
		}
	};
};