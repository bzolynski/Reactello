import { BoardPage, BoardListing } from '../../models/board';
import * as actionTypes from '../actionTypes/boardActionTypes';

export interface BoardState {
	boardListings: BoardListing[];
	board: BoardPage | null;
}

const defaultState = (): BoardState => ({
	boardListings: [],
	board: null
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
				board: data.board
			};
		}
		default:
			return state;
	}
};
