import React from 'react';
import Head from 'next/head';

import MainMap from '../components/maps/MainMap';

function map() {
  return (
    <div>
      <Head>
        <title>TC - Map</title>
      </Head>
      <h1>
        <MainMap />
      </h1>
    </div>
  );
}

export default map;
