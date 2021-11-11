import type { GlobalLanguage } from 'redux/slices/global';
import { setCookie } from 'nookies';

const MONTH = 30 * 24 * 60 * 60 * 1000;
const YEAR = 12 * MONTH;
const LANGUAGE = 'LANGUAGE';
const DEFAULT_COOKIE_OPTIONS = { maxAge: MONTH, path: '/' };

class CookieService {
  setLanguage(language: GlobalLanguage) {
    setCookie(null, LANGUAGE, language, { ...DEFAULT_COOKIE_OPTIONS, maxAge: YEAR });
  }
}

const cookieService = new CookieService();
export default cookieService;
