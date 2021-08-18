import { Board, BoardForm } from '../../models/board';
import { Dispatch } from 'redux';
import dataService from '../../services/dataService';
import * as boardActionTypes from '../actionTypes/boardActionTypes';
import * as sectionActionTypes from '../actionTypes/sectionActionTypes';
import * as noteActionTypes from '../actionTypes/noteActionTypes';

export const getAllBoards = () =>
	((dispatch: Dispatch) => {
		dataService.Boards.getAll().then((boards) => {
			dispatch({
				type: boardActionTypes.GET_ALL_BOARDS,
				boards: boards
			});
			const sections = boards.map((x) => x.sections).flat(1);
			dispatch({
				type: sectionActionTypes.STORE_SECTIONS,
				sections: sections
			});
			const notes = sections.map((x) => x.notes).flat(1);
			dispatch({
				type: noteActionTypes.STORE_NOTES,
				notes: notes
			});
		});
	}) as any;
export const createBoard = (board: BoardForm) =>
	((dispatch: Dispatch) => {
		dataService.Boards.create(board).then((board) => {
			dispatch({
				type: boardActionTypes.CREATE_BOARD,
				board: board
			});
		});
	}) as any;

export const setCurrentBoard = (boardId: number | null) =>
	((dispatch: Dispatch) => {
		dispatch({
			type: boardActionTypes.SET_CURRENT_BOARD,
			boardId: boardId
		});
	}) as any;
