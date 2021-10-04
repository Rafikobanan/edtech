import axios, { AxiosStatic } from 'axios';
import { Request } from 'express';
import { toCookie } from '../utils';

interface Translates {
  [key: string]: string;
}

class ApiService {
  api: AxiosStatic;

  constructor(api: AxiosStatic) {
    this.api = api;

    this.api.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
    this.api.defaults.withCredentials = true;
  }

  fetchTranslates(page: string, req: Request): Promise<Translates> {
    return this.api
      .get(`/api/translates/${page}`, {
        headers: req ? { cookie: toCookie('language', req.language) } : undefined
      })
      .then((response) => response.data);
  }
}

const apiService = new ApiService(axios);
export default apiService;
