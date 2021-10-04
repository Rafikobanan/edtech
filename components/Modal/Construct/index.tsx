import React from 'react';
import useTranslates from 'hooks/useTranslates';
import Input from 'components/Input';
import Button from 'components/Button';
import useForm from 'hooks/useForm';
import styles from '../styles.module.scss';

interface FormState {
  name: string;
  email: string;
}

const Construct = () => {
  const { handleChangeCreator, form } = useForm<FormState>();

  const [
    constructTitle,
    constructContent,
    constructFormName,
    constructFormEmail,
    constructFormSubmit
  ] = useTranslates(
    'all.modal.construct.title',
    'all.modal.construct.content',
    'all.modal.construct.form.name',
    'all.modal.construct.form.email',
    'all.modal.construct.form.submit'
  );

  return (
    <div className={styles.construct}>
      <h4 className={styles.title}>{constructTitle}</h4>
      <p className={styles.content}>{constructContent}</p>
      <Input
        onChange={handleChangeCreator('name')}
        value={form.name}
        className={styles.constructInput}
        placeholder={constructFormName as string}
      />
      <Input
        onChange={handleChangeCreator('email')}
        value={form.email}
        className={styles.constructInput}
        placeholder={constructFormEmail as string}
      />
      <Button className={styles.constructButton}>{constructFormSubmit}</Button>
    </div>
  );
};

export default Construct;
