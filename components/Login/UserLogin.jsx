import React from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import styles from '../../styles/Login.module.css';
import { useAuth } from '../../context/AuthContext';

export default function UserLogin({ setNewUser }) {
  const router = useRouter();
  const { signInUser, setCurrentUser } = useAuth();

  // switch newUser to true in here on failed post

  async function handleLogin() {
    // sign in through Google Auth
    const user = await signInUser();
    console.log(user);
      // .then((result) => {
      //   // pull email and photoUrl from the Google result
      //   const { user } = result;
      //   setCurrentUser({
      //     email: user.email,
      //     photo: user.photoURL,
      //   });

      //   try {
      //     const response = await fetch()

      //   // construct return url - default to /map
      //   const returnUrl = router.query.returnUrl || '/map';
      //   router.push(returnUrl);
      // })
      // .catch((err) => console.log('error signing in with Google auth: ', err));
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
        <span className={styles.buttonText}>Login</span>
      </Button>
    </div>
  );
}
