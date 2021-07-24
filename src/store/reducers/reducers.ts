import { combineReducers } from 'redux';
import boardReducer, { BoardState } from './boardReducer';
import modalReducer, { ModalState } from './modalReducer';

export default combineReducers({
	boardReducer,
	modalReducer
});

export interface Store {
	boardReducer: BoardState;
	modalReducer: ModalState;
}
