import { BoardPage, BoardListing } from '../../models/board';
import * as actionTypes from '../actionTypes/boardActionTypes';

export interface BoardState {
	boardListings: BoardListing[];
	currentBoard: BoardPage | null;
}

const defaultState = (): BoardState => ({
	boardListings: [],
	currentBoard: null
});

export default (state = defaultState(), action: any) => {
	switch (action.type) {
		case actionTypes.GET_BOARD_LISTINGS: {
			const data: actionTypes.BoardTypes['GET_BOARD_LISTINGS'] = action;
			const boardListings = data.boardListings;
			return {
				...state,
				boardListings: boardListings
			};
		}
		case actionTypes.GET_BOARD: {
			const data: actionTypes.BoardTypes['GET_BOARD'] = action;
			return {
				...state,
				currentBoard: data.currentBoard
			};
		}
		case actionTypes.CREATE_BOARD: {
			const data: actionTypes.BoardTypes['CREATE_BOARD'] = action;
			const boardListings = [ ...state.boardListings, data.boardListing ];
			return {
				...state,
				boardListings: boardListings
			};
		}
		default:
			return state;
	}
};
