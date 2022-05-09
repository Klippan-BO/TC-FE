import React from 'react';
import Head from 'next/head';

import MainMap from '../components/maps/MainMap';

function map() {
  return (
    <div>
      <Head>
        <title>TC - Map</title>
      </Head>
      <MainMap />
    </div>
  );
}

export default map;
