import React from 'react';
import useTranslates from 'hooks/useTranslates';
import Button from 'components/Buttons/Button';
import Image from 'next/image';
import rocket from 'public/rocket.png';
import { useRegistrationContext } from '../registrationContext';
import styles from '../styles.module.scss';

const ThirdStep = () => {
  const {
    setNextStep,
    formState: { name }
  } = useRegistrationContext();

  const [title, subtitle, button] = useTranslates(
    [{ id: 'registration.third.title' }, { span: (parts) => <span>{parts}</span>, name }],
    'registration.third.subtitle',
    'registration.third.button'
  );

  return (
    <>
      <div className={styles.imageContainer}>
        <Image width="100" height="100" src={rocket} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.buttonsContainer}>
        <Button onClick={setNextStep} className={styles.button} type="submit">
          {button}
        </Button>
      </div>
    </>
  );
};

export default ThirdStep;
