import RestService from '../interfaces/RestService';
import ajaxService from './ajaxService';

const apiBaseUrl = '';
export const restService: RestService = ajaxService;
//export const restService: RestService = new AjaxService(apiBaseUrl);
