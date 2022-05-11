import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../../styles/Signup.module.css';
import { useAuth } from '../../context/AuthContext';

export default function UserSignup({ setNewUser }) {
  const { currentUser, setCurrentUser } = useAuth();
  const [bio, setBio] = useState('');
  const [username, setUsername] = useState('');
  const router = useRouter();

  const { photo, email } = currentUser;
  async function handleSignUp() {
    const userDetails = {
      photo,
      email,
      bio,
      username,
    };

    // post with userDetails
    try {
      const response = await fetch(
        'http://localhost:3005/users/signup',
        {
          body: userDetails,
          method: 'POST',
        },
      );

      // store the id of the user
      const { id } = response;
      setCurrentUser({
        ...currentUser,
        photo,
        email,
        bio,
        username,
        id,
      });

      const returnUrl = router.query.returnUrl || '/map';
      setNewUser((prevState) => !prevState);
      router.push(returnUrl);
    } catch (error) {
      console.log('Error signing up');
    }
  }

  return (
    <div className={styles.signupCard}>
      <div>
        <h1 className={styles.header}>Welcome!</h1>
        <p className={styles.subText}>We need a few more details to complete your profile:</p>
      </div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="username"
          label="Username"
          variant="filled"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="bio"
          label="Bio"
          multiline
          rows={4}
          variant="filled"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </Box>
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
        onClick={() => handleSignUp()}
      >
        <span>Sign Up</span>
      </Button>
    </div>
  );
}
