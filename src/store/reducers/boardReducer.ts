import { BoardPage, BoardListing } from '../../models/board';
import * as actionTypes from '../actionTypes/boardActionTypes';

export interface BoardState {
	boards: BoardListing[];
	board: BoardPage | null;
}

const defaultState = (): BoardState => ({
	boards: [],
	board: null
});

export default (state = defaultState(), action: any) => {
	switch (action.type) {
		case actionTypes.GET_BOARDS: {
			const data: actionTypes.BoardTypes['GET_BOARDS'] = action;
			return {
				...state,
				boards: data.boards
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
