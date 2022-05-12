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
    color: '#EDC7B7',
  },
  '& .MuiRating-iconEmpty': {
    color: 'white',
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
          borderRadius: '15px',
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: 'center',
            borderTop: '20px solid #AC3B61',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
          }}
        >
          <Stack
            direction="column"
          >
            <Typography
              onClick={() => console.log('yo')}
              sx={{
                fontSize: 30,
                fontWeight: 500,
                borderBottom: '5px solid #EDC7B7',
                ml: '3vh',
                mt: '3vh',
                fontFamily: 'inherit',
              }}
            >
              {name}
            </Typography>
            <Stack direction="row" sx={{ alignItems: 'center' }}>
              <Typography
                sx={{
                  fontSize: 24,
                  margin: 1,
                  ml: '3vh',
                }}
              >
                {`${length} miles`}
              </Typography>
              <StyledRating
                name="read-only"
                readOnly
                value={length / 2}
                size="large"
                precision={0.25}
                icon={<HikingIcon sx={{ marginTop: '30px', fontSize: '45px' }} />}
                emptyIcon={<HikingIcon sx={{ marginTop: '30px', fontSize: '45px' }} />}
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
                  marginRight: '20px',
                  marginTop: '15px',
                }}
              />
            </IconButton>
          </Stack>
        </Stack>
        <Typography
          sx={{
            fontSize: 16,
            margin: 1,
            width: '60%',
            wordWrap: 'break-word',
            ml: '3vh',
            mt: '30px',
            backgroundColor: '#EEE2DC',
            color: '#123C69',
            padding: '8px',
            fontWeight: '700',
            border: '3px solid #BAB2B5',
            borderRadius: '10px',
            fontFamily: 'inherit',
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