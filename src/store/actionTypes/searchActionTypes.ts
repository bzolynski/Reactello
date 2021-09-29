import { ElementType, SearchBase } from 'models/search';
import { Store } from 'store/reducers/reducers';
import { SearchFilters } from 'store/reducers/searchReducer';

export const OPEN_SEARCH = 'OPEN_SEARCH';
export const CLOSE_SEARCH = 'CLOSE_SEARCH';
export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';
export const CHANGE_SEARCH_FILTER = 'CHANGE_SEARCH_FILTER';
export const FILTER_SEARCH_ITEMS = 'FILTER_SEARCH_ITEMS';

export interface SearchTypes {
	CHANGE_SEARCH_TEXT: {
		searchText: string;
	};
	CHANGE_SEARCH_FILTER: {
		searchFilters: SearchFilters;
	};
	FILTER_SEARCH_ITEMS: {
		globalState: Store;
	};
}
