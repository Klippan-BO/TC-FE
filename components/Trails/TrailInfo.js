/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import TrailRatings from './TrailRatings';
import TrailAddRatings from './TrailAddRatings';

function TrailInfo({ trail }) {
  return (
    <Stack
      direction="row"
      sx={{
        border: 4,
        borderColor: 'primary.main',
      }}
    >
      <Stack
        direction="column"
        sx={{
          width: '700px',
          border: 4,
          borderColor: 'primary.main',
        }}
      >
        {/* Name of Trail */}
        <Typography
          sx={{
            fontSize: 48,
          }}
        >
          {trail.name}
        </Typography>

        {/* Description */}
        <div>{trail.description}</div>
      </Stack>
      <Stack
        direction="column"
        sx={{
          border: 4,
          borderColor: 'primary.main',
        }}
      >
        <TrailRatings ratings={trail.ratings}/>
        <TrailAddRatings />
      </Stack>
    </Stack>
  );
}

TrailInfo.propTypes = {
  trail: PropTypes.string.isRequired,
};

export default TrailInfo;
