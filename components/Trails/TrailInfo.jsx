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
        backgroundColor: '#EEE2DC',
        padding: 2,
        borderRadius: '10px',
      }}
    >
      <Stack
        direction="row"
        sx={{
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
