import { SearchBase } from 'models/search';

export const OPEN_SEARCH = 'OPEN_SEARCH';
export const CLOSE_SEARCH = 'CLOSE_SEARCH';
export const TRIGGER_SEARCH = 'TRIGGER_SEARCH';

export interface SearchTypes {
	TRIGGER_SEARCH: {
		searchItems: SearchBase[];
	};
}
