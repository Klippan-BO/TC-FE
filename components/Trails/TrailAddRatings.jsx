/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function AddTrailRatings() {
  const [modal, setModal] = useState(false);

  const handleClick = (boolean) => {
    setModal(boolean);
  };

  return (
    <>
      <Button onClick={() => handleClick(true)}>Rate this trail</Button>
      <Modal
        open={modal}
        onClose={() => handleClick(false)}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            height: 500,
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
            {/* Overall Rating */}
            <Typography
              sx={{
                fontSize: 28,
              }}
            >
              How did you feel about this trail?
            </Typography>
            <Rating
              defaultValue={0}
              precision={1}
              sx={{
                color: 'gray',
                fontSize: 80,
              }}
            />

            {/* Meta */}
            <Stack
              direction="row"
              justifyContent="space-between"
              width="420"
              sx={{
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: 36,
                }}
              >
                Beauty
              </Typography>
              <Rating
                defaultValue={0}
                precision={1}
                sx={{
                  color: 'gray',
                  fontSize: 48,
                }}
              />
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              width="420"
              sx={{
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: 36,
                }}
              >
                Nature
              </Typography>
              <Rating
                defaultValue={0}
                precision={1}
                sx={{
                  color: 'gray',
                  fontSize: 48,
                }}
              />
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              width="420"
              sx={{
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: 36,
                }}
              >
                Difficulty
              </Typography>
              <Rating
                defaultValue={0}
                size="small"
                precision={1}
                sx={{
                  color: 'gray',
                  fontSize: 48,
                }}
              />
            </Stack>

            <input
              type="button"
              value="Submit"
              onClick={() => handleClick(false)}
            />
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

export default AddTrailRatings;
