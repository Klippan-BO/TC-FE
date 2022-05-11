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
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ userDetails }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      // store the id of the user
      const { id } = data;
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
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="bio"
          label="Bio"
          multiline
          rows={4}
          variant="filled"
          value={bio}
          required
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
