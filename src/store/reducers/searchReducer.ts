import { ElementType, SearchBase, SearchBoard, SearchNote, SearchSection } from 'models/search';
import store from 'store/store';
import * as actionTypes from '../actionTypes/searchActionTypes';

export interface SearchFilters {
	[ElementType.board]: boolean;
	[ElementType.section]: boolean;
	[ElementType.note]: boolean;
	[ElementType.comment]: boolean;
}

export interface SearchState {
	isOpen: boolean;
	searchItems: SearchBase[];
	searchFilters: SearchFilters;
	searchText: string;
}
const defaultState = (): SearchState => ({
	isOpen: false,
	searchItems: [],
	searchFilters: {
		[ElementType.board]: true,
		[ElementType.section]: true,
		[ElementType.note]: true,
		[ElementType.comment]: true
	},
	searchText: ''
});
export default (state = defaultState(), action: any): SearchState => {
	switch (action.type) {
		case actionTypes.OPEN_SEARCH: {
			return {
				...state,
				isOpen: true
			};
		}
		case actionTypes.CLOSE_SEARCH: {
			return {
				...state,
				isOpen: false,
				searchText: '',
				searchItems: []
			};
		}
		case actionTypes.CHANGE_SEARCH_TEXT: {
			const data: actionTypes.SearchTypes['CHANGE_SEARCH_TEXT'] = action;

			return {
				...state,
				searchText: data.searchText
			};
		}
		case actionTypes.CHANGE_SEARCH_FILTER: {
			const data: actionTypes.SearchTypes['CHANGE_SEARCH_FILTER'] = action;
			return {
				...state,
				searchFilters: data.searchFilters
			};
		}
		case actionTypes.FILTER_SEARCH_ITEMS: {
			const searchItems: SearchBase[] = [];
			if (state.searchText !== '') {
				const data: actionTypes.SearchTypes['FILTER_SEARCH_ITEMS'] = action;
				const globalState = data.globalState;
				console.log(state.searchText);
				const upperCaseValue = state.searchText.toUpperCase();
				if (state.searchFilters[ElementType.board])
					for (const key in globalState.boardReducer.items) {
						const boardItem = { ...globalState.boardReducer.items[key] };
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
				if (state.searchFilters[ElementType.section])
					for (const key in globalState.sectionReducer.items) {
						const sectionItem = { ...globalState.sectionReducer.items[key] };
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
				if (state.searchFilters[ElementType.note])
					for (const key in globalState.noteReducer.items) {
						const noteItem = { ...globalState.noteReducer.items[key] };
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
			}
			return {
				...state,
				searchItems: searchItems
			};
		}
		default:
			return { ...state };
	}
};
