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
        border: 1,
        borderColor: 'black',
        borderRadius: 1,
        width: 960,
        marginTop: 1,
        marginBottom: 1,
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: '960px',
          border: 0,
          borderColor: 'black',
          justifyContent: 'space-evenly',
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
