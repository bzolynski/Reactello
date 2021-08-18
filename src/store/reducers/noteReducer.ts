import { normalize } from '../../models/note';
import { NormalizedState, NormalizedNote } from '../../models/normalizedModels';
import * as actionTypes from '../actionTypes/noteActionTypes';

export interface NoteState extends NormalizedState<NormalizedNote> {}

const defaultState = (): NoteState => ({
	items: {},
	itemIds: []
});

export default (state = defaultState(), action: any): NoteState => {
	switch (action.type) {
		case actionTypes.STORE_NOTES: {
			const data: actionTypes.NoteTypes['STORE_NOTES'] = action;
			const noteIds = data.notes.map((x) => x.id);
			let notes: { [x: number]: NormalizedNote } = {};
			data.notes.forEach((x) => {
				const normalized = normalize(x);
				notes = { ...notes, ...normalized };
			});

			return {
				...state,
				items: {
					...notes
				},
				itemIds: [ ...noteIds ]
			};
		}
		case actionTypes.CREATE_NOTE: {
			const data: actionTypes.NoteTypes['CREATE_NOTE'] = action;
			const note = normalize(data.note);

			return {
				...state,
				items: {
					...state.items,
					...note
				},
				itemIds: [ ...state.itemIds, data.note.id ]
			};
		}
		case actionTypes.DELETE_NOTE: {
			const data: actionTypes.NoteTypes['DELETE_NOTE'] = action;
			const { [data.noteId]: removed, ...items } = state.items;
			const indexToRemove = state.itemIds.indexOf(data.noteId);
			const itemIds = [ ...state.itemIds.slice(0, indexToRemove), ...state.itemIds.slice(indexToRemove + 1) ];

			return {
				...state,
				items: {
					...items
				},
				itemIds: [ ...itemIds ]
			};
		}
		case actionTypes.DELETE_SECTION_NOTES: {
			const data: actionTypes.NoteTypes['DELETE_SECTION_NOTES'] = action;
			const notes = { ...state.items };
			const noteIds = [ ...state.itemIds ];
			for (const key in notes) {
				if (notes[key].sectionId === data.sectionId) {
					delete notes[key];
					const indexToRemove = state.itemIds.indexOf(Number.parseInt(key));
					noteIds.splice(indexToRemove, 1);
				}
			}
			return {
				...state,
				items: {
					...notes
				},
				itemIds: [ ...noteIds ]
			};
		}
		default:
			return state;
	}
};
