import { SearchBase } from 'models/search';
import * as actionTypes from '../actionTypes/searchActionTypes';

export interface SearchState {
	isOpen: boolean;
	searchItems: SearchBase[];
}

const defaultState = (): SearchState => ({
	isOpen: false,
	searchItems: []
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
				searchItems: []
			};
		}
		case actionTypes.TRIGGER_SEARCH: {
			const data: actionTypes.SearchTypes['TRIGGER_SEARCH'] = action;

			return {
				...state,
				searchItems: data.searchItems
			};
		}
		default:
			return state;
	}
};
