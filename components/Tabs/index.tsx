import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface TabsProps {
  list: Array<{
    isActive: boolean;
    content: React.ReactNode;
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }>;
  className?: string;
}

const Tabs = ({ list, className }: TabsProps) => (
  <div className={cn(styles.tabs, className)}>
    {list.map(({ isActive, content, handleClick }) => (
      <button
        key={content as string}
        onClick={handleClick}
        type="button"
        className={cn(styles.tab, { [styles.active]: isActive })}
      >
        {content}
      </button>
    ))}
  </div>
);

export default Tabs;
