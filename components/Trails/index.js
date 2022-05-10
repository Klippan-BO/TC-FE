/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Head from 'next/head';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TrailInfo from './TrailInfo';
import TrailComments from './TrailComments';
import TrailCarousel from './TrailCarousel';

const sampleData = require('./sampleData');

function TrailPage() {
  return (
    <div>
      <Head>
        <title>TC - Trail</title>
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
