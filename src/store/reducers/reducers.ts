import { combineReducers } from 'redux';
import boardReducer, { BoardState } from './boardReducer';
import modalReducer, { ModalState } from './modalReducer';
import sectionReducer, { SectionState } from './sectionReducer';
import noteReducer, { NoteState } from './noteReducer';

export default combineReducers({
	boardReducer,
	modalReducer,
	sectionReducer,
	noteReducer
});

export interface Store {
	boardReducer: BoardState;
	modalReducer: ModalState;
	sectionReducer: SectionState;
	noteReducer: NoteState;
}
