import * as actionTypes from '../actionTypes/modalActionTypes';

export interface ModalState {
	isOpen: boolean;
}

const defaultState = (): ModalState => ({
	isOpen: false
});

export default (state = defaultState(), action: any): ModalState => {
	switch (action.type) {
		case actionTypes.OPEN_MODAL: {
			return {
				...state,
				isOpen: true
			};
		}
		case actionTypes.CLOSE_MODAL: {
			return {
				...state,
				isOpen: false
			};
		}
		default:
			return state;
	}
};
