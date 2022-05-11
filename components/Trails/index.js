/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import TrailInfo from './TrailInfo';
import TrailComments from './TrailComments';
import TrailCarousel from './TrailCarousel';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import IconButton from '@mui/material/IconButton';

function TrailPage({ id }) {
  const [trail, setTrail] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/api/trails?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTrail(data);
        setLoading(false);
      });
  }, [id]);

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
            maxHeight: '100vh',
          }}
        >
          <TrailCarousel photos={trail.photos} />
          <TrailInfo
            name={trail.name}
            id={trail.id}
            length={trail.length}
            lat={trail.lat}
            lng={trail.lng}
            elevation={trail.elevation}
            google_url={trail.google_url}
            description={trail.description}
            ratings={trail.ratings}
            trail={trail}
          />
          <TrailComments comments={trail.comments} />
        </Stack>
      </Container>
    </div>
  );
}

TrailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TrailPage;
