import { Response } from 'models/response';
import { Board, BoardForm } from 'models/board';
import { NoteCreate, Note, NoteUpdate } from 'models/note';
import { Section, SectionCreate, SectionUpdateName } from 'models/section';
import { restService } from './serviceFactory';

const Uri = {
	Board: 'Board/',
	Note: 'Note/',
	Comment: 'Comment/',
	Section: 'Section/'
};

const Boards = {
	create: async (board: BoardForm): Promise<Response<Board>> => {
		return await restService.post<Response<Board>>(Uri.Board, board);
	},
	getAll: async (): Promise<Response<Board[]>> => {
		return await restService.get<Response<Board[]>>(Uri.Board);
	},
	get: async (id: number): Promise<Response<Board>> => {
		return await restService.get<Response<Board>>(Uri.Board + 'getAll/' + id);
	},
	update: async (board: BoardForm): Promise<Response<Board>> => {
		return await restService.put<Response<Board>>(Uri.Board + board.id, board);
	},
	delete: async (id: number): Promise<Response<boolean>> => {
		return await restService.delete<Response<boolean>>(Uri.Board + id);
	}
};
const Notes = {
	create: async (note: NoteCreate): Promise<Response<Note>> => {
		return await restService.post<Response<Note>>(Uri.Note, note);
	},
	delete: async (id: number): Promise<Response<boolean>> => {
		return await restService.delete<Response<boolean>>(Uri.Note + id);
	},
	update: async (note: NoteUpdate): Promise<Response<Note>> => {
		return await restService.put<Response<Note>>(Uri.Note, note);
	}
};
const Comments = {};
const Sections = {
	create: async (section: SectionCreate): Promise<Response<Section>> => {
		return await restService.post<Response<Section>>(Uri.Section, section);
	},
	delete: async (id: number): Promise<Response<boolean>> => {
		return await restService.delete<Response<boolean>>(Uri.Section + id);
	},
	updateName: async (sectionUpdate: SectionUpdateName): Promise<Response<SectionUpdateName>> => {
		return await restService.patch<Response<SectionUpdateName>>(Uri.Section + 'updateName/', sectionUpdate);
	}
};

export default { Boards, Notes, Comments, Sections };
