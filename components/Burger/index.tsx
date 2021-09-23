import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface BurgerProps {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isActive: boolean;
  className: string;
}

const Burger = ({ onClick, isActive, className }: BurgerProps) => (
  <div onClick={onClick} className={cn(styles.burger, { [styles.active]: isActive }, className)}>
    <span />
    <span />
    <span />
  </div>
);

export default Burger;
