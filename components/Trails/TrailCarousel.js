/* eslint-disable camelcase */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

const sample_data = require('./sampleData');

function TrailCarousel() {
  return (
    <Stack direction="row" sx={{ border: 4, borderColor: 'primary.main', columnGap: 5 }}>
      {sample_data.trail1.photos.map((photo) => (
        <Image
          key={sample_data.trail1.photos.indexOf(photo)}
          width="128px"
          height="128px"
          src={photo}
          alt={`picture of ${photo}`}
        />
      ))}
    </Stack>
  );
}

// TrailCarousel.propTypes = {};

export default TrailCarousel;
