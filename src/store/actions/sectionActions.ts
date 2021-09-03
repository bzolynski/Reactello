import { Section, SectionCreate, SectionUpdateName } from '../../models/section';
import { Dispatch } from 'redux';
import dataService from '../../services/dataService';
import * as sectionActionTypes from '../actionTypes/sectionActionTypes';
import * as noteActionTypes from '../actionTypes/noteActionTypes';
import * as boardActionTypes from '../actionTypes/boardActionTypes';

export const createSection = (section: SectionCreate): void =>
	((dispatch: Dispatch) => {
		dataService.Sections.create(section).then((section) => {
			dispatch({
				type: sectionActionTypes.CREATE_SECTION,
				section
			});
			dispatch({
				type: boardActionTypes.ADD_SECTION_TO_BOARD,
				boardId: section.boardId,
				sectionId: section.id
			});
		});
	}) as any;

export const updateSectionName = (sectionUpdateName: SectionUpdateName): void =>
	((dispatch: Dispatch) => {
		dataService.Sections.updateName(sectionUpdateName).then((section) => {
			dispatch({
				type: sectionActionTypes.UPDATE_SECTION_NAME,
				sectionUpdateName: section
			});
		});
	}) as any;

export const deleteSection = (sectionId: number, boardId: number): void =>
	((dispatch: Dispatch) => {
		dataService.Sections.delete(sectionId).then((response) => {
			dispatch({
				type: sectionActionTypes.DELETE_SECTION,
				sectionId: sectionId
			});
			dispatch({
				type: noteActionTypes.DELETE_SECTION_NOTES,
				sectionId: sectionId
			});
			dispatch({
				type: boardActionTypes.REMOVE_SECTION_FROM_BOARD,
				boardId: boardId,
				sectionId: sectionId
			});
		});
	}) as any;
