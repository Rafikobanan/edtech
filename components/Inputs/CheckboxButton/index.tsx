import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface CheckboxButtonProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  color?: 'primary';
}

const CheckboxButton = React.forwardRef(
  (
    { color = 'primary', className, children, name, ...rest }: CheckboxButtonProps,
    ref: React.LegacyRef<HTMLInputElement>
  ) => (
    <div className={cn(className, styles.wrapper)}>
      <input
        id={name}
        ref={ref}
        type="checkbox"
        className={cn(styles.checkbox, styles[color])}
        {...rest}
      />
      <label htmlFor={name} className={styles.content}>
        {children}
      </label>
    </div>
  )
);

export default CheckboxButton;
