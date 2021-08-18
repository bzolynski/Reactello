import { Board } from '../../models/board';

export const GET_ALL_BOARDS = 'GET_ALL_BOARDS';
//export const GET_BOARD = 'GET_BOARD';
export const SET_CURRENT_BOARD = 'SET_CURRENT_BOARD';
export const CREATE_BOARD = 'CREATE_BOARD';
export const ADD_SECTION_TO_BOARD = 'ADD_SECTION_TO_BOARD';
export const REMOVE_SECTION_FROM_BOARD = 'REMOVE_SECTION_FROM_BOARD';

export interface BoardTypes {
	GET_ALL_BOARDS: {
		boards: Board[];
	};
	CREATE_BOARD: {
		board: Board;
	};
	SET_CURRENT_BOARD: {
		boardId: number | null;
	};
	ADD_SECTION_TO_BOARD: {
		boardId: number;
		sectionId: number;
	};
	REMOVE_SECTION_FROM_BOARD: {
		boardId: number;
		sectionId: number;
	};
}
