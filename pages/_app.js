import React, { useState } from 'react';
import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css';
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className='page_container'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </AuthProvider>
  )
}

export default MyApp
