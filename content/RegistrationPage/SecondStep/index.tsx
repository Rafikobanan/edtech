import React from 'react';
import useTranslates from 'hooks/useTranslates';
import Button from 'components/Buttons/Button';
import CheckboxButton from 'components/Inputs/CheckboxButton';
import { useForm } from 'react-hook-form';
import { UnpackNestedValue } from 'react-hook-form/dist/types/form';
import thinkingFace from 'public/thinking-face.png';
import Image from 'next/image';
import { useRegistrationContext } from '../registrationContext';
import styles from '../styles.module.scss';

type Inputs = {
  qualifications: boolean;
  profession: boolean;
  teach: boolean;
  mind: boolean;
  learn: boolean;
  people: boolean;
};

const SecondStep = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const {
    formState: { name },
    setNextStep
  } = useRegistrationContext();

  const [
    title,
    subtitle,
    qualificationsCheckbox,
    professionCheckbox,
    teachCheckbox,
    mindCheckbox,
    learnCheckbox,
    peopleCheckbox,
    button
  ] = useTranslates(
    [{ id: 'registration.second.title' }, { span: (parts) => <span>{parts}</span>, name }],
    'registration.second.subtitle',
    'registration.second.qualifications',
    'registration.second.profession',
    'registration.second.teach',
    'registration.second.mind',
    'registration.second.learn',
    'registration.second.people',
    'registration.second.button'
  );

  const checkboxes: { content: React.ReactNode; name: keyof Inputs }[] = [
    { content: qualificationsCheckbox, name: 'qualifications' },
    { content: professionCheckbox, name: 'profession' },
    { content: teachCheckbox, name: 'teach' },
    { content: mindCheckbox, name: 'mind' },
    { content: learnCheckbox, name: 'learn' },
    { content: peopleCheckbox, name: 'people' }
  ];

  const onSubmit = (data: UnpackNestedValue<Inputs>) => {
    console.log(data);
    setNextStep();
  };

  return (
    <>
      <div className={styles.imageContainer}>
        <Image width="100" height="100" src={thinkingFace} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.subtitle}>{subtitle}</p>
      <form className={styles.checkboxButtonWrapper} onSubmit={handleSubmit(onSubmit)}>
        {checkboxes.map(({ content, name }, index) => (
          <CheckboxButton
            {...register(name)}
            className={styles.checkboxButton}
            key={`checkbox_${index}`}
          >
            {content}
          </CheckboxButton>
        ))}
        <div className={styles.buttonsContainer}>
          <Button className={styles.button} type="submit">
            {button}
          </Button>
        </div>
      </form>
    </>
  );
};

export default SecondStep;
