import axios from 'axios';
import RestService from '../interfaces/RestService';

axios.defaults.baseURL = 'https://localhost:44330/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const axiosService: RestService = {
	get: async <T>(url: string): Promise<T> => {
		var response = await axios.get<T>(url);
		return response.data;
	},
	post: async <T>(url: string, body: {}): Promise<T> => {
		var response = await axios.post<T>(url, body);
		return response.data;
	},
	put: async <T>(url: string, body: {}): Promise<T> => {
		var response = await axios.put<T>(url, body);
		return response.data;
	},
	delete: async <T>(url: string): Promise<T> => {
		var response = await axios.delete<T>(url);
		return response.data;
	}
};

export default axiosService;
