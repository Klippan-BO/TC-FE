/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { AuthProvider } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Layout from '../components/Layout';
import RouteGuard from '../components/RouteGuard';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <AuthProvider>
      <RouteGuard>
        <div className="page_container">
          <Layout>
            <Component {...pageProps} key={router.asPath} />
          </Layout>
        </div>
      </RouteGuard>
    </AuthProvider>
  );
}

export default MyApp;
