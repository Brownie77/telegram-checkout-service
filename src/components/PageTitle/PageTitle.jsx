import React from 'react';
import styles from './PageTitle.module.css';

function PageTitle({ children }) {
  return (
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
}

export default PageTitle;
