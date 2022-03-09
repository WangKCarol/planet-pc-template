import styles from './index.less';
import { query } from '../..//services/app';
import { useEffect } from 'react';

export default function IndexPage() {
  const fetchData = async () => {
    await query();
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
