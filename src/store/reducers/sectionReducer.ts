import { Section, SectionCreate } from '../../models/section';
import * as actionTypes from '../actionTypes/sectionActionTypes';

export interface SectionState {
	sections: Section[];
}

const defaultState = (): SectionState => ({
	sections: []
});

export default (state = defaultState(), action: any) => {
	switch (action.type) {
		case actionTypes.CREATE_SECTION: {
			const data: actionTypes.SectionTypes['CREATE_SECTION'] = action;
			const sections = [ ...state.sections, data.section ];
			return {
				...state,
				sections: sections
			};
		}
		case actionTypes.GET_SECTIONS_FOR_BOARD: {
			const data: actionTypes.SectionTypes['GET_SECTIONS_FOR_BOARD'] = action;
			const sections = data.sections;
			return {
				...state,
				sections: sections
			};
		}
		default:
			return state;
	}
};
