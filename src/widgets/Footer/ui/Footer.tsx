import styles from './Footer.module.scss';
import { memo } from 'react';

export const Footer: React.FC = memo((): React.JSX.Element => {
  return <div className={styles.Footer}></div>;
})