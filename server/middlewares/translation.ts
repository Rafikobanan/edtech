import { Response, Request, NextFunction } from 'express';
import enTranslations from '../translations/en/index.json';
import ruTranslations from '../translations/ru/index.json';

const translationMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const lang = req.acceptsLanguages('ru', 'en') || 'en';

  const defaultTranslations = enTranslations;
  const messages: Record<string, Request['messages']> = {
    ru: ruTranslations,
    en: enTranslations
  };

  req.messages = { ...defaultTranslations, ...messages[lang] };
  next();
};

export default translationMiddleware;
