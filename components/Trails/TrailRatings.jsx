import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TrailAddRatings from './TrailAddRatings';
import ParkIcon from '@mui/icons-material/Park';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LandscapeIcon from '@mui/icons-material/Landscape';

function TrailRatings({ ratings, id, trail }) {
//console.log("trails props",ratings)
  return (
    <Stack
      direction="column"
      sx={{
        borderLeft: 2,
        borderColor: '#EEE2DC',
        backgroundColor: '#123C69',
        color: '#EEE2DC',
        padding: 3,
        borderRadius: '15px',
      }}
    >
      {/* Ratings */}
      <Rating
        defaultValue={ratings.average}
        precision={0.25}
        readOnly
        sx={{
          color: '#F6CC66',
          fontSize: 48,
          margin: 1,
          justifyContent: 'center',
        }}
      />

      {/* Meta */}
      <Stack
        direction="row"
        justifyContent="space-between"
        width="315"
        sx={{
          gap: 1,
          marginLeft: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
          }}
        >
          Beauty
        </Typography>
        <Rating
          defaultValue={ratings.beauty}
          precision={0.25}
          readOnly
          icon={<ParkIcon fontSize="inherit" />}
          emptyIcon={<ParkIcon fontSize="inherit" />}
          sx={{
            color: '#97C1A9',
            fontSize: 30,
            marginRight: 1,
          }}
        />
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        width="315"
        sx={{
          gap: 1,
          marginLeft: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
          }}
        >
          Sunlight
        </Typography>
        <Rating
          defaultValue={ratings.nature}
          precision={0.25}
          readOnly
          icon={<WbSunnyIcon fontSize="inherit" />}
          emptyIcon={<WbSunnyIcon fontSize="inherit" />}
          sx={{
            color: '#FFFFB5',
            fontSize: 30,
            marginRight: 1,
          }}
        />
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        width="315"
        sx={{
          gap: 1,
          marginLeft: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
          }}
        >
          Difficulty
        </Typography>
        <Rating
          defaultValue={ratings.difficulty}
          size="small"
          precision={0.25}
          readOnly
          icon={<LandscapeIcon fontSize="inherit" />}
          emptyIcon={<LandscapeIcon fontSize="inherit" />}
          sx={{
            color: '#FFC7A2',
            fontSize: 30,
            marginRight: 1,
            marginBottom: 2,
          }}
        />
      </Stack>
      <TrailAddRatings id={id} trail={trail} />
    </Stack>
  );
}

TrailRatings.propTypes = {
  ratings: PropTypes.objectOf(PropTypes.number),
};

export default TrailRatings;
