import React from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function TrailRatings({ ratings }) {
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
        defaultValue={ratings.average}
        precision={0.25}
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
          Beauty
        </Typography>
        <Rating
          defaultValue={ratings.beauty}
          precision={0.25}
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
          defaultValue={ratings.nature}
          precision={0.25}
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
          Difficulty
        </Typography>
        <Rating
          defaultValue={ratings.difficulty}
          size="small"
          precision={0.25}
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

TrailRatings.propTypes = {
  ratings: PropTypes.objectOf(PropTypes.number),
};

export default TrailRatings;
