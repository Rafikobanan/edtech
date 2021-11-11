import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  placeholder: string;
}

const Input = React.forwardRef(
  ({ className, placeholder, ...rest }: InputProps, ref: React.LegacyRef<HTMLInputElement>) => (
    <div className={cn(styles.inputWrapper, className)}>
      <input required ref={ref} className={styles.input} {...rest} />
      <span className={styles.placeholder}>{placeholder}</span>
    </div>
  )
);

export default Input;
