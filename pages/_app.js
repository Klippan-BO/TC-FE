/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Head from 'next/head';
import { AuthProvider } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Layout from '../components/Layout';
import RouteGuard from '../components/RouteGuard';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <AuthProvider>
        <RouteGuard>
        <div className='page_container'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
        </RouteGuard>
      </AuthProvider>
    </>
  );
}

export default MyApp;
