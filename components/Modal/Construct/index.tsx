import React from 'react';
import useTranslates from 'hooks/useTranslates';
import Input from 'components/Inputs/Input';
import Button from 'components/Buttons/Button';
import { useForm } from 'react-hook-form';
import styles from '../styles.module.scss';

interface Inputs {
  name: string;
  email: string;
}

const Construct = () => {
  const { register } = useForm<Inputs>();

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
      <form>
        <Input
          className={styles.constructInput}
          placeholder={constructFormName as string}
          {...register('name')}
        />
        <Input
          className={styles.constructInput}
          placeholder={constructFormEmail as string}
          {...register('email')}
        />
        <Button type="submit" className={styles.constructButton}>
          {constructFormSubmit}
        </Button>
      </form>
    </div>
  );
};

export default Construct;
