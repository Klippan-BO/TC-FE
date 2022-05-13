/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import TrailComments from './TrailComments';
import TrailCarousel from './TrailCarousel';
import TrailInfo from './TrailInfo';
import LoadingScreen from '../../components/LoadingScreen';

function TrailPage({ id }) {
  const [trail, setTrail] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [miniMapChecked, setMiniMapChecked] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/api/trails?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setTrail(data);
          setLoading(false);
        }, 200);
      });
  }, [id]);

  if (isLoading) return <LoadingScreen />;
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
          mt: 2,
        }}
      >
        <Stack
          direction="column"
          sx={{
            rowGap: '20px',
            // height: '150vh',
            flex: 1,
          }}
        >
          <TrailCarousel
            photos={trail.photos}
            id={trail.id}
            setTrail={setTrail}
          />
          <TrailInfo
            setMiniMapChecked={setMiniMapChecked}
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
          <TrailComments comments={trail.comments} id={trail.id} />
        </Stack>
      </Container>
    </div>
  );
}

TrailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TrailPage;
