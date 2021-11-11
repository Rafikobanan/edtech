import React from 'react';
import Image from 'next/image';
import useTranslates from 'hooks/useTranslates';
import Input from 'components/Inputs/Input';
import Button from 'components/Buttons/Button';
import { FORM_VALIDATION } from 'config';
import { useForm } from 'react-hook-form';
import wavingHand from '../../../public/waving-hand.png';
import styles from '../styles.module.scss';
import { useRegistrationContext } from '../registrationContext';

interface Inputs {
  name: string;
  lastName: string;
}

const FirstStep = () => {
  const { onSubmit } = useRegistrationContext();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const [title, subtitle, firstInput, secondInput, button, nameErrorMessage, lastNameErrorMessage] =
    useTranslates(
      [{ id: 'registration.first.title' }, { span: (parts) => <span>{parts}</span> }],
      'registration.first.subtitle',
      'registration.first.input.name',
      'registration.first.input.lastname',
      'registration.first.button',
      errors.name?.message,
      errors.lastName?.message
    );

  return (
    <>
      <div className={styles.imageContainer}>
        <Image width="100" height="100" src={wavingHand} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.subtitle}>{subtitle}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          className={styles.input}
          placeholder={firstInput as string}
          errorMessage={nameErrorMessage as string}
          {...register('name', {
            required: 'all.input.name.required',
            maxLength: {
              value: FORM_VALIDATION.maxNameLength,
              message: 'all.input.name.max.length'
            }
          })}
        />
        <Input
          className={styles.input}
          placeholder={secondInput as string}
          errorMessage={lastNameErrorMessage as string}
          {...register('lastName', {
            required: 'all.input.lastname.required',
            maxLength: {
              value: FORM_VALIDATION.maxLastNameLength,
              message: 'all.input.lastname.max.length'
            }
          })}
        />
        <div className={styles.buttonsContainer}>
          <Button className={styles.button} type="submit">
            {button}
          </Button>
        </div>
      </form>
    </>
  );
};

export default FirstStep;
