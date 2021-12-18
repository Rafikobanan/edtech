import React, { useState } from 'react';
import cn from 'classnames';
import Logo from 'components/Logo';
import Burger from 'components/Burger';
import Button from 'components/Buttons/Button';
import useTranslates from 'hooks/useTranslates';
import ActiveLink from 'components/ActiveLink';
import { hrefs } from 'config';
import AppLink from 'components/AppLink';
import Languages from '../Languages';
import styles from './styles.module.scss';

const Menu = () => {
  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);

  const handleClick = () => setIsBurgerActive((prev) => !prev);

  const [forStudents, forTeachers, menuButton] = useTranslates(
    'all.landing.menu.students',
    'all.landing.menu.teachers',
    'all.landing.menu.button'
  );

  return (
    <div className={cn(styles.menu, { [styles.active]: isBurgerActive })}>
      <Logo />
      <div className={styles.middle}>
        <ActiveLink activeClassName={styles.activeLink} href={hrefs.FOR_STUDENTS}>
          {forStudents}
        </ActiveLink>
        <ActiveLink activeClassName={styles.activeLink} href={hrefs.FOR_TEACHERS}>
          {forTeachers}
        </ActiveLink>
      </div>
      <div className={styles.right}>
        <div className={styles.rightLanguages}>
          <Languages />
        </div>
        <Burger className={styles.burger} isActive={isBurgerActive} onClick={handleClick} />
        <AppLink href={hrefs.REGISTRATION}>
          <Button className={cn(styles.button, styles.rightButton)}>{menuButton}</Button>
        </AppLink>
      </div>
      <div className={styles.fullMenu}>
        <div className={styles.fullMenuContent}>
          <ActiveLink activeClassName={styles.activeLink} href={hrefs.FOR_STUDENTS}>
            {forStudents}
          </ActiveLink>
          <ActiveLink activeClassName={styles.activeLink} href={hrefs.FOR_TEACHERS}>
            {forTeachers}
          </ActiveLink>
          <div className={styles.languages}>
            <Languages />
          </div>
        </div>
        <AppLink href={hrefs.REGISTRATION}>
          <Button className={cn(styles.button, styles.fullMenuButton)}>{menuButton}</Button>
        </AppLink>
      </div>
    </div>
  );
};

export default Menu;
