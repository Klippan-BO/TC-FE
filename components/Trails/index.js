/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import TrailInfo from './TrailInfo';
import TrailComments from './TrailComments';
import TrailCarousel from './TrailCarousel';

function TrailPage({ id }) {
  const [trail, setTrail] = useState(null)
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log(id);
    fetch(`http://localhost:3000/api/trails?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTrail(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!trail) return <p>No profile data</p>;
  return (
    <div>
      <Head>
        <title>TC - Trail</title>
      </Head>
      <Container
        sx={{
          minWidth: '63vw',
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
