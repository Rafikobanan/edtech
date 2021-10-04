import React from 'react';
import cn from 'classnames';
import Input from 'components/Input';
import useTranslates from 'hooks/useTranslates';
import Button from 'components/Button';
import { useActions } from 'hooks/useActions';
import useForm from 'hooks/useForm';
import styles from './styles.module.scss';

interface FormState {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

const Form = () => {
  const { setActiveModal } = useActions();

  const { handleChangeCreator, form } = useForm<FormState>();

  const [formName, formLastname, formEmail, formPassword, formSubmit] = useTranslates(
    'index.form.name',
    'index.form.lastname',
    'index.form.email',
    'index.form.password',
    'index.form.submit'
  ) as string[];

  const handleClick = () => setActiveModal('register');

  return (
    <form className={styles.form}>
      <Input
        className={cn(styles.input, styles.half)}
        placeholder={formName}
        onChange={handleChangeCreator('name')}
        value={form.name}
      />
      <Input
        className={cn(styles.input, styles.half)}
        placeholder={formLastname}
        onChange={handleChangeCreator('lastname')}
        value={form.lastname}
      />
      <Input
        className={styles.input}
        placeholder={formEmail}
        onChange={handleChangeCreator('email')}
        value={form.email}
      />
      <Input
        className={styles.input}
        placeholder={formPassword}
        onChange={handleChangeCreator('password')}
        value={form.password}
      />
      <Button onClick={handleClick} className={styles.submit}>
        {formSubmit}
      </Button>
    </form>
  );
};

export default Form;
