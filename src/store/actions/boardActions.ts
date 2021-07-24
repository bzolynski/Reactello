import { BoardPage, BoardListing } from '../../models/board';
import { Dispatch } from 'redux';
import dataService from 'src/services/dataService';
import * as actionTypes from '../actionTypes/boardActionTypes';

export const getBoards = (): Promise<BoardListing[]> =>
	((dispatch: Dispatch) => {
		dataService.Boards.getAll().then((boards) => {
			dispatch({
				type: actionTypes.GET_BOARDS,
				boards
			});
		});
	}) as any;

export const getBoard = (id: number): Promise<BoardPage> =>
	((dispatch: Dispatch) => {
		dataService.Boards.get(id).then((board) => {
			dispatch({
				type: actionTypes.GET_BOARD,
				board
			});
		});
	}) as any;
