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
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});
const labels = {
  0.5: 'Lazy Hill',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Everest',
};

function TrailDescription({
  name, description, trail,
  length, lat, lng, id, elevation,
}) {
  const [eventModal, setEventModal] = useState(false);
  // const handleClick = () => {

  // };

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
          <Typography
            onClick={() => console.log('yo')}
            sx={{
              fontSize: 30,
              margin: 1,
            }}
          >
            {name}
          </Typography>
          <StyledRating
            name="read-only"
            readOnly
            value={length}
            size="large"
            precision={0.25}
            icon={<HikingIcon fontSize="inherit" sx={{ color: 'warning.main' }} />}
            emptyIcon={<HikingIcon fontSize="inherit" sx={{ color: 'yellow' }} />}
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