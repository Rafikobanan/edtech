import { Languages } from '../../server/services/translations';

export {};

declare global {
  namespace Express {
    interface Request {
      messages: {
        [key: string]: string;
      };

      language: Languages;
    }
  }
}
