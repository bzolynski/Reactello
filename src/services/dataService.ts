import { Board, BoardForm } from '../models/board';
import { NoteCreate, Note, NoteUpdate } from '../models/note';
import { Section, SectionCreate, SectionUpdateName } from '../models/section';
import { restService } from './serviceFactory';

const Uri = {
	Board: 'Board/',
	Note: 'Note/',
	Comment: 'Comment/',
	Section: 'Section/'
};

const Boards = {
	create: async (board: BoardForm): Promise<Board> => {
		return await restService.post<Board>(Uri.Board, board);
	},
	getAll: async (): Promise<Board[]> => {
		return await restService.get<Board[]>(Uri.Board);
	},
	get: async (id: number): Promise<Board> => {
		return await restService.get<Board>(Uri.Board + 'getAll/' + id);
	},
	getForUpdate: async (id: number): Promise<BoardForm> => {
		return await restService.get<BoardForm>(Uri.Board + 'getForUpdate/' + id);
	},
	update: async (board: BoardForm): Promise<Board> => {
		return await restService.put<Board>(Uri.Board + board.id, board);
	},
	delete: async (id: number): Promise<boolean> => {
		return await restService.delete<boolean>(Uri.Board + id);
	}
};
const Notes = {
	create: async (note: NoteCreate): Promise<Note> => {
		return await restService.post<Note>(Uri.Note, note);
	},
	delete: async (id: number): Promise<boolean> => {
		return await restService.delete<boolean>(Uri.Note + id);
	},
	update: async (note: NoteUpdate): Promise<Note> => {
		return await restService.put<Note>(Uri.Note, note);
	}
};
const Comments = {};
const Sections = {
	create: async (section: SectionCreate): Promise<Section> => {
		return await restService.post<Section>(Uri.Section, section);
	},
	delete: async (id: number): Promise<boolean> => {
		return await restService.delete<boolean>(Uri.Section + id);
	},
	updateName: async (sectionUpdate: SectionUpdateName): Promise<SectionUpdateName> => {
		return await restService.patch<SectionUpdateName>(Uri.Section + 'updateName/', sectionUpdate);
	}
};

export default { Boards, Notes, Comments, Sections };
