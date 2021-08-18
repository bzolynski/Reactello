import { Dispatch } from 'redux';
import dataService from '../../services/dataService';
import * as noteActionTypes from '../actionTypes/noteActionTypes';
import * as sectionActionTypes from '../actionTypes/sectionActionTypes';
import { NoteCreate } from '../../models/note';

export const createNote = (note: NoteCreate): void =>
	((dispatch: Dispatch) => {
		dataService.Notes.create(note).then((note) => {
			dispatch({
				type: noteActionTypes.CREATE_NOTE,
				note
			});
			dispatch({
				type: sectionActionTypes.ADD_NOTE_TO_SECTION,
				sectionId: note.sectionId,
				noteId: note.id
			});
		});
	}) as any;

export const deleteNote = (noteId: number, sectionId: number): void =>
	((dispatch: Dispatch) => {
		dataService.Notes.delete(noteId).then((resp) => {
			dispatch({
				type: noteActionTypes.DELETE_NOTE,
				noteId: noteId
			});
			dispatch({
				type: sectionActionTypes.REMOVE_NOTE_FROM_SECTION,
				noteId: noteId,
				sectionId: sectionId
			});
		});
	}) as any;
