/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import Grow from '@mui/material/Grow';
import MiniMap from '../maps/MiniMap';

import TrailComments from './TrailComments';
import TrailCarousel from './TrailCarousel';
import TrailInfo from './TrailInfo';

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

function TrailPage({ id }) {
  const [trail, setTrail] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [miniMapChecked, setMiniMapChecked] = useState(false);

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
          mt: 2,
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
          <TrailCarousel photos={trail.photos} id={trail.id} />
          {/* <Box sx={{ height: (() => miniMapChecked ? '100px' : '0px' ) }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', }}>
              <Grow
                in={miniMapChecked}
                style={{ transformOrigin: '0 0 0' }}
                {...(miniMapChecked ? { timeout: 1000 } : {})}
              >
                <MiniMap
                  lat={Number(trail.lat)}
                  lng={Number(trail.lng)}
                  zoom={12}
                  height={'100px'}
                  width={'100%'}
                />
              </Grow>
            </Box>
          </Box> */}
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
