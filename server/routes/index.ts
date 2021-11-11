import { Router } from 'express';
import translationsService from '../services/translations';
import { cookies } from '../config';

const router = Router();

router.get('/api/translates/:page', (req, res) => {
  const { page } = req.params;

  const language = translationsService.getAvailableLanguage(req.cookies[cookies.LANGUAGE]);

  return res.status(200).json(translationsService.getTranslates(language, ['all', page]));
});

export default router;
