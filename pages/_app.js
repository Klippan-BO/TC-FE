import React, { useState } from 'react';
import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css';
import Layout from '../components/Layout';
import RouteGuard from '../components/RouteGuard';


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
        <RouteGuard>
        <div className='page_container'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </RouteGuard>
    </AuthProvider>
  )
}

export default MyApp
