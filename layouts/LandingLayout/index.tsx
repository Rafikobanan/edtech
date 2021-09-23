import React from 'react';
import Footer from 'components/Footer';
import Menu from './Menu';
import styles from './styles.module.scss';

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => (
  <>
    <Menu />
    <div className={styles.container}>{children}</div>
    <Footer />
  </>
);

export default LandingLayout;
