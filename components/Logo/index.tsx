import React from 'react';
import EdufutSvg from 'assets/edufut.svg';
import AppLink from 'components/AppLink';
import { hrefs } from 'config';
import styles from './styles.module.scss';

const Logo = () => (
  <AppLink href={hrefs.FOR_STUDENTS}>
    <div className={styles.wrapper}>
      <EdufutSvg className={styles.logo} />
      <div className={styles.name}>EduFut</div>
    </div>
  </AppLink>
);

export default Logo;
