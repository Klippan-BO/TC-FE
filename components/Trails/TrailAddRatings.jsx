import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ParkIcon from '@mui/icons-material/Park';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LandscapeIcon from '@mui/icons-material/Landscape';

function AddTrailRatings() {
  const [modal, setModal] = useState(false);

  const handleClick = (boolean) => {
    setModal(boolean);
  };


  return (
    <>
      <Button
        variant="contained"
        sx={{
          color: 'white',
        }}
        onClick={() => handleClick(true)}
      >
        Rate this trail
      </Button>
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
            height: 410,
            bgcolor: '#123C68 ',
            borderTop: '15px solid #AC3A60',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Stack
            direction="column"
          >
            {/* Overall Rating */}
            <Typography
              sx={{
                fontSize: 25,
                color: '#FFFFFF',
              }}
            >
              How did you feel about this trail?
            </Typography>
            <Rating
              defaultValue={0}
              precision={1}
              sx={{
                justifyContent: 'center',
                color: '#F6CC66',
                fontSize: 64,
                marginBottom: 1,
              }}
            />

            {/* Meta */}
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  margin: 2,
                  color: '#FFFFFF',
                }}
              >
                Beauty
              </Typography>
              <Rating
                defaultValue={0}
                precision={1}
                icon={<ParkIcon fontSize="inherit" />}
                emptyIcon={<ParkIcon fontSize="inherit" />}
                sx={{
                  color: '#97C1A9',
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
                  fontSize: 16,
                  margin: 2,
                  color: '#FFFFFF',
                }}
              >
                Sunlight
              </Typography>
              <Rating
                defaultValue={0}
                precision={1}
                icon={<WbSunnyIcon fontSize="inherit" />}
                emptyIcon={<WbSunnyIcon fontSize="inherit" />}
                sx={{
                  color: '#FFFFB5',
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
                marginBottom: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  margin: 2,
                  color: '#FFFFFF',
                }}
              >
                Difficulty
              </Typography>
              <Rating
                defaultValue={0}
                size="small"
                precision={1}
                icon={<LandscapeIcon fontSize="inherit" />}
                emptyIcon={<LandscapeIcon fontSize="inherit" />}
                sx={{
                  color: '#FFC7A2',
                  fontSize: 48,
                }}
              />
            </Stack>

            <Button
              variant="contained"
              onClick={() => handleClick(false)}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

export default AddTrailRatings;
