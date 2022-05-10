/* eslint-disable @next/next/no-img-element */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Stack from '@mui/material/Stack';
import StarRateIcon from '@mui/icons-material/StarRate';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const sample_data = require('./sampleData');

const backgroundStyle = {
  width: '100%',
  height: '60vh',
  objectFit: 'contain',
  position: 'absolute',
  top: 0,
  right: 0,
};
const iconStyles = {
  fontSize: '48px',
  color: 'primary.light',
};
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: 1,
  border: 'none',
};

const modalPictureStyle = {
  width: '80vw',
  height: '80vh',
  objectFit: 'contain',

};

function TrailCarousel() {
  const [photos] = useState(sample_data.trail1.photos);
  const [index, setIndex] = useState(0);
  const [interval, setInterval] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const handleInterval = () => {
    setInterval((prev) => !prev);
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
      <Stack
        direction="row"
        sx={{
          columnGap: '1px',
          color: 'white',
          position: 'absolute',
          right: 40,
          bottom: 0,
          zIndex: 2,
          fontSize: '60px',
        }}
      >
        <Button>
          <BorderAllIcon
            sx={iconStyles}
          />
        </Button>
        <Button>
          <AddAPhotoIcon
            sx={iconStyles}
          />
        </Button>
        <Button>
          <ThumbUpIcon
            sx={iconStyles}
          />
        </Button>
        <Button
          onClick={handleInterval}
        >
          {interval
            ? (
              <PauseIcon
                sx={iconStyles}
              />
            )
            : (
              <PlayArrowIcon
                sx={iconStyles}
              />
            )}
        </Button>
      </Stack>
      <Button
        style={{
          position: 'absolute',
          right: 10,
          top: 0,
          zIndex: 2,
        }}
      >
        <StarRateIcon
          sx={{
            fontSize: '60px',
            color: 'yellow',
          }}
        />
      </Button>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={interval ? 5000 : null}
        style={{
          position: 'relative',
          height: '60vh',
        }}
      >
        {photos.map((photo, i) => {
          if (i < 5) {
            return (
              <Carousel.Item key={photo}>
                <img
                  role="presentation"
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
                  onClick={handleOpen}
                  alt={photo}
                  src={photo}
                  role="presentation"
                  // onClick={handleOpen}
                  style={backgroundStyle}
                />
                <Modal
                  open={open}
                  onClose={handleClose}
                  sx={{
                  }}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={modalStyle}>
                    <img
                      onClick={handleClose}
                      alt={photo}
                      role="presentation"
                      src={photos[index]}
                      style={modalPictureStyle}
                    />
                  </Box>
                </Modal>
              </Carousel.Item>
            );
          } return null;
        })}
      </Carousel>

    </Box>
  );
}

// TrailCarousel.propTypes = {};

export default TrailCarousel;
