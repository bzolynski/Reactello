import { BoardPage, BoardListing, BoardForm } from '../models/board';
import { Section, SectionCreate } from '../models/section';
import { restService } from './serviceFactory';

const Uri = {
	Board: 'Board/',
	Note: 'Note/',
	Comment: 'Comment/',
	Section: 'Section/'
};

const Boards = {
	create: async (board: BoardForm): Promise<BoardListing> => {
		return await restService.post<BoardListing>(Uri.Board, board);
	},
	getAll: async (): Promise<BoardListing[]> => {
		return await restService.get<BoardListing[]>(Uri.Board);
	},
	get: async (id: number): Promise<BoardPage> => {
		return await restService.get<BoardPage>(Uri.Board + 'getAll/' + id);
	},
	getForUpdate: async (id: number): Promise<BoardForm> => {
		return await restService.get<BoardForm>(Uri.Board + 'getForUpdate/' + id);
	},
	update: async (board: BoardForm): Promise<BoardListing> => {
		return await restService.put<BoardListing>(Uri.Board + board.id, board);
	},
	delete: async (id: number): Promise<boolean> => {
		return await restService.delete<boolean>(Uri.Board + id);
	}
};
const Notes = {};
const Comments = {};
const Sections = {
	create: async (section: SectionCreate): Promise<Section> => {
		return await restService.post<Section>(Uri.Section, section);
	},
	getForBoard: async (boardId: number): Promise<Section[]> => {
		return await restService.get<Section[]>(Uri.Section + 'getForBoard/' + boardId);
	}
};

export default { Boards, Notes, Comments, Sections };
