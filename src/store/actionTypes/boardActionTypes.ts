import { BoardListing, BoardPage } from '../../models/board';

export const GET_BOARDS = 'GET_BOARDS';
export const GET_BOARD = 'GET_BOARD';

export interface BoardTypes {
	GET_BOARDS: {
		boards: BoardListing[];
	};
	GET_BOARD: {
		board: BoardPage;
	};
}
