export default interface RestService {
	get<T>(url: string): Promise<T>;
	post<T>(url: string, body: {}): Promise<T>;
	put<T>(url: string, body: {}): Promise<T>;
	patch<T>(url: string, body: {}): Promise<T>;
	delete<T>(url: string): Promise<T>;
};
