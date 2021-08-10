import React from 'react';
import Menu from './Menu';
import styles from './styles.module.scss';

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => (
  <>
    <Menu />
    <div className={styles.container}>{children}</div>
  </>
);

export default LandingLayout;
