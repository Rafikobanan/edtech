import React from 'react';
import EdufutSvg from 'assets/edufut.svg';
import AppLink from 'components/AppLink';
import { HREFS } from 'config';
import styles from './styles.module.scss';

const Logo = () => (
  <AppLink href={HREFS.forStudents}>
    <div className={styles.wrapper}>
      <EdufutSvg className={styles.logo} />
      <div className={styles.name}>EduFut</div>
    </div>
  </AppLink>
);

export default Logo;
