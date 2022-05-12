import React, { useEffect, useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import HikingIcon from '@mui/icons-material/Hiking';
import MapIcon from '@mui/icons-material/Map';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TrailAddEvent from './TrailAddEvent';
import MiniMap from '../maps/MiniMap';

// import { createEvent } from './createEvent';
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

function TrailDescription({
  name, description, trail, difficulty,
  length, lat, lng, id, elevation,
  setMiniMapChecked,
}) {
  const [eventModal, setEventModal] = useState(false);
  const miniMapRef = useRef();
  const scrollIntoView = () => {
    miniMapRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Stack
        direction="column"
        sx={{
          width: '960x',
          backgroundColor: '#123C69',
          color: '#EEE2DC',
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Stack
            direction="column"
          >
            <Typography
              onClick={() => console.log('yo')}
              sx={{
                fontSize: 30,
                margin: 1,
              }}
            >
              {name}
            </Typography>
            <Stack direction="row" sx={{ alignItems: 'center' }}>
              <Typography
                sx={{
                  fontSize: 24,
                  margin: 1,
                }}
              >
                {`${length} miles`}
              </Typography>
              <StyledRating
                name="read-only"
                readOnly
                value={length}
                size="large"
                max={Math.ceil(length)}
                precision={0.25}
                icon={<HikingIcon fontSize="inherit" sx={{ color: 'warning.main' }} />}
                emptyIcon={<HikingIcon fontSize="inherit" sx={{ color: 'yellow' }} />}
              />
            </Stack>
          </Stack>

          <Stack
            direction="row"
            sx={{ justifyContent: 'space-between'}}
          >
            <IconButton
              onClick={(e) => { e.preventDefault(); setEventModal(true); }}
            >
              <InsertInvitationIcon
                sx={{
                  fontSize: '48px',
                  color: 'primary.main',
                  background: '#EEE2DC',
                  borderRadius: '10px',
                }}
              />
            </IconButton>
          </Stack>
        </Stack>
        <Typography
          sx={{
            fontSize: 16,
            margin: 1,
          }}
        >
          {description}
        </Typography>
        <Accordion
          ref={miniMapRef}
          sx={{
            backgroundColor: '#123C69',
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
            <Typography sx={{ fontSize: '24px', color: '#EEE2DC' }}>Show Map</Typography>
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
      {/* <Zoom in={!eventModal}> */}
      <Modal
        open={eventModal}
        onClose={() => { setEventModal(false); }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TrailAddEvent
          setEventModal={setEventModal}
          name={name}
          lat={lat}
          lng={lng}
          description={description}
          elevation={elevation}
          id={id}
          trail={trail}
        />
      </Modal>
      {/* </Zoom> */}
    </>
  );
}

TrailDescription.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  elevation: PropTypes.string.isRequired,
  setMiniMapChecked: PropTypes.func.isRequired,
};

export default TrailDescription;