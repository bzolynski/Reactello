export interface BoardForm {
	id?: number;
	isPublic: boolean;
	name: string;
	background: string;
}

export interface BoardListing {
	id: number;
	isPublic: boolean;
	name: string;
	background: string;
	dateCreated?: string;
}

export interface BoardPage {
	id: number;
	isPublic: boolean;
	name: string;
	background: string;
	dateCreated?: string;
}
