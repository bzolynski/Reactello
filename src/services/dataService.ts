import { Board, BoardListing, CreateBoard } from '../models/board';
import { restService } from './serviceFactory';

const Uri = {
	Board: 'Board/',
	Note: 'Note/',
	Comment: 'Comment/',
	Section: 'Section/'
};

const Board = {
	create: async (board: CreateBoard): Promise<BoardListing> => {
		return await restService.post<BoardListing>(Uri.Board, board);
	},
	getAll: async (): Promise<BoardListing[]> => {
		return await restService.get<BoardListing[]>(Uri.Board);
	},
	get: async (id: number): Promise<Board> => {
		return await restService.get<Board>(Uri.Board + id);
	},
	delete: async (id: number): Promise<boolean> => {
		return await restService.delete<boolean>(Uri.Board + id);
	}
};
const Note = {};
const Comment = {};
const Section = {};

export default { Board, Note, Comment, Section };
