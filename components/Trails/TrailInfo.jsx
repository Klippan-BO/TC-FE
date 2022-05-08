import React from 'react';
import Stack from '@mui/material/Stack';

import PropTypes from 'prop-types';
import TrailRatings from './TrailRatings';
import TrailDescription from './TrailDescription';

function TrailInfo({ trail }) {
  return (
    <Stack
      direction="row"
      sx={{
        border: 1,
        borderColor: 'black',
        borderRadius: 1,
        marginTop: 1,
        marginBottom: 1,
      }}
    >
      <Stack
        direction="row"
        sx={{
          border: 0,
          borderColor: 'black',
          justifyContent: 'space-evenly',
        }}
      >
        <TrailDescription name={trail.name} description={trail.description} />
        <TrailRatings ratings={trail.ratings} />
      </Stack>
    </Stack>
  );
}

TrailInfo.propTypes = {
  trail: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default TrailInfo;
