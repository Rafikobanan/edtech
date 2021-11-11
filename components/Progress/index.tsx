import React from 'react';
import styles from './styles.module.scss';

interface ProgressProps {
  percent: number;
}

const Progress = ({ percent }: ProgressProps) => (
  <div className={styles.wrapper}>
    <div style={{ width: `${percent}%` }} className={styles.progress} />
  </div>
);

export default Progress;
