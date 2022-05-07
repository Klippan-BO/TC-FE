import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import nextConfig from '../next.config'
import { Wrapper, Status } from '@googlemaps/react-wrapper';

function map() {

  return (
    <div>
      <Head>
        <title>TC - Map</title>
      </Head>
      <Wrapper apiKey={nextConfig.env.key}>
        <MapComponent />
      </Wrapper>
      <h1>
        map
      </h1>
    </div>
  )
}

export default map;
