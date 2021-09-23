import { Response, Request, NextFunction } from 'express';
import translationsService from '../services/translations';

const languageMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const language = translationsService.getLanguage(
    req.cookies.language || req.acceptsLanguages('ru', 'en')
  );

  res.cookie('language', language);
  req.language = language;

  next();
};

export default languageMiddleware;
