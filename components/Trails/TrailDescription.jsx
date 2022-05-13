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
    color: '#fff',
  },
  '& .MuiRating-iconEmpty': {
    color: '#EDC7B7',
  },
});

function TrailDescription({
  name, description, trail, difficulty,
  length, lat, lng, id, elevation,
  setMiniMapChecked,
}) {
  const [eventModal, setEventModal] = useState(false);
  const miniMapRef = useRef();
  return (
    <>
      <Stack
        direction="column"
        sx={{
          width: '960x',
          backgroundColor: '#123C69',
          color: '#fff',
          borderRadius: '15px',
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: 'center',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            marginBottom: '1em',
          }}
        >
          <Stack
            direction="column"
            width="90%"
            maxWidth="1200px"
          >
            <Typography
              onClick={() => console.log('yo')}
              sx={{
                fontSize: 30,
                fontWeight: 500,
                borderBottom: '2px solid #EDC7B7',
                mt: '3vh',
                fontFamily: 'inherit',
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                mt: 1,
                mb: 3,
                wordWrap: 'break-word',
                color: '#fff',
                fontFamily: 'inherit',
              }}
            >
              {description}
            </Typography>
            <Stack
              direction="row"
              sx={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  mr: 2,
                }}
              >
                {`${length} miles`}
              </Typography>
              <StyledRating
                name="read-only"
                readOnly
                value={length}
                size="large"
                precision={0.25}
                icon={<HikingIcon sx={{ fontSize: '30px' }} />}
                emptyIcon={<HikingIcon sx={{ fontSize: '30px' }} />}
              />
              <IconButton
                sx={{
                  padding: 0,
                }}
                onClick={(e) => { e.preventDefault(); setEventModal(true); }}
              >
                <InsertInvitationIcon
                  sx={{
                    fontSize: '38px',
                    color: '#fff',
                    padding: 0,
                    mb: '-.5',
                  }}
                />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Accordion
          ref={miniMapRef}
          sx={{
            backgroundColor: '#123C69',
            width: '90%',
            maxWidth: '1200px',
          }}
        >
          <AccordionSummary
            expandIcon={<MapIcon sx={{ fontSize: '38px', color: '#fff' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              paddingTop: 1,
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
