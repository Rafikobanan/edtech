import React from 'react';
import useTranslates from 'hooks/useTranslates';
import Input from 'components/Inputs/Input';
import Button from 'components/Buttons/Button';
import { formValidation, hrefs } from 'config';
import Checkbox from 'components/Inputs/Checkbox';
import AppLink from 'components/AppLink';
import { useForm } from 'react-hook-form';
import coolFace from 'public/cool-face.png';
import Image from 'next/image';
import { useRegistrationContext } from '../registrationContext';
import styles from '../styles.module.scss';

interface Inputs {
  email: string;
  password: string;
  terms: boolean;
  mailing: boolean;
}

const FourthStep = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<Inputs>();

  const { onSubmit } = useRegistrationContext();

  console.log(errors);
  console.log(getValues());

  const [terms, policy] = useTranslates('registration.fourth.terms', 'registration.fourth.policy');

  const [
    title,
    subtitle,
    firstInput,
    secondInput,
    termsCheckbox,
    mailingCheckbox,
    button,
    emailErrorMessage,
    passwordErrorMessage
  ] = useTranslates(
    'registration.fourth.title',
    'registration.fourth.subtitle',
    'registration.fourth.input.email',
    'registration.fourth.input.password',
    [
      { id: 'registration.fourth.terms.checkbox' },
      {
        terms: <AppLink href={hrefs.TERMS}>{terms}</AppLink>,
        privacy: <AppLink href={hrefs.POLICY}>{policy}</AppLink>
      }
    ],
    'registration.fourth.mailing.checkbox',
    'registration.fourth.button',
    errors.email?.message,
    errors.password?.message
  );

  return (
    <>
      <div className={styles.imageContainer}>
        <Image width="100" height="100" src={coolFace} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.subtitle}>{subtitle}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          className={styles.input}
          placeholder={firstInput as string}
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
          placeholder={secondInput as string}
          errorMessage={passwordErrorMessage as string}
          {...register('password', {
            required: 'all.input.password.required',
            minLength: {
              value: formValidation.MIN_PASSWORD_LENGTH,
              message: 'all.input.password.min.length'
            }
          })}
        />
        <Checkbox
          className={styles.checkboxWrapper}
          isError={!!errors.terms}
          {...register('terms', {
            required: true
          })}
        >
          <span className={styles.checkboxLabel}>{termsCheckbox}</span>
        </Checkbox>
        <Checkbox className={styles.checkboxWrapper} {...register('mailing')}>
          <span className={styles.checkboxLabel}>{mailingCheckbox}</span>
        </Checkbox>
        <div className={styles.buttonsContainer}>
          <Button className={styles.button} type="submit">
            {button}
          </Button>
        </div>
      </form>
    </>
  );
};

export default FourthStep;
