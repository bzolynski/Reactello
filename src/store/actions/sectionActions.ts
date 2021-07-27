import { Section, SectionCreate } from '../../models/section';
import { Dispatch } from 'redux';
import dataService from '../../services/dataService';
import * as actionTypes from '../actionTypes/sectionActionTypes';

export const createSection = (section: SectionCreate): void =>
	((dispatch: Dispatch) => {
		dataService.Sections.create(section).then((section) => {
			dispatch({
				type: actionTypes.CREATE_SECTION,
				section
			});
		});
	}) as any;

export const getSectionsForBoard = (boardId: number): void =>
	((dispatch: Dispatch) => {
		dataService.Sections.getForBoard(boardId).then((sections) => {
			dispatch({
				type: actionTypes.GET_SECTIONS_FOR_BOARD,
				sections
			});
		});
	}) as any;
