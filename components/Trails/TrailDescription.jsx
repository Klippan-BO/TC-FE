import React, { useEffect, useState } from 'react';
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
import TrailAddEvent from './TrailAddEvent';
// import { createEvent } from './createEvent';

const labels = {
  0.5: 'The DriveWay Incline',
  1: 'a steeper driveway?',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Matterhorn',
  3.5: 'Fuji',
  4: 'K2',
  4.5: 'Mount Kilimanjaro',
  5: 'Everest',
};

function TrailDescription({
  name, description, trail,
  length, lat, lng, id, elevation,
}) {
  const [eventModal, setEventModal] = useState(false);
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#EDC7B7',
    },
    '& .MuiRating-iconEmpty': {
      color: 'white',
    },
  });

  return (
    <>
      <Stack
        direction="column"
        sx={{
          width: '960x',
          backgroundColor: '#123C69',
          color: '#EEE2DC',
          borderBottomLeftRadius: '15px',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
          borderBottomRightRadius: '15px',

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
          <Typography
            onClick={() => console.log('yo')}
            sx={{
              fontSize: 30,
              fontWeight: 500,
              borderBottom: '5px solid #EEE2DC',
              ml: '3vh',
              mt: '3vh',
              fontFamily: 'inherit',
            }}
          >
            {name}
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
          <Typography sx={{ ml: 2, fontSize: 24 }}>{labels[length]}</Typography>
          <IconButton
            onClick={() => setEventModal(true)}
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
      </Stack>
      <Modal
        open={eventModal}
        onClose={() => { setEventModal(false); }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TrailAddEvent
          name={name}
          lat={lat}
          lng={lng}
          description={description}
          elevation={elevation}
          id={id}
          trail={trail}
        />
      </Modal>
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
};

export default TrailDescription;