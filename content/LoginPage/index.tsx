import React from 'react';
import Image from 'next/image';
import wavingHand from 'public/waving-hand.png';
import useTranslates from 'hooks/useTranslates';
import Input from 'components/Inputs/Input';
import Button from 'components/Buttons/Button';
import TextButton from 'components/Buttons/TextButton';
import AppLink from 'components/AppLink';
import { hrefs, formValidation } from 'config';
import { useForm } from 'react-hook-form';
import apiService from 'services/api';
import styles from './styles.module.scss';

interface Inputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const [
    title,
    inputEmail,
    inputPassword,
    forgotButton,
    submitButton,
    emailErrorMessage,
    passwordErrorMessage
  ] = useTranslates(
    [{ id: 'login.title' }, { span: (parts) => <span>{parts}</span> }],
    'login.input.email',
    'login.input.password',
    'login.forgot.button',
    'login.submit.button',
    errors.email?.message,
    errors.password?.message
  );

  const onSubmit = async (inputs: Inputs) => {
    const { email, password } = inputs;

    await apiService.login(email, password);
  };

  return (
    <>
      <div className={styles.imageContainer}>
        <Image width="100" height="100" src={wavingHand} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          className={styles.input}
          placeholder={inputEmail as string}
          errorMessage={emailErrorMessage as string}
          {...register('email', {
            required: 'all.input.email.required',
            pattern: {
              value: formValidation.EMAIL_REGEX,
              message: 'all.input.email.incorrect'
            }
          })}
        />
        <Input
          type="password"
          className={styles.input}
          placeholder={inputPassword as string}
          errorMessage={passwordErrorMessage as string}
          {...register('password', {
            required: 'all.input.password.required',
            minLength: {
              value: formValidation.MIN_PASSWORD_LENGTH,
              message: 'all.input.password.min.length'
            }
          })}
        />
        <AppLink href={hrefs.RECOVERY}>
          <TextButton className={styles.textButton}>{forgotButton}</TextButton>
        </AppLink>
        <div className={styles.buttonContainer}>
          <Button type="submit" className={styles.submitButton}>
            {submitButton}
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
