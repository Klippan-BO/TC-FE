import React from 'react';
import PropTypes from 'prop-types';
import TrailAddRatings from './TrailAddRatings';

import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function TrailRatings({ ratings }) {
  return (
    <Stack
      direction="column"
      sx={{
        borderLeft: 2,
        borderColor: '#EEE2DC',
        backgroundColor: '#123C69',
        color: '#EEE2DC',
        padding: 3,
      }}
    >
      {/* Ratings */}
      <Rating
        defaultValue={ratings.average}
        precision={0.25}
        readOnly
        sx={{
          color: '#EEE2DC',
          fontSize: 48,
          margin: 1,
          justifyContent: 'center',
        }}
      />

      {/* Meta */}
      <Stack
        direction="row"
        justifyContent="space-between"
        width="315"
        sx={{
          gap: 1,
          marginLeft: 1,
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
          defaultValue={ratings.beauty}
          precision={0.25}
          readOnly
          sx={{
            color: '#EEE2DC',
            fontSize: 30,
            marginRight: 1,
          }}
        />
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        width="315"
        sx={{
          gap: 1,
          marginLeft: 1,
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
          defaultValue={ratings.nature}
          precision={0.25}
          readOnly
          sx={{
            color: '#EEE2DC',
            fontSize: 30,
            marginRight: 1,
          }}
        />
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        width="315"
        sx={{
          gap: 1,
          marginLeft: 1,
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
          defaultValue={ratings.difficulty}
          size="small"
          precision={0.25}
          readOnly
          sx={{
            color: '#EEE2DC',
            fontSize: 30,
            marginRight: 1,
            marginBottom: 2,
          }}
        />
      </Stack>
      <TrailAddRatings />
    </Stack>
  );
}

TrailRatings.propTypes = {
  ratings: PropTypes.objectOf(PropTypes.number),
};

export default TrailRatings;
