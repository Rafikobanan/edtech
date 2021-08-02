import { useMemo } from 'react';
import { Request } from 'express';

let translationStore: Request['messages'];

export const initializeTranslationStore = (translations: Request['messages']) => {
  translationStore = translationStore ?? translations;

  return translationStore;
};

const useTranslationStore = (translations: Request['messages']) => {
  const store = useMemo(() => initializeTranslationStore(translations), [translations]);
  return store;
};

export default useTranslationStore;
