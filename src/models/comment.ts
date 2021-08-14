export interface CreateComment {
	content: string;
	noteId: number;
}

export interface Comment {
	id: number;
	content: string;
	upVotes: number;
	downVotes: number;
	createTime: Date;
	editTime: Date;
	noteId: number;
}
