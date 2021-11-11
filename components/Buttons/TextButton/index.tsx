import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface TextButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: 'unfilled' | 'filled';
  color?: 'primary';
}

const TextButton = ({
  variant = 'unfilled',
  color = 'primary',
  className,
  ...rest
}: TextButtonProps) => (
  <button
    {...rest}
    type="button"
    className={cn(className, styles.button, styles[variant], styles[color])}
  />
);

export default TextButton;
