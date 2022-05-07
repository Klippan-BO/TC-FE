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

// function handleSignIn() {
//   signInWithPopup(auth, provider)
//   .then((result) => {
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     GoogleAuthProvider.sign
//     const token = credential.accessToken;
//     const user = result.user;
//     console.log(user);
//     console.log(`User ${user} has signed in with token ${token}.`);
//     console.log('Redirect to maps page next');
//     //post required
//   })
//   .catch((err) => {
//     const { code, message } = err;
//     console.log(`Error signing in occurred with code: ${code} and message: ${message}`);
//   });
// }


export default function UserLogin() {
  const [signedIn, setSignedIn] = useState(false);
  const router = useRouter();
  const { signInUser, signOutUser, currentUser, setCurrentUser } = useAuth();

  function handleLogin() {
    signInUser(auth, provider)
    .then((user) => {
      setCurrentUser({
        displayName: user.user.displayName,
        email: user.user.email,
      });
      console.log('current user is: ', currentUser);
      const returnUrl = router.query.returnUrl || '/map';
      router.push(returnUrl);
    })
    .catch((err) => console.log('error signing in: ', err));
  }

  // just for development purposes
  function handleSignOut() {
    signOutUser(auth);
  }

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log(user, ' is signed in.');
  //     setSignedIn(true);
  //     console.log(signedIn);
  //   } else {
  //     setSignedIn(false);
  //     console.log('Not signed in.');
  //   }
  // })

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
