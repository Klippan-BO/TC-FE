/* eslint-disable @next/next/no-img-element */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Stack from '@mui/material/Stack';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import axios from 'axios';
import Box from '@mui/material/Box';
import ImageGallery from './ImageGallery';
import { upvotePhoto, uploadPhoto } from './TrailPhotosController';
import { useAuth } from '../../context/AuthContext';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const backgroundStyle = {
  width: '100%',
  height: '60vh',
  objectFit: 'contain',
  position: 'absolute',
  top: 0,
  right: 0,
};
const iconStyles = {
  fontSize: '35px',
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

function TrailCarousel(props) {
  const { currentUser } = useAuth();
  const { photos, id } = props;
  // const [photos] = useState(sample_data.trail1.photos); // is this sorted by upvotes already?
  const [index, setIndex] = useState(0);
  const [interval, setInterval] = useState(false);
  const [open, setOpen] = useState(false);
  const [photoModal, setPhotoModal] = useState(false);
  const [imageSelected, setImageSelected] = useState('');
  const [imageGallery, setImageGallery] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const galleryOpen = () => setImageGallery(true);
  const galleryClose = () => setImageGallery(false);

  const handleSelect = (selectedIndex, e) => {
    // e.preventDefault();
    setIndex(selectedIndex);
  };
  const handleInterval = () => {
    setInterval((prev) => !prev);
  };

  const addPhoto = () => {
    setPhotoModal(true);
  };

  const handleUpvoteTest = () => {
    upvotePhoto(photos[index].id);
  };

  const uploadImage = () => {
    // console.log(files[0]);
    const formData = new FormData();
    formData.append('file', imageSelected);
    formData.append('upload_preset', 'cazizno0');
    // cazizno0
    axios.post('https://api.cloudinary.com/v1_1/dwjit4s8l/image/upload', formData)
      .then((result) => {
        const cloudPhoto = JSON.parse(result.request.response).url;
        const photoUpload = {
          trail_id: id,
          username: currentUser.displayName,
          url: cloudPhoto,
          thumb: cloudPhoto,
          user_id: currentUser.id,
        };
        uploadPhoto(photoUpload)
          .then(() => {
            setPhotoModal(false);
          })
          .catch(() => {
            console.log('nope');
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box
      sx={{
        borderRadius: '10px',
        position: 'relative',
      }}
    >
      <Stack
        direction="row"
        sx={{
          backgroundColor: '#EEE2DC',
          borderRadius: '5px',
          position: 'absolute',
          right: 7,
          bottom: 7,
          zIndex: 2,
          opacity: 0.6,
          '&:hover': {
            opacity: 1,
          },
          transition: 'opacity 200ms linear',
          fontSize: '60px',
        }}
      >
        <Button>
          <BorderAllIcon
            onClick={galleryOpen}
            sx={iconStyles}
          />
        </Button>
        <Button
          onClick={addPhoto}
        >
          <AddAPhotoIcon
            onClick={addPhoto}
            sx={iconStyles}
          />
        </Button>
        <Button
          onClick={handleUpvoteTest}
        >
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
          right: 7,
          top: 7,
          zIndex: 2,
        }}
      >
        <BookmarksIcon
          sx={{
            fontSize: '36px',
            color: '#EEE2DC',
            opacity: 0.6,
            '&:hover': {
              opacity: 1,
            },
            transition: 'opacity 0.4s linear',
          }}
        />
      </Button>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={interval ? 3000 : null}
        style={{
          position: 'relative',
          height: '50vh',
        }}
      >
        {photos.map((photo, i) => {
          if (i < 5) {
            return (
              <Carousel.Item key={photo.id}>
                <img
                  role="presentation"
                  src={photo.url}
                  alt={photo.id}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '50vh',
                    objectFit: 'cover',
                    filter: 'blur(8px)',
                    borderRadius: '10px',
                  }}
                />
                <img
                  onClick={handleOpen}
                  alt={photo.id}
                  src={photo.url}
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
                      src={photos[index].url}
                      style={modalPictureStyle}
                    />
                  </Box>
                </Modal>
              </Carousel.Item>
            );
          } return null;
        })}
      </Carousel>
      <Modal
        open={photoModal}
        onClose={() => { setPhotoModal(false); }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            type="file"
            onChange={((e) => { setImageSelected(e.target.files[0]); })}
          />
          <Button
            onClick={uploadImage}
          >
            submit photo
          </Button>
        </Box>
      </Modal>
      <Modal
        open={imageGallery}
        onClose={galleryClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          backgroundColor: '#0000007f ',
        }}
      >
        <ImageGallery photos={photos} />
      </Modal>
    </Box>
  );
}

TrailCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  id: PropTypes.number.isRequired,

};

export default TrailCarousel;
