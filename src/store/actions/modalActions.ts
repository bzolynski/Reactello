import { Dispatch } from 'redux';
import * as actionTypes from '../actionTypes/modalActionTypes';
export const openModal = (): void =>
	((dispatch: Dispatch) => {
		const isOpen = true;
		dispatch({
			type: actionTypes.OPEN_MODAL,
			isOpen
		});
	}) as any;

export const closeModal = (): void =>
	((dispatch: Dispatch) => {
		const isOpen = false;
		dispatch({
			type: actionTypes.CLOSE_MODAL,
			isOpen
		});
	}) as any;
