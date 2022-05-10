/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Head from 'next/head';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TrailInfo from './TrailInfo';
import TrailComments from './TrailComments';
import TrailCarousel from './TrailCarousel';

// const { gisLoaded, gapiLoaded } = require('./createEvent');

const sampleData = require('./sampleData');

function TrailPage() {
  // console.log(gisLoaded);
  return (
    <div>
      <Head>
        <title>TC - Trail</title>
        <script src="https://apis.google.com/js/api.js" type="text/javascript"/>
        {/* <script
          async
          defer
          src="https://apis.google.com/js/api.js"
          onLoad={gapiLoaded}
        />
        <script
          async
          defer
          src="https://accounts.google.com/gsi/client"
          onLoad={gisLoaded} */}
      </Head>
      <Container
        sx={{
          minWidth: '83vw',
          backgroundColor: '#123C69',
        }}
      >
        <Stack
          direction="column"
          sx={{
            rowGap: '10px',
            border: 0,
            borderColor: 'red',
          }}
        >
          <TrailCarousel />
          <TrailInfo trail={sampleData.trail1} />
          <TrailComments trail={sampleData.trail1} />
        </Stack>
      </Container>
    </div>
  );
}

export default TrailPage;
