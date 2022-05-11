import React from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import styles from '../../styles/Login.module.css';
import { useAuth } from '../../context/AuthContext';

export default function UserLogin({ setNewUser }) {
  const router = useRouter();
  const { signInUser, setCurrentUser, currentUser } = useAuth();

  async function handleLogin() {
    // sign in through Google Auth and store user result
    const user = await signInUser();
    const { photoURL, email } = user;

    try {
      // POST to server to check if user exists
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();

        const { id } = data;
        setCurrentUser({
          ...currentUser,
          id,
          photo: photoURL,
          email,
        });

        // construct return url to redirect user after login
        const returnUrl = router.query.returnUrl || '/map';
        router.push(returnUrl);
      } else {
        // hit here when the user does not exist in the db
        setCurrentUser({
          ...currentUser,
          photo: photoURL,
          email,
        });

        // flip newUser to true
        setNewUser((prevState) => !prevState);
      }
    } catch (error) {
      console.log('Error posting to db in login: ', error);
    }
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
