import Router from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getGlobalLanguage } from 'redux/slices/global';

const useChangeLanguage = () => {
  const language = useSelector(getGlobalLanguage);

  useEffect(
    () => () => {
      Router.push(Router.asPath);
    },
    [language]
  );
};

export default useChangeLanguage;
