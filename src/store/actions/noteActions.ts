import { Dispatch } from 'redux';
import dataService from '../../services/dataService';
import * as noteActionTypes from '../actionTypes/noteActionTypes';
import * as sectionActionTypes from '../actionTypes/sectionActionTypes';
import { NoteCreate, NoteUpdate } from '../../models/note';
import { ResponseStatus } from '../../models/response';

export const createNote = (note: NoteCreate): void =>
	((dispatch: Dispatch) => {
		dataService.Notes.create(note).then((response) => {
			if (response.responseStatus == ResponseStatus.success) {
				const note = response.responseObject;
				dispatch({
					type: noteActionTypes.CREATE_NOTE,
					note: note
				});
				dispatch({
					type: sectionActionTypes.ADD_NOTE_TO_SECTION,
					sectionId: note.sectionId,
					noteId: note.id
				});
			} else {
				console.log(response.errorMessage);
			}
		});
	}) as any;

export const updateNote = (note: NoteUpdate): void =>
	((dispatch: Dispatch) => {
		dataService.Notes.update(note).then((response) => {
			if (response.responseStatus == ResponseStatus.success) {
				const note = response.responseObject;
				dispatch({
					type: noteActionTypes.UPDATE_NOTE,
					note: note
				});
			} else {
				console.log(response.errorMessage);
			}
		});
	}) as any;

export const deleteNote = (noteId: number, sectionId: number): void =>
	((dispatch: Dispatch) => {
		dataService.Notes.delete(noteId).then((response) => {
			if (response.responseStatus == ResponseStatus.success) {
				dispatch({
					type: noteActionTypes.DELETE_NOTE,
					noteId: noteId
				});
				dispatch({
					type: sectionActionTypes.REMOVE_NOTE_FROM_SECTION,
					noteId: noteId,
					sectionId: sectionId
				});
			} else {
				console.log(response.errorMessage);
			}
		});
	}) as any;
