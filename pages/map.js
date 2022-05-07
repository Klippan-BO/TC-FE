import React from 'react';
import Head from 'next/head';
import { useAuth } from '../context/AuthContext';

function map() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div>
      <Head>
        <title>TC - Map</title>
      </Head>
      {currentUser && (
        <h1>
          {currentUser.displayName}
        </h1>
      )}
    </div>
  )
}

export default map