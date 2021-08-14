import { Section, SectionCreate } from '../../models/section';
import { Dispatch } from 'redux';
import dataService from '../../services/dataService';
import * as sectionActionTypes from '../actionTypes/sectionActionTypes';
import * as noteActionTypes from '../actionTypes/noteActionTypes';

export const createSection = (section: SectionCreate): void =>
	((dispatch: Dispatch) => {
		dataService.Sections.create(section).then((section) => {
			dispatch({
				type: sectionActionTypes.CREATE_SECTION,
				section
			});
		});
	}) as any;

	export const deleteSection = (id: number): void =>
	((dispatch: Dispatch) => {
		dataService.Sections.delete(id).then((response) => {
			dispatch({
				type: sectionActionTypes.DELETE_SECTION,
				sectionId: id
			});
		});
	}) as any;

export const getSectionsForBoard = (boardId: number): void =>
	((dispatch: Dispatch) => {
		console.log(boardId);

		dataService.Sections.getForBoard(boardId).then((sections) => {
			dispatch({
				type: sectionActionTypes.FETCH_SECTIONS_BY_BOARD,
				sections
			});
			const notes = sections.map((x) => x.notes).flat(1);
			dispatch({
				type: noteActionTypes.STORE_NOTES,
				notes
			});
		});
	}) as any;


