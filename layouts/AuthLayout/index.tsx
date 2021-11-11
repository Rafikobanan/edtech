import React from 'react';
import Menu from './Menu';
import styles from './styles.module.scss';

interface AuthLayoutProps {
  children: React.ReactNode;
  isSignInLink?: boolean;
}

const AuthLayout = ({ children, isSignInLink }: AuthLayoutProps) => (
  <div className={styles.pageWrapper}>
    <Menu isSignInLink={isSignInLink} />
    <div className={styles.container}>{children}</div>
  </div>
);

export default AuthLayout;
