import { normalize, Section } from '../../models/section';
import { NormalizedModel, NormalizedSection, NormalizedState } from '../../models/normalizedModels';
import * as actionTypes from '../actionTypes/sectionActionTypes';

export interface SectionState extends NormalizedState<NormalizedSection> {}

const defaultState = (): SectionState => ({
	items: {},
	itemIds: []
});

export default (state = defaultState(), action: any): SectionState => {
	switch (action.type) {
		case actionTypes.STORE_SECTIONS: {
			const data: actionTypes.SectionTypes['STORE_SECTIONS'] = action;
			const sectionIds = data.sections.map((x) => x.id);
			let sections: { [id: number]: NormalizedSection } = {};
			data.sections.forEach((x) => {
				const normalized = normalize(x);
				sections = { ...sections, ...normalized };
			});
			return {
				...state,
				items: {
					...sections
				},
				itemIds: [ ...sectionIds ]
			};
		}
		case actionTypes.CREATE_SECTION: {
			const data: actionTypes.SectionTypes['CREATE_SECTION'] = action;
			const id = data.section.id;
			const section = normalize(data.section);

			return {
				...state,
				items: {
					...state.items,
					...section
				},
				itemIds: [ ...state.itemIds, id ]
			};
		}
		case actionTypes.UPDATE_SECTION_NAME: {
			const data: actionTypes.SectionTypes['UPDATE_SECTION_NAME'] = action;
			const id = data.sectionUpdateName.id;
			const name = data.sectionUpdateName.name;

			return {
				...state,
				items: {
					...state.items,
					[id]: {
						...state.items[id],
						name: name
					}
				},
				itemIds: [ ...state.itemIds, id ]
			};
		}
		case actionTypes.DELETE_SECTION: {
			const data: actionTypes.SectionTypes['DELETE_SECTION'] = action;
			const { [data.sectionId]: removed, ...items } = state.items;
			const indexToRemove = state.itemIds.indexOf(data.sectionId);
			const itemIds = [ ...state.itemIds.slice(0, indexToRemove), ...state.itemIds.slice(indexToRemove + 1) ];

			return {
				...state,
				items: {
					...items
				},
				itemIds: [ ...itemIds ]
			};
		}
		case actionTypes.ADD_NOTE_TO_SECTION: {
			const data: actionTypes.SectionTypes['ADD_NOTE_TO_SECTION'] = action;
			const section = { ...state.items[data.sectionId] };
			const notes = [ ...section.notes, data.noteId ];

			return {
				...state,
				items: {
					...state.items,
					[data.sectionId]: {
						...state.items[data.sectionId],
						notes: [ ...notes ]
					}
				}
			};
		}
		case actionTypes.REMOVE_NOTE_FROM_SECTION: {
			const data: actionTypes.SectionTypes['REMOVE_NOTE_FROM_SECTION'] = action;
			const section = { ...state.items[data.sectionId] };
			const indexToRemove = section.notes.indexOf(data.noteId);
			section.notes.splice(indexToRemove, 1);
			return {
				...state,
				items: {
					...state.items,
					[data.sectionId]: {
						...section
					}
				}
			};
		}
		default:
			return state;
	}
};
