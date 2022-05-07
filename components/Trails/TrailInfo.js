/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import PropTypes from 'prop-types'

import Stack from '@mui/material/Stack';

const sampleData = require('./sampleData');

function TrailInfo() {
  return (
    <>
      <Stack
        direction="column"
        sx={{
          border: 4,
          borderColor: 'primary.main',
        }}
      >
        {/* Name of Trail */}
        <div>{sampleData.trail1.name}</div>

        {/* Description */}
        <div>{sampleData.trail1.description}</div>
      </Stack>

      <Stack
        direction="column"
        sx={{
          border: 4,
          borderColor:
          'primary.main',
        }}
      >
        {/* Ratings */}
        <div>
          Average Rating:
          {sampleData.trail1.ratings.average}
        </div>

        {/* Meta */}
        <div>
          Difficulty:
          {sampleData.trail1.ratings.difficulty}
        </div>
        <div>
          Nature:
          {sampleData.trail1.ratings.nature}
        </div>
        <div>
          Beauty:
          {sampleData.trail1.ratings.beauty}
        </div>
      </Stack>
    </>
  );
}

TrailInfo.propTypes = {};

export default TrailInfo;
