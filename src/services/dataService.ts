import { BoardPage, BoardListing, BoardForm } from '../models/board';
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
		return await restService.get<BoardPage>(Uri.Board + 'get/' + id);
	},
	getForUpdate: async (id: number): Promise<BoardForm> => {
		return await restService.get<BoardForm>(Uri.Board + 'getupdate/' + id);
	},
	delete: async (id: number): Promise<boolean> => {
		return await restService.delete<boolean>(Uri.Board + id);
	}
};
const Notes = {};
const Comments = {};
const Sections = {};

export default { Boards, Notes, Comments, Sections };
