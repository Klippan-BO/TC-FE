/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import TrailCarousel from './TrailCarousel';
import TrailInfo from './TrailInfo';
import TrailComments from './TrailComments';

function TrailPage({ id }) {
  const [trail, setTrail] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:3000/api/trails?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setTrail(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!trail) return <p>No profile data</p>
  return (
    <div>
      <Head>
        <title>TC - Trail</title>
      </Head>
      <Container>
        <Stack
          direction="column"
          sx={{
            border: 0,
            borderColor: 'red',
            padding: 5,
            height: '100vh',
            width: '80vw',
            minWidth: '1000px',
          }}
        >
          <TrailCarousel photos={trail.photos} />
          <TrailInfo
            name={trail.name}
            description={trail.description}
            ratings={trail.ratings}
          />
          <TrailComments comments={trail.comments} />
        </Stack>
      </Container>
    </div>
  );
}

TrailPage.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TrailPage;
