import { combineReducers } from 'redux';
import boardReducer, { BoardState } from './boardReducer';
import modalReducer, { ModalState } from './modalReducer';
import sectionReducer, { SectionState } from './sectionReducer';

export default combineReducers({
	boardReducer,
	modalReducer,
	sectionReducer
});

export interface Store {
	boardReducer: BoardState;
	modalReducer: ModalState;
	sectionReducer: SectionState;
}
