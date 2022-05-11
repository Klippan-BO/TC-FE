/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { AuthProvider } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Layout from '../components/Layout';
import RouteGuard from '../components/RouteGuard';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <AuthProvider>
      <RouteGuard>
      <div className='page_container'>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </div>
      </RouteGuard>
    </AuthProvider>
  );
}

export default MyApp;
