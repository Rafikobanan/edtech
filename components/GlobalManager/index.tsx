import useNProgress from 'hooks/useNProgress';
import useChangeLanguage from 'hooks/useChangeLanguage';

const GlobalManager = () => {
  useNProgress();
  useChangeLanguage();

  return null;
};

export default GlobalManager;
