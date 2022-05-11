import React from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import TrailRatings from './TrailRatings';
import TrailDescription from './TrailDescription';

function TrailInfo({ name, description, ratings }) {
  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: '#EEE2DC',
        padding: 2,
        borderRadius: '10px',
      }}
    >
      <Stack
        direction="row"
        sx={{
          borderColor: 'black',
          justifyContent: 'space-between',
        }}
      >
        <TrailDescription name={name} description={description} />
        <TrailRatings ratings={ratings} />
      </Stack>
    </Stack>
  );
}

TrailInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TrailInfo;
