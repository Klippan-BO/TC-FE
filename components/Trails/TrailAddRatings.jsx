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

function AddTrailRatings({ trail, id }) {
  const [modal, setModal] = useState(false);
  const [ratings, setRatings] = useState({
    user_id: id,
    trail_id: trail.id,
    stars: null,
    beauty: null,
    nature: null,
    difficulty: null,
  });


  const addRatings = (ratings) => {
    fetch('/api/rate', {
      method: 'POST',
      body: JSON.stringify(ratings),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };


  const handleClick = (boolean) => {
    setModal(boolean);
  };

  const handleSubmit = (boolean) => {
    console.log(ratings)
    setModal(boolean);
    addRatings(ratings);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{
          color: 'white',
          backgroundColor: '#AC3B61',
          ':hover': {
            backgroundColor: '#8D3150',
          },
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
            height: 390,
            bgcolor: '#123C68',
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
              onChange={(event, newValue)=>{ratings.stars = newValue}}
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
                onChange={(event, newValue)=>{ratings.beauty = newValue}}
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
                onChange={(event, newValue)=>{ratings.nature = newValue}}
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
                onChange={(event, newValue)=>{ratings.difficulty = newValue}}
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
              onClick={() => handleSubmit(false)}
              sx={{
                backgroundColor: '#AC3B61',
                ':hover': {
                  backgroundColor: '#8D3150',
                },
              }}
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
