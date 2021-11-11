import React from 'react';
import cn from 'classnames';
import UsaSvg from 'assets/usa.svg';
import RussiaSvg from 'assets/russia.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalLanguage, changeLanguage } from 'redux/slices/global';
import styles from './styles.module.scss';

const Languages = () => {
  const dispatch = useDispatch();
  const language = useSelector(getGlobalLanguage);

  return (
    <div className={styles.languages}>
      <UsaSvg
        className={cn({ [styles.visible]: language === 'en' })}
        onClick={() => dispatch(changeLanguage('ru'))}
      />
      <RussiaSvg
        className={cn({ [styles.visible]: language === 'ru' })}
        onClick={() => dispatch(changeLanguage('en'))}
      />
    </div>
  );
};

export default Languages;
