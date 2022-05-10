import React from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import styles from '../../styles/Login.module.css';
import { useAuth } from '../../context/AuthContext';

export default function UserLogin() {
  const router = useRouter();
  const { signInUser, setCurrentUser } = useAuth();

  function handleLogin() {
    signInUser()
      .then((result) => {
        const { user } = result;
        setCurrentUser({
          displayName: user.displayName,
          email: user.email,
        });
        const returnUrl = router.query.returnUrl || '/map';
        router.push(returnUrl);
      })
      .catch((err) => console.log('error signing in: ', err));
  }

  return (
    <div className={styles.loginCard}>
      <div>
        <h1>Trail Companions</h1>
        <p>Find your hiking community</p>
      </div>
      <Button
        variant="contained"
        sx={{
          width: '75%',
          color: '#EEE2DC',
          bgcolor: '#123C69',
          fontWeight: 'bold',
          borderRadius: 20,
          ':hover': {
            bgcolor: '#0A2452',
          },
        }}
        onClick={() => handleLogin()}
      >
        Login
      </Button>
    </div>
  );
}
