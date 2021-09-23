import { Router } from 'express';
import translationsService from '../services/translations';

const router = Router();

router.get('/api/translates/:page', (req, res) => {
  const { page } = req.params;

  const language = translationsService.getLanguage(req.cookies.language);

  return res.status(200).json(translationsService.getTranslates(language, ['all', page]));
});

export default router;
