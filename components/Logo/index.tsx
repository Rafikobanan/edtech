import React from 'react';
import Icon from 'components/Icon';
import edufutSvg from 'assets/sprite/edufut.svg?sprite';
import styles from './styles.module.scss';

const Logo = () => (
  <div className={styles.wrapper}>
    <Icon glyph={edufutSvg.id} />
  </div>
);

export default Logo;
