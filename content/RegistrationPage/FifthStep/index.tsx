import React from 'react';
import useTranslates from 'hooks/useTranslates';
import Button from 'components/Buttons/Button';
import AppLink from 'components/AppLink';
import { HREFS } from 'config';
import styles from '../styles.module.scss';

const FifthStep = () => {
  const [title, subtitle, button] = useTranslates(
    [{ id: 'registration.fifth.title' }, { span: (parts) => <span>{parts}</span> }],
    'registration.fifth.subtitle',
    'registration.fifth.button'
  );

  return (
    <>
      <img className={styles.image} alt="" src="./congratulations.png" />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.buttonsContainer}>
        <AppLink href={HREFS.login}>
          <Button className={styles.button}>{button}</Button>
        </AppLink>
      </div>
    </>
  );
};

export default FifthStep;
