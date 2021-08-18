export interface NormalizedState<TModel> {
	items: { [id: number]: TModel };
	itemIds: number[];
}

export interface NormalizedModel<TModel> {
	[id: number]: TModel;
}

export interface NormalizedBoard {
	id: number;
	isPublic: boolean;
	name: string;
	background: string;
	dateCreated?: string;
	sections: number[];
}

export interface NormalizedSection {
	id: number;
	name: string;
	color: string;
	position: number;
	boardId: number;
	notes: number[];
}

export interface NormalizedNote {
	id: number;
	title: string;
	description: string;
	position: number;
	sectionId: number;
	comments: number[];
}

export interface NormalizedComment {
	id: number;
	content: string;
	upVotes: number;
	downVotes: number;
	createTime: Date;
	editTime: Date;
	noteId: number;
}
