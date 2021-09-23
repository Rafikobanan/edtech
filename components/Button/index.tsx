import React from 'react';
import BaseButton from 'components/BaseButton';
import cn from 'classnames';
import styles from './styles.module.scss';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: 'contained';
  color?: 'primary' | 'secondary';
}

const Button = ({ className, variant = 'contained', color = 'primary', ...rest }: ButtonProps) => (
  <BaseButton className={cn(className, styles.button, styles[color], styles[variant])} {...rest} />
);

export default Button;
