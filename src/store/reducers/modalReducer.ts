import * as actionTypes from '../actionTypes/modalActionTypes';

export interface ModalState {
	isOpen: boolean;
	path: string;
}

const defaultState = (): ModalState => ({
	isOpen: false,
	path: ''
});

export default (state = defaultState(), action: any): ModalState => {
	switch (action.type) {
		case actionTypes.OPEN_MODAL: {
			const data: actionTypes.ModalTypes['OPEN_MODAL'] = action;
			return {
				...state,
				isOpen: true,
				path: data.path
			};
		}
		case actionTypes.CLOSE_MODAL: {
			return {
				...state,
				isOpen: false,
				path: ''
			};
		}
		default:
			return state;
	}
};
