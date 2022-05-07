/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import PropTypes from 'prop-types'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import TrailRatings from './TrailRatings';
import TrailAddRatings from './TrailAddRatings';

const sampleData = require('./sampleData');

function TrailInfo() {
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
          {sampleData.trail1.name}
        </Typography>

        {/* Description */}
        <div>{sampleData.trail1.description}</div>
      </Stack>
      <Stack
        direction="column"
        sx={{
          border: 4,
          borderColor: 'primary.main',
        }}
      >
        <TrailRatings />
        <TrailAddRatings />
      </Stack>
    </Stack>
  );
}

export default TrailInfo;
