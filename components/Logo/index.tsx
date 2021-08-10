import React from 'react';
import Icon from 'components/Icon';
import edufutSvg from 'svgs/edufut.svg?sprite';
import styles from './styles.module.scss';

const Logo = () => (
  <div className={styles.wrapper}>
    <Icon className={styles.logo} glyph={edufutSvg.id} />
    <div className={styles.content}>
      <div className={styles.name}>EduFut</div>
      <div className={styles.subname}>Education of the Future</div>
    </div>
  </div>
);

export default Logo;
