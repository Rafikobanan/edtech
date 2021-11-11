import React from 'react';
import cn from 'classnames';
import Input from 'components/Inputs/Input';
import useTranslates from 'hooks/useTranslates';
import Button from 'components/Buttons/Button';
import { setActiveModal } from 'redux/slices/global';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';

interface Inputs {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

const Form = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<Inputs>();

  const [formName, formLastname, formEmail, formPassword, formSubmit] = useTranslates(
    'index.form.name',
    'index.form.lastname',
    'index.form.email',
    'index.form.password',
    'index.form.submit'
  ) as string[];

  const showModal = () => dispatch(setActiveModal('register'));

  return (
    <form onSubmit={handleSubmit(showModal)} className={styles.form}>
      <Input
        className={cn(styles.input, styles.half)}
        placeholder={formName}
        {...register('name')}
      />
      <Input
        className={cn(styles.input, styles.half)}
        placeholder={formLastname}
        {...register('lastName')}
      />
      <Input className={styles.input} placeholder={formEmail} {...register('email')} />
      <Input className={styles.input} placeholder={formPassword} {...register('password')} />
      <Button type="submit" className={styles.submit}>
        {formSubmit}
      </Button>
    </form>
  );
};

export default Form;
