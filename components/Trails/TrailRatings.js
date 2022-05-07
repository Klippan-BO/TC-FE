/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import PropTypes from 'prop-types'

import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const sampleData = require('./sampleData');

function TrailRatings() {
  return (
    <Stack
      direction="column"
      sx={{
        border: 4,
        borderColor:
        'primary.main',
      }}
    >
      {/* Ratings */}
      <Rating
        defaultValue={sampleData.trail1.ratings.average}
        precision={0.1}
        readOnly
        sx={{
          color: 'gray',
          fontSize: 48,
        }}
      />

      {/* Meta */}
      <Stack
        direction="row"
        justifyContent="space-between"
        width="315"
        sx={{
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
          }}
        >
          Difficulty
        </Typography>
        <Rating
          defaultValue={sampleData.trail1.ratings.difficulty}
          precision={0.1}
          readOnly
          sx={{
            color: 'gray',
            fontSize: 30,
          }}
        />
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        width="315"
        sx={{
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
          }}
        >
          Nature
        </Typography>
        <Rating
          defaultValue={sampleData.trail1.ratings.nature}
          precision={0.1}
          readOnly
          sx={{
            color: 'gray',
            fontSize: 30,
          }}
        />
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        width="315"
        sx={{
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
          }}
        >
          Beauty
        </Typography>
        <Rating
          defaultValue={sampleData.trail1.ratings.beauty}
          size="small"
          precision={0.1}
          readOnly
          sx={{
            color: 'gray',
            fontSize: 30,
          }}
        />
      </Stack>

    </Stack>
  );
}

export default TrailRatings;
