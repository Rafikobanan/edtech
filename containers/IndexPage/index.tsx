import React from 'react';
import useTranslates from 'hooks/useTranslates';
import styles from './styles.module.scss';

const IndexPage = () => {
  const [imageAlt, title] = useTranslates('index.first.section.image.alt', [
    { id: 'index.first.section.title' },
    { span: (...chunks) => <span>{chunks}</span>, img: () => <img alt="" src="./two-hands.png" /> }
  ]);

  return (
    <section className={styles.wrapper}>
      <img className={styles.image} alt={imageAlt as string} src="./for-student.jpg" />
      <h2 className={styles.title}>{title}</h2>
    </section>
  );
};

export default IndexPage;
