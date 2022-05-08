/* eslint-disable @next/next/no-img-element */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const sample_data = require('./sampleData');

const backgroundStyle = {
  width: '100%',
  height: '60vh',
  objectFit: 'contain',
  position: 'absolute',
  top: 0,
  right: 0,
};

function TrailCarousel() {
  const [photos] = useState(sample_data.trail1.photos);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Box
      sx={{
        border: 4,
        borderColor: 'warning.light',
        borderRadius: '10px',
        position: 'relative',
      }}
    >
      <Button
        style={{
          color: 'white',
          position: 'absolute',
          right: 10,
          bottom: 0,
          zIndex: 2,
        }}
      >
        <ThumbUpIcon />
      </Button>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={10000}
        style={{
          position: 'relative',
          height: '60vh',
        }}
      >
        {photos.map((photo) => (
          <Carousel.Item>
            <img
              src={photo}
              alt={photo}
              style={{
                position: 'relative',
                width: '100%',
                height: '60vh',
                objectFit: 'cover',
                backgroundColor: 'yellow',
                filter: 'blur(8px)',
              }}
            />
            <img
              alt={photo}
              src={photo}
              role="presentation"
              // onClick={handleOpen}
              style={backgroundStyle}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
}

// TrailCarousel.propTypes = {};

export default TrailCarousel;
