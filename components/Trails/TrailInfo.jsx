import React, { useState, useRef } from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import TrailRatings from './TrailRatings';
import TrailDescription from './TrailDescription';
import MiniMap from '../maps/MiniMap';
import MapIcon from '@mui/icons-material/Map';
import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

function TrailInfo({
  name, description,
  ratings, length,
  elevation, id,
  lat, lng, trail, setMiniMapChecked,
}) {

  const miniMapRef = useRef();
  const scrollIntoView = () => {
    miniMapRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: '#EEE2DC',
        padding: 2,
        borderRadius: '15px',
        gap: 2,
      }}
    >
      <Stack
        direction="row"
        sx={{
          borderColor: 'black',
          justifyContent: 'space-between',
          gap: '15px',
        }}
      >
        <TrailDescription
          name={name}
          description={description}
          length={length}
          difficulty={ratings.difficulty}
          elevation={elevation}
          id={id}
          lat={lat}
          lng={lng}
          trail={trail}
          setMiniMapChecked={setMiniMapChecked}
        />
        <TrailRatings ratings={ratings} id={id} trail={trail} />


      </Stack>
      <Accordion
          ref={miniMapRef}
          sx={{
            backgroundColor: '#123C69',
            borderRadius: 3,
          }}
        >
          <AccordionSummary
            onClick={scrollIntoView}
            expandIcon={<MapIcon sx={{ fontSize: '38px', color: '#EEE2DC' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              padding: 1,
            }}
          >
            <Typography sx={{ fontSize: '24px', color: '#EEE2DC', fontFamily: 'inherit', ml: '3vh' }}>Show Map</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MiniMap
              lat={Number(lat)}
              lng={Number(lng)}
              zoom={11}
              sx={{
                color: '#123C69',
              }}
              height="400px"
              width="100%"
            />
          </AccordionDetails>
        </Accordion>
    </Stack>
  );
}

TrailInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  elevation: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
  setMiniMapChecked: PropTypes.func.isRequired,
  ratings: PropTypes.shape({
    difficulty: PropTypes.number.isRequired,
  }).isRequired,
  trail: PropTypes.object.isRequired,
};

export default TrailInfo;
