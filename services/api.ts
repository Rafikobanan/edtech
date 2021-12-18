import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';
import setCookie from 'set-cookie-parser';
import { envs } from '../config';

interface Translates {
  [key: string]: string;
}

const getCookieString = (
  headerSetCookie: string | string[] | undefined | number,
  normalCookie: string | undefined
) => {
  const getSetCookieObj = () => {
    if (headerSetCookie === undefined || typeof headerSetCookie === 'number') return {};

    const parsedCookie = setCookie.parse(headerSetCookie, { map: true });

    return Object.keys(parsedCookie).reduce((acc: Record<string, string>, key) => {
      acc[key] = parsedCookie[key].value;

      return acc;
    }, {});
  };

  const finalCookieObj = {
    ...normalCookie
      ?.split(';')
      .map((v) => v.split('='))
      .reduce((acc: Record<string, string>, v) => {
        acc[v[0].trim()] = v[1].trim();
        return acc;
      }, {}),
    ...getSetCookieObj()
  };

  return Object.keys(finalCookieObj)
    .map((cookieName) => `${cookieName}=${finalCookieObj[cookieName]}`)
    .join('; ');
};

export class ApiService {
  private api: AxiosInstance;
  private req?: GetServerSidePropsContext['req'];
  private res?: GetServerSidePropsContext['res'];

  constructor(
    api: AxiosInstance,
    req?: GetServerSidePropsContext['req'],
    res?: GetServerSidePropsContext['res']
  ) {
    this.api = api;
    this.req = req;
    this.res = res;

    this.api.defaults.withCredentials = true;
    this.api.defaults.baseURL = `${envs.API_URL}/api`;

    this.api.interceptors.request.use((config) => {
      if (this.req && this.res) {
        const cookieHeader = this.res.getHeader('set-cookie');

        config.headers = this.req.headers;

        config.headers.cookie = cookieHeader
          ? getCookieString(cookieHeader, this.req.headers.cookie)
          : this.req.headers.cookie;
      }

      return config;
    });

    this.api.interceptors.response.use(
      (response) => {
        if (this.res) {
          const { headers } = response;

          if (headers['set-cookie']) this.res.setHeader('set-cookie', headers['set-cookie']);
        }

        return response;
      },
      async (error: AxiosError) => {
        const originalRequest: AxiosRequestConfig & { isRetried?: boolean } = error.config;

        if (error.response?.status === 401 && !originalRequest.isRetried) {
          originalRequest.isRetried = true;

          await this.refreshTokens();

          return this.api(originalRequest);
        }

        return Promise.reject(error);
      }
    );
  }

  static create(req?: GetServerSidePropsContext['req'], res?: GetServerSidePropsContext['res']) {
    return new ApiService(axios.create(), req, res);
  }

  getTranslates(page: string): Promise<AxiosResponse<Translates>> {
    return this.api({
      baseURL: envs.CLIENT_SERVER_URL,
      url: `/api/translates/${page}`,
      method: 'GET'
    });
  }

  refreshTokens() {
    return this.api.post('/auth/refresh');
  }

  register(
    name: string,
    lastName: string,
    email: string,
    password: string,
    terms: boolean,
    mailing: boolean
  ) {
    return this.api.post('/auth/register', { name, lastName, email, password, terms, mailing });
  }

  login(email: string, password: string) {
    return this.api.post('/auth/login', { email, password });
  }

  getUserInfo() {
    return this.api.get('/users/info');
  }
}

const apiService = ApiService.create();
export default apiService;
