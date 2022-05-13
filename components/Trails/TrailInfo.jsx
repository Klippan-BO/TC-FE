import React, { useEffect, useState, useRef } from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import TrailRatings from './TrailRatings';
import TrailDescription from './TrailDescription';

import MapIcon from '@mui/icons-material/Map';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import MiniMap from '../maps/MiniMap';


function TrailInfo({
  name, description,
  ratings, length,
  elevation, id,
  lat, lng, trail, setMiniMapChecked,
}) {

  const [eventModal, setEventModal] = useState(false);
  const miniMapRef = useRef();
  return (
    <Stack
    direction="column"
  >
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{mb:3}}
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
            backgroundColor: '#AC3B61',
            width: '100%',
            // maxWidth: '1200px',
          }}
        >

          <AccordionSummary
            expandIcon={<MapIcon sx={{ fontSize: '38px', color: '#fff' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              paddingTop: 0,
            }}
          >
            <Typography sx={{
              fontSize: '24px',
              color: '#fff',
              fontFamily: 'inherit',
            }}
            >
              Show Map
            </Typography>

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
