import { BoardPage, BoardListing, BoardForm } from '../../models/board';
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

export const getBoard = (id: number) =>
	((dispatch: Dispatch) => {
		dataService.Boards.get(id).then((board) => {
			dispatch({
				type: actionTypes.GET_BOARD,
				currentBoard: board
			});
		});
	}) as any;

export const createBoard = (board: BoardForm) =>
	((dispatch: Dispatch) => {
		dataService.Boards.create(board).then((board) => {
			dispatch({
				type: actionTypes.CREATE_BOARD,
				boardListing: board
			});
		});
	}) as any;
