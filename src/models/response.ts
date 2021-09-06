export enum ResponseStatus {
	success,
	error
}

export interface Response<TModel> {
	responseStatus: ResponseStatus;
	errorMessage: string;
	responseObject: TModel;
}
