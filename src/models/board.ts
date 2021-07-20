import { Section } from './section';

export interface CreateBoard {
	isPublic: boolean;
	name: string;
	background: string;
}

export interface BoardListing {
	isPublic: boolean;
	name: string;
	background: string;
}

export interface Board {
	id: number;
	isPublic: boolean;
	name: string;
	background: string;
	sections: Section[];
}
