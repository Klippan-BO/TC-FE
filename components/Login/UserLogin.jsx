import React from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import styles from '../../styles/Login.module.css';
import { useAuth } from '../../context/AuthContext';

export default function UserLogin({ setNewUser }) {
  const router = useRouter();
  const { signInUser, setCurrentUser, currentUser } = useAuth();

  // switch newUser to true in here on failed post
  async function handleLogin() {
    // sign in through Google Auth and store user result
    const user = await signInUser();
    const { photoURL, email } = user;

    try {
      // POST to server to check if user exists
      const response = await fetch(
        'http://localhost:3005/users/login',
        {
          body: email,
          method: 'POST',
        },
      );

      const { id } = response;
      setCurrentUser({
        ...currentUser,
        id,
        photo: photoURL,
        email,
      });

      console.log('Existing user found');

      // construct return url to redirect user after login
      const returnUrl = router.query.returnUrl || '/map';
      router.push(returnUrl);
    } catch (error) {
      // hit here when the user does not exist in the db
      console.log('New user found');
      setCurrentUser({
        ...currentUser,
        photo: photoURL,
        email,
      });

      // flip newUser to true
      setNewUser((prevState) => !prevState);
    }

    // .then((result) => {
    //   // pull email and photoUrl from the Google result
    //   const { user } = result;
    //   setCurrentUser({
    //     email: user.email,
    //     photo: user.photoURL,
    //   });

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
