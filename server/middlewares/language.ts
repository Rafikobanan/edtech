import { Response, Request, NextFunction } from 'express';
import translationsService from '../services/translations';
import { cookies } from '../config';

const languageMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const languageCookie = req.cookies[cookies.LANGUAGE];

  const availableLanguage = translationsService.getAvailableLanguage(
    languageCookie || req.acceptsLanguages('ru', 'en')
  );

  if (!languageCookie)
    res.cookie(cookies.LANGUAGE, availableLanguage, {
      ...cookies.DEFAULT_COOKIE_OPTIONS,
      httpOnly: false,
      maxAge: cookies.YEAR_DURATION
    });

  req.language = availableLanguage;

  next();
};

export default languageMiddleware;
