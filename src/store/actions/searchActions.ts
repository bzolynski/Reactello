import { Dispatch } from 'redux';
import * as searchActionTypes from '../actionTypes/searchActionTypes';
import { Store } from '../reducers/reducers';
import { ElementType, SearchBase, SearchBoard, SearchNote, SearchSection } from 'models/search';
export const openSearch = (): void =>
	((dispatch: Dispatch) => {
		dispatch({
			type: searchActionTypes.OPEN_SEARCH
		});
	}) as any;

export const closeSearch = (): void =>
	((dispatch: Dispatch) => {
		dispatch({
			type: searchActionTypes.CLOSE_SEARCH
		});
	}) as any;

export const triggerSearch = (inputValue: string): void =>
	((dispatch: Dispatch, getState: () => Store) => {
		const searchItems: SearchBase[] = [];
		if (inputValue !== '') {
			const state = getState();
			const upperCaseValue = inputValue.toUpperCase();
			for (const key in state.boardReducer.items) {
				const boardItem = { ...state.boardReducer.items[key] };
				if (boardItem.name.toUpperCase().includes(upperCaseValue)) {
					const searchBoard: SearchBoard = {
						id: boardItem.id,
						title: boardItem.name,
						background: boardItem.background,
						sectionCount: boardItem.sections.length,
						type: ElementType.board
					};
					searchItems.push(searchBoard);
				}
			}
			for (const key in state.noteReducer.items) {
				const noteItem = { ...state.noteReducer.items[key] };
				if (
					noteItem.title.toUpperCase().includes(upperCaseValue) ||
					noteItem.description.toUpperCase().includes(upperCaseValue)
				) {
					const searchNote: SearchNote = {
						id: noteItem.id,
						title: noteItem.title,
						commentsCount: noteItem.comments.length,
						hasDescription: noteItem.description != '',
						sectionId: noteItem.sectionId,
						type: ElementType.note
					};
					searchItems.push(searchNote);
				}
			}
			for (const key in state.sectionReducer.items) {
				const sectionItem = { ...state.sectionReducer.items[key] };
				if (sectionItem.name.toUpperCase().includes(upperCaseValue)) {
					const searchSection: SearchSection = {
						id: sectionItem.id,
						title: sectionItem.name,
						notesCount: sectionItem.notes.length,
						boardId: sectionItem.boardId,
						type: ElementType.note
					};
					searchItems.push(searchSection);
				}
			}
		}
		dispatch({
			type: searchActionTypes.TRIGGER_SEARCH,
			searchItems: searchItems
		});
	}) as any;
