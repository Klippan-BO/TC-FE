import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from '../../styles/Redirect.module.css';

export default function RedirectPage() {
  return (
    <div className={styles.container}>
      <span className={styles.redirectText}>Redirecting to login...</span>
      <CircularProgress
        sx={{
          color: '#AC3B61',
        }}
        size={100}
      />
    </div>
  );
}
