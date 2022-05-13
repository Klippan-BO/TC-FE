import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Button from '@mui/material/Button';
import { upvotePhoto } from './TrailPhotosController';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  maxWidth: '1000px',
  height: '80vh',
  overflowY: 'auto',
};

export default function ImageGallery(props) {
  const { photos } = props;
  const handleUpvote = (id) => {
    upvotePhoto(id);
  };
  return (
    <Box sx={style}>
      <Stack
        direction="column"
        sx={{
          alignContent: 'center',
          justifyContent: 'flex-start',
          alignItems: 'center',

        }}
      >
        {photos.map((photo) => (
          <Box
            sx={{
              alignItem: 'center',
              justifyContent: 'center',
              position: 'relative',
              margin: '5px',
            }}
            key={photo.id}
          >
            <img
              alt={photo.url}
              src={photo.url}
              width='900px'
              objectFit="contain"
            />
            <Button
              onClick={(e) => { e.preventDefault(); handleUpvote(photo.id); }}
              sx={{
                position: 'absolute',
                bottom: '20px',
                right: '10px',
                background: '#EEE2DC;',
                borderRadius: 10,
                padding: 1,
                margin: 0,
                opacity: 0.6,
                '&:hover': {
                  backgroundColor: '#EEE2DC',
                  opacity: 1,
                },
                transition: 'opacity 0.4s linear',
              }}
            >
              <ThumbUpIcon />
            </Button>
          </Box>
        ))}
      </Stack>
    </Box>
    // <Box sx={{
    //   overflowY: 'scroll',
    //   width: '80%',
    //   top: '10%',
    //   left: '50%',
    //   position: 'absolute',
    //   transform: 'translate(-50%)',
    //   padding: 2,
    // }}
    // >
    //   <ImageList variant="masonry" row={1} gap={0} col={1}>
    //     {photos.map((photo) => (
    //       <ImageListItem key={photo} sx={{ opacity: 1, gap: 0 }}>
    //         <img
    //           src={photo}
    //           srcSet={photo}
    //           alt={photo}
    //           loading="lazy"
    //         />
    //       </ImageListItem>
    //     ))}
    //   </ImageList>
    // </Box>
  )
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,
}
