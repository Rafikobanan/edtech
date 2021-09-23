import React from 'react';
import cn from 'classnames';
import UsaSvg from 'assets/usa.svg';
import RussiaSvg from 'assets/russia.svg';
import { useSelector } from 'react-redux';
import { getGlobalLanguage } from 'redux/slices/global';
import { useActions } from 'hooks/useActions';
import styles from './styles.module.scss';

const Languages = () => {
  const { changeLanguage } = useActions();
  const language = useSelector(getGlobalLanguage);

  return (
    <div className={styles.languages}>
      <UsaSvg
        className={cn({ [styles.visible]: language === 'en' })}
        onClick={() => changeLanguage('ru')}
      />
      <RussiaSvg
        className={cn({ [styles.visible]: language === 'ru' })}
        onClick={() => changeLanguage('en')}
      />
    </div>
  );
};

export default Languages;
