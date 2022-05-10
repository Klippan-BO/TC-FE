import React from 'react';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import sampleData from './sampleData';

function TrailCarousel({ photos }) {
  var photos = sampleData.trail1.photos;
  return (
    <Stack direction="row" sx={{ border: 4, borderColor: 'primary.main', columnGap: 5 }}>
      {photos.map((photo) => (
        <Image
          key={photos.indexOf(photo)}
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
