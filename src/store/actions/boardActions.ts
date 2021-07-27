import { BoardPage, BoardListing } from '../../models/board';
import { Dispatch } from 'redux';
import dataService from '../../services/dataService';
import * as actionTypes from '../actionTypes/boardActionTypes';

export const getBoardListings = () =>
	((dispatch: Dispatch) => {
		dataService.Boards.getAll().then((boardListings) => {
			dispatch({
				type: actionTypes.GET_BOARD_LISTINGS,
				boardListings
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
