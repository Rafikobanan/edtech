import React, { useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  placeholder: string;
}

const Input = ({ className, placeholder, value = '', onFocus, onBlur, ...rest }: InputProps) => {
  const [isFocusActive, setIsFocusActive] = useState<boolean>(false);

  const isPlaceholderActive = !!value || isFocusActive;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocusActive(true);

    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocusActive(false);

    if (onBlur) onBlur(e);
  };

  return (
    <div className={cn(styles.inputWrapper, className)}>
      <span className={cn(styles.placeholder, { [styles.active]: isPlaceholderActive })}>
        {placeholder}
      </span>
      <input
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={styles.input}
        value={value}
      />
    </div>
  );
};

export default Input;
