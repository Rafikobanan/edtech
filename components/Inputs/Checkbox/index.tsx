import React from 'react';
import cn from 'classnames';
import ThickCheckMarkSvg from 'assets/thick-check-mark.svg';
import styles from './styles.module.scss';

interface CheckboxProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  color?: 'primary';
  isError?: boolean;
}

const Checkbox = React.forwardRef(
  (
    { color = 'primary', className, children, name, isError, ...rest }: CheckboxProps,
    ref: React.LegacyRef<HTMLInputElement>
  ) => (
    <div className={cn(styles.wrapper, className)}>
      <input
        type="checkbox"
        id={name}
        name={name}
        ref={ref}
        className={cn(styles.checkbox, styles[color])}
        {...rest}
      />
      <div className={cn(styles.customCheckbox, { [styles.errorCheckbox]: isError })}>
        <ThickCheckMarkSvg />
      </div>
      <label htmlFor={name} className={styles.label}>
        {children}
      </label>
    </div>
  )
);

export default Checkbox;
