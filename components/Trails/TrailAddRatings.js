/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
// import PropTypes from 'prop-types'

import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function AddTrailRatings() {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  }

  const handleClose = () => {
    setOpened(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Rate this trail</Button>
      <Modal
        open={opened}
        onClose={handleClose}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 280,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
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
              defaultValue={0}
              precision={1}
              sx={{
                color: 'gray',
                fontSize: 40,
              }}
            />

            {/* Meta */}
            <Stack
              direction="row"
              justifyContent="space-between"
              width="196px"
              sx={{
                gap: 1,
              }}
            >
              Difficulty

              <Rating
                defaultValue={0}
                precision={1}
                sx={{
                  color: 'gray',
                  fontSize: 24,
                }}
              />
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              width="196px"
              sx={{
                gap: 1,
              }}
            >
              Nature
              <Rating
                defaultValue={0}
                precision={1}
                sx={{
                  color: 'gray',
                  fontSize: 24,
                }}
              />
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              width="196px"
              sx={{
                gap: 1,
              }}
            >
              Beauty
              <Rating
                defaultValue={0}
                size="small"
                precision={1}
                sx={{
                  color: 'gray',
                  fontSize: 24,
                }}
              />
            </Stack>

            <input
              type="button"
              value="Submit"
              onClick={handleClose}
            />
          </Stack>
        </Box>
      </Modal>
    </>
  )
}

export default AddTrailRatings;
