import { Dispatch } from 'redux';
import * as actionTypes from '../actionTypes/modalActionTypes';
export const openModal = (path: string): void =>
	((dispatch: Dispatch) => {
		dispatch({
			type: actionTypes.OPEN_MODAL,
			path: path,
			isOpen: true
		});
	}) as any;

export const closeModal = (): void =>
	((dispatch: Dispatch) => {
		const isOpen = false;
		dispatch({
			type: actionTypes.CLOSE_MODAL,
			isOpen: false
		});
	}) as any;
