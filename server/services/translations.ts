import enAllTranslations from '../translations/en/all.json';
import enIndexTranslations from '../translations/en/index.json';
import enTeacherTranslations from '../translations/en/teacher.json';
import ruAllTranslations from '../translations/ru/all.json';
import ruIndexTranslations from '../translations/ru/index.json';
import ruTeacherTranslations from '../translations/ru/teacher.json';

const translations = {
  en: {
    all: enAllTranslations,
    index: enIndexTranslations,
    teacher: enTeacherTranslations
  },
  ru: {
    all: ruAllTranslations,
    index: ruIndexTranslations,
    teacher: ruTeacherTranslations
  }
};

export type Languages = 'en' | 'ru';
const availableLanguages: Languages[] = ['en', 'ru'];

class TranslationsService {
  getTranslates(language: Languages, pages: string[]) {
    const translates = {};

    pages.forEach((page) =>
      // @ts-ignore
      Object.assign(translates, translations.en[page], translations[language][page])
    );

    return translates;
  }

  getLanguage(lang: string): Languages {
    if (availableLanguages.includes(<Languages>lang)) return <Languages>lang;

    return 'en';
  }
}

const translationsService = new TranslationsService();
export default translationsService;
