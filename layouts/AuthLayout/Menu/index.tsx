import React from 'react';
import cn from 'classnames';
import Logo from 'components/Logo';
import TextButton from 'components/Buttons/TextButton';
import useTranslates from 'hooks/useTranslates';
import AppLink from 'components/AppLink';
import { hrefs } from 'config';
import styles from './styles.module.scss';

interface MenuProps {
  isSignInLink?: boolean;
}

const Menu = ({ isSignInLink }: MenuProps) => {
  const [signUp, signIn] = useTranslates('all.auth.sign.up', 'all.auth.sign.in');

  return (
    <div className={cn(styles.menu)}>
      <Logo />
      <AppLink href={isSignInLink ? hrefs.LOGIN : hrefs.REGISTRATION}>
        <TextButton className={styles.button}>{isSignInLink ? signIn : signUp}</TextButton>
      </AppLink>
    </div>
  );
};

export default Menu;
