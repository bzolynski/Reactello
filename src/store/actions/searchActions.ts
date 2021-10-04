import { Dispatch } from 'redux';
import * as searchActionTypes from '../actionTypes/searchActionTypes';
import { Store } from '../reducers/reducers';
import { SearchFilters } from 'store/reducers/searchReducer';
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

export const changeSearchText = (searchText: string): void =>
	((dispatch: Dispatch, getState: () => Store) => {
		dispatch({
			type: searchActionTypes.CHANGE_SEARCH_TEXT,
			searchText: searchText
		});
		dispatch({
			type: searchActionTypes.FILTER_SEARCH_ITEMS,
			globalState: getState()
		});
	}) as any;

export const changeSearchFilter = (searchFilters: SearchFilters): void =>
	((dispatch: Dispatch, getState: () => Store) => {
		dispatch({
			type: searchActionTypes.CHANGE_SEARCH_FILTER,
			searchFilters: searchFilters
		});
		dispatch({
			type: searchActionTypes.FILTER_SEARCH_ITEMS,
			globalState: getState()
		});
	}) as any;
