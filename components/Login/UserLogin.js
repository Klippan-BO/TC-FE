import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/Login.module.css';
import Button from '@mui/material/Button';
import {
  auth,
  provider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';


export default function UserLogin() {
  const [signedIn, setSignedIn] = useState(false);
  const router = useRouter();
  const { signInUser, signOutUser, currentUser, setCurrentUser } = useAuth();

  function handleLogin() {
    signInUser(auth, provider)
    .then((result) => {
      const user = result.user;
      setCurrentUser({
        displayName: user.displayName,
        email: user.email,
      });
      const returnUrl = router.query.returnUrl || '/map';
      router.push(returnUrl);
    })
    .catch((err) => console.log('error signing in: ', err));
  }

  // just for development purposes
  function handleSignOut() {
    signOutUser(auth);
  }


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
        onClick={handleLogin}
      >
        Login
      </Button>
      {/* just for development purposes */}
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
        onClick={handleSignOut}
      >
        Dev sign out
      </Button>
    </div>
  )
}
