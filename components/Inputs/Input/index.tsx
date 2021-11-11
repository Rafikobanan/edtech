import React, { useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  placeholder: string;
  color?: 'primary';
  errorMessage?: string;
}

const Input = React.forwardRef(
  (
    { className, placeholder, onChange, color = 'primary', errorMessage, ...rest }: InputProps,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    const [isActive, setIsActive] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e);
      if (e.target.value) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    return (
      <div className={cn(styles.inputWrapper, className)}>
        <input
          onChange={handleChange}
          ref={ref}
          className={cn(styles.input, styles[color], {
            [styles.active]: isActive,
            [styles.error]: !!errorMessage
          })}
          {...rest}
        />
        <span className={styles.placeholder}>
          {placeholder}
          {errorMessage ? <span className={styles.errorMessage}>{errorMessage}</span> : null}
        </span>
      </div>
    );
  }
);

export default Input;
