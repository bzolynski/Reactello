import { normalize } from '../../models/board';
import { NormalizedBoard, NormalizedState } from '../../models/normalizedModels';
import * as actionTypes from '../actionTypes/boardActionTypes';

export interface BoardState extends NormalizedState<NormalizedBoard> {
	currentBoard: number | null;
}

const defaultState = (): BoardState => ({
	items: {},
	itemIds: [],
	currentBoard: null
});

export default (state = defaultState(), action: any): BoardState => {
	switch (action.type) {
		case actionTypes.GET_ALL_BOARDS: {
			const data: actionTypes.BoardTypes['GET_ALL_BOARDS'] = action;
			const boardIds = data.boards.map((x) => x.id);
			let boards: { [id: number]: NormalizedBoard } = {};
			data.boards.forEach((x) => {
				const normalized = normalize(x);
				boards = { ...boards, ...normalized };
			});
			return {
				...state,
				items: {
					...boards
				},
				itemIds: [ ...boardIds ]
			};
		}
		case actionTypes.CREATE_BOARD: {
			const data: actionTypes.BoardTypes['CREATE_BOARD'] = action;
			const board = normalize(data.board);
			const boardId = data.board.id;
			return {
				...state,
				items: {
					...state.items,
					...board
				},
				itemIds: [ ...state.itemIds, boardId ]
			};
		}
		case actionTypes.ADD_SECTION_TO_BOARD: {
			const data: actionTypes.BoardTypes['ADD_SECTION_TO_BOARD'] = action;
			const board = { ...state.items[data.boardId] };
			const sections = [ ...board.sections, data.sectionId ];
			return {
				...state,
				items: {
					...state.items,
					[data.boardId]: {
						...state.items[data.boardId],
						sections: [ ...sections ]
					}
				}
			};
		}
		case actionTypes.REMOVE_SECTION_FROM_BOARD: {
			const data: actionTypes.BoardTypes['REMOVE_SECTION_FROM_BOARD'] = action;
			const board = { ...state.items[data.boardId] };
			const indexToRemove = board.sections.indexOf(data.sectionId);
			board.sections.splice(indexToRemove, 1);
			return {
				...state,
				items: {
					...state.items,
					[data.boardId]: {
						...board
					}
				}
			};
		}
		case actionTypes.SET_CURRENT_BOARD: {
			const data: actionTypes.BoardTypes['SET_CURRENT_BOARD'] = action;
			return {
				...state,
				currentBoard: data.boardId
			};
		}

		default:
			return state;
	}
};
