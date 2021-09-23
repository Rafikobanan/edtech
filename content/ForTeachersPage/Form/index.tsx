import React, { useState } from 'react';
import cn from 'classnames';
import Input from 'components/Input';
import useTranslates from 'hooks/useTranslates';
import Button from 'components/Button';
import styles from './styles.module.scss';

interface FormState {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

const Form = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    lastname: '',
    email: '',
    password: ''
  });

  const [formName, formLastname, formEmail, formPassword, formSubmit] = useTranslates(
    'teacher.form.name',
    'teacher.form.lastname',
    'teacher.form.email',
    'teacher.form.password',
    'teacher.form.submit'
  ) as string[];

  const changeHandleCreator =
    (field: keyof FormState) => (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      setForm((prevState) => ({
        ...prevState,
        [field]: (e.target as HTMLInputElement).value
      }));
    };

  return (
    <form className={styles.form}>
      <Input
        className={cn(styles.input, styles.half)}
        placeholder={formName}
        onChange={changeHandleCreator('name')}
        value={form.name}
      />
      <Input
        className={cn(styles.input, styles.half)}
        placeholder={formLastname}
        onChange={changeHandleCreator('lastname')}
        value={form.lastname}
      />
      <Input
        className={styles.input}
        placeholder={formEmail}
        onChange={changeHandleCreator('email')}
        value={form.email}
      />
      <Input
        className={styles.input}
        placeholder={formPassword}
        onChange={changeHandleCreator('password')}
        value={form.password}
      />
      <Button className={styles.submit}>{formSubmit}</Button>
    </form>
  );
};

export default Form;
