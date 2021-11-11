import React from 'react';
import cn from 'classnames';
import BaseButton from '../BaseButton';
import styles from './styles.module.scss';

interface IconButtonProps {
  children: React.ReactNode;
  className?: string;
  strokeDisabled?: boolean;
  fillDisabled?: boolean;
  color?: 'primary' | 'secondary';
}

const IconButton = ({
  children,
  className,
  strokeDisabled,
  fillDisabled,
  color = 'primary'
}: IconButtonProps) => (
  <BaseButton
    className={cn(
      styles.button,
      styles[color],
      { [styles.strokeDisabled]: strokeDisabled, [styles.fillDisabled]: fillDisabled },
      className
    )}
  >
    {children}
  </BaseButton>
);

export default IconButton;
