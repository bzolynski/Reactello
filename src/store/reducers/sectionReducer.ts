import { normalize, Section } from '../../models/section';
import { NormalizedModel, NormalizedSection, NormalizedState } from '../../models/normalizedModels';
import * as actionTypes from '../actionTypes/sectionActionTypes';

export interface SectionState extends NormalizedState<NormalizedSection> {}

const defaultState = (): SectionState => ({
	items: {},
	itemIds: []
});

export default (state = defaultState(), action: any) => {
	switch (action.type) {
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
			const noteIds = [ ...section.notes, data.noteId ];
			console.log(data.noteId);
			console.log(noteIds);
			return {
				...state,
				items: {
					...state.items,
					[data.sectionId]: {
						...state.items[data.sectionId],
						notes: [ ...noteIds ]
					}
				}
			};
		}

		case actionTypes.FETCH_SECTIONS_BY_BOARD: {
			const data: actionTypes.SectionTypes['FETCH_SECTIONS_BY_BOARD'] = action;
			const ids = data.sections.map((x) => x.id);
			let sections: { [x: number]: NormalizedSection } = {};
			data.sections.forEach((x) => {
				const normalized = normalize(x);
				sections = { ...sections, ...normalized };
			});

			return {
				...state,
				items: {
					...sections
				},
				itemIds: [ ...ids ]
			};
		}
		default:
			return state;
	}
};
