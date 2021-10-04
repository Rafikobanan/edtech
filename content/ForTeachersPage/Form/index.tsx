import React from 'react';
import cn from 'classnames';
import Input from 'components/Input';
import useTranslates from 'hooks/useTranslates';
import Button from 'components/Button';
import useForm from 'hooks/useForm';
import styles from './styles.module.scss';

interface FormState {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

const Form = () => {
  const { handleChangeCreator, form } = useForm<FormState>();

  const [formName, formLastname, formEmail, formPassword, formSubmit] = useTranslates(
    'teacher.form.name',
    'teacher.form.lastname',
    'teacher.form.email',
    'teacher.form.password',
    'teacher.form.submit'
  ) as string[];

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
      <Button className={styles.submit}>{formSubmit}</Button>
    </form>
  );
};

export default Form;
