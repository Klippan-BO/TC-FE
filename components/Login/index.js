import React from 'react';
import Head from 'next/head';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import styles from '../../styles/Login.module.css'

//import login component(s) here
import UserLogin from './UserLogin';


function LoginPage() {
  return(
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.loginContainer}>
        <UserLogin />
      </div>
    </div>
  )
};


export default LoginPage;