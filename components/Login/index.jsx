import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/Login.module.css';

// import login component(s) here
import UserLogin from './UserLogin';
import UserSignup from './UserSignup';

function LoginPage() {
  // make this false for prod
  const [newUser, setNewUser] = useState(false);
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.loginContainer}>
        {
          newUser
            ? <UserSignup setNewUser={setNewUser} />
            : <UserLogin setNewUser={setNewUser} />
        }
      </div>
    </div>
  );
}

export default LoginPage;
