import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Login.module.css';
import Button from '@mui/material/Button';
import UserInfoContext from '../../context/userInfoContext';
import {
  auth,
  provider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from '../../firebase';

function handleSignIn() {
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    GoogleAuthProvider.sign
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    console.log(`User ${user} has signed in with token ${token}.`);
    console.log('Redirect to maps page next')
  })
  .catch((err) => {
    const { code, message } = err;
    console.log(`Error signing in occurred with code: ${code} and message: ${message}`);
  });
}

function handleSignOut() {
  signOut(auth)
  .then(() => {
    console.log('signed out');
  })
  .catch((err) => {
    console.log('Error occurred signing out: ', err);
  });
}


export default function UserLogin() {
  return (
    <div className={styles.loginCard}>
      <div>
        <h1>Trail Companions</h1>
        <p>Company mission statement</p>
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
          }
        }}
        onClick={handleSignIn}
      >
        Login
      </Button>
    </div>
  )
}
