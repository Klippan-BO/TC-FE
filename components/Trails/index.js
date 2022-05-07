/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Head from 'next/head';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TrailCarousel from './TrailCarousel';
import TrailInfo from './TrailInfo';
import TrailComments from './TrailComments';

const sampleData = require('./sampleData');

function TrailPage() {
  return (
    <div>
      <Head>
        <title>TC - Trail</title>
      </Head>
      <Container>
        <Stack
          direction="column"
          sx={{
            border: 4,
            borderColor: 'red',
            padding: 5,
            height: '100vh',
            width: '8vw',
            minWidth: '1000px',
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
