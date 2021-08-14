import { Dispatch } from 'redux';
import dataService from '../../services/dataService';
import * as noteActionTypes from '../actionTypes/noteActionTypes';
import * as sectionActionTypes from '../actionTypes/sectionActionTypes';
import { NoteCreate } from '../../models/note';

export const createNote = (note: NoteCreate, sectionId: number): void =>
	((dispatch: Dispatch) => {
		dataService.Notes.create(note).then((note) => {
			console.log('NOTE ACTION');
			dispatch({
				type: noteActionTypes.CREATE_NOTE,
				note
			});
			dispatch({
				type: sectionActionTypes.ADD_NOTE_TO_SECTION,
				sectionId,
				noteId: note.id
			});
		});
	}) as any;

export const deleteNote = (id: number): void =>
	((dispatch: Dispatch) => {
		dataService.Notes.delete(id).then((resp) => {
			dispatch({
				type: noteActionTypes.DELETE_NOTE,
				noteId: id
			});
		});
	}) as any;
