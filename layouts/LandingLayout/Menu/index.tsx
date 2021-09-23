import React, { useState } from 'react';
import cn from 'classnames';
import Logo from 'components/Logo';
import Burger from 'components/Burger';
import Button from 'components/Button';
import useTranslates from 'hooks/useTranslates';
import ActiveLink from 'components/ActiveLink';
import { HREFS } from 'config';
import AppLink from 'components/AppLink';
import styles from './styles.module.scss';
import Languages from '../Languages';

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
        <ActiveLink activeClassName={styles.activeLink} href={HREFS.forStudents}>
          {forStudents}
        </ActiveLink>
        <ActiveLink activeClassName={styles.activeLink} href={HREFS.forTeachers}>
          {forTeachers}
        </ActiveLink>
      </div>
      <div className={styles.right}>
        <div className={styles.rightLanguages}>
          <Languages />
        </div>
        <Burger className={styles.burger} isActive={isBurgerActive} onClick={handleClick} />
        <AppLink href={HREFS.login}>
          <Button className={cn(styles.button, styles.rightButton)}>{menuButton}</Button>
        </AppLink>
      </div>
      <div className={styles.fullMenu}>
        <div className={styles.fullMenuContent}>
          <ActiveLink activeClassName={styles.activeLink} href={HREFS.forStudents}>
            {forStudents}
          </ActiveLink>
          <ActiveLink activeClassName={styles.activeLink} href={HREFS.forTeachers}>
            {forTeachers}
          </ActiveLink>
          <div className={styles.languages}>
            <Languages />
          </div>
        </div>
        <AppLink href={HREFS.login}>
          <Button className={cn(styles.button, styles.fullMenuButton)}>{menuButton}</Button>
        </AppLink>
      </div>
    </div>
  );
};

export default Menu;
