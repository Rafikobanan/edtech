import { Request } from 'express';
import axios from './axios';
import { toCookie } from '../utils';

interface Translates {
  [key: string]: string;
}

const fetchTranslates = (page: string, req: Request): Promise<Translates> =>
  axios
    .get(`/api/translates/${page}`, {
      headers: req ? { cookie: toCookie('language', req.language) } : undefined
    })
    .then((response) => response.data);

export default fetchTranslates;
