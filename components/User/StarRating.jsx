import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ParkIcon from '@mui/icons-material/Park';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LandscapeIcon from '@mui/icons-material/Landscape';
import style from '../../styles/user.module.css';

function StarRatings({ rating }) {
  return (
    <div className={style.starCont}>
      <Stack
        direction="column"
        sx={{
          color: '#fff',

        }}
        justifyContent="flex-start"
      >
        <Rating
          defaultValue={rating.average}
          precision={0.25}
          readOnly
          sx={{
            color: '#F6CC66',
            fontSize: 20,
            mb: 1,
            justifyContent: 'center',
          }}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          width="150"
          sx={{
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: 15,
              color: '#123c69',
            }}
          >
            Beauty
          </Typography>
          <Rating
            defaultValue={rating.beauty}
            precision={0.25}
            readOnly
            icon={<ParkIcon fontSize="inherit" />}
            emptyIcon={<ParkIcon fontSize="inherit" sx={{ color: '#eee2dc', stroke: '#123c69', strokeWidth: 1 }} />}
            sx={{
              color: '#97C1A9',
              fontSize: 15,
            }}
          />
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          width="200"
          sx={{
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: 15,
              color: '#123c69',
            }}
          >
            Sunlight
          </Typography>
          <Rating
            defaultValue={rating.nature}
            precision={0.25}
            readOnly
            icon={<WbSunnyIcon fontSize="inherit" />}
            emptyIcon={<WbSunnyIcon fontSize="inherit" sx={{ color: '#eee2dc', stroke: '#123c69', strokeWidth: 1 }} />}
            sx={{
              color: '#FFFFB5',
              fontSize: 15,
            }}
          />
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          width="200"
          sx={{
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: 15,
              color: '#123c69',
            }}
          >
            Difficulty
          </Typography>
          <Rating
            defaultValue={rating.difficulty}
            size="small"
            precision={0.25}
            readOnly
            icon={<LandscapeIcon fontSize="inherit" />}
            emptyIcon={<LandscapeIcon fontSize="inherit" sx={{ color: '#eee2dc', stroke: '#123c69', strokeWidth: 1 }} />}
            sx={{
              color: '#FFC7A2',
              fontSize: 15,
            }}
          />
        </Stack>

      </Stack>
    </div>
  );
}

StarRatings.propTypes = {
  rating: PropTypes.objectOf(
    PropTypes.shape({ difficulty: PropTypes.number.isRequired }),
  ).isRequired,
};

export default StarRatings;
