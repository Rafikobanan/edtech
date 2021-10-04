import React from 'react';
import ThankYouSvg from 'assets/thank-you.svg';
import useTranslates from 'hooks/useTranslates';
import styles from '../styles.module.scss';

const Register = () => {
  const [registerTitle, registerContent, registerSubcontent] = useTranslates(
    'all.modal.register.title',
    'all.modal.register.content',
    'all.modal.register.subcontent'
  );

  return (
    <div className={styles.register}>
      <ThankYouSvg />
      <h4 className={styles.title}>{registerTitle}</h4>
      <p className={styles.content}>{registerContent}</p>
      <p className={styles.subcontent}>{registerSubcontent}</p>
    </div>
  );
};

export default Register;
