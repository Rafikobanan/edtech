import React from 'react';
import Logo from 'components/Logo';
import Burger from 'components/Burger';
import styles from './styles.module.scss';

const Menu = () => (
  <div className={styles.menu}>
    <Logo />
    <Burger />
  </div>
);

export default Menu;
