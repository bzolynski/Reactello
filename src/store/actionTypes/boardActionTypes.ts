import { BoardListing, BoardPage } from '../../models/board';

export const GET_BOARD_LISTINGS = 'GET_BOARD_LISTINGS';
export const GET_BOARD = 'GET_BOARD';
export const CREATE_BOARD = 'CREATE_BOARD';

export interface BoardTypes {
	GET_BOARD_LISTINGS: {
		boardListings: BoardListing[];
	};
	GET_BOARD: {
		currentBoard: BoardPage;
	};
	CREATE_BOARD:{
		boardListing : BoardListing
	}
}
