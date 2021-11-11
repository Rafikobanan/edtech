import React from 'react';
import cn from 'classnames';
import BaseButton from '../BaseButton';
import styles from './styles.module.scss';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'contained';
  color?: 'primary' | 'secondary';
}

const Button = ({ className, variant = 'contained', color = 'primary', ...rest }: ButtonProps) => (
  <BaseButton className={cn(className, styles.button, styles[color], styles[variant])} {...rest} />
);

export default Button;
