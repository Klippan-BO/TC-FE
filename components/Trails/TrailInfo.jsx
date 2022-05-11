import React from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import TrailRatings from './TrailRatings';
import TrailDescription from './TrailDescription';

function TrailInfo({
  name, description,
  ratings, length,
  elevation, id,
  lat, lng, trail,
}) {
  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: '#EEE2DC',
        padding: 2,
        borderRadius: '8px',
      }}
    >
      <Stack
        direction="row"
        sx={{
          borderColor: 'black',
          justifyContent: 'space-between',
        }}
      >
        <TrailDescription
          name={name}
          description={description}
          length={length}
          elevation={elevation}
          id={id}
          lat={lat}
          lng={lng}
          trail={trail}
        />
        <TrailRatings ratings={ratings} />
      </Stack>
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
};

export default TrailInfo;
