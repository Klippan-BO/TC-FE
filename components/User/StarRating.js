import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import style from '../../styles/user.module.css';

function StarRatings({ ratings }) {
  return (
    <div className={style.starCont}>
      <Stack
        direction="column"
        >
        {/* Ratings */}
        <Rating
          defaultValue={ratings.average}
          precision={0.25}
          readOnly
          sx={{
            color: 'gray',
            fontSize: 20,
          }}
        />

        {/* Meta */}
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
            }}
          >
            Beauty
          </Typography>
          <Rating
            defaultValue={ratings.beauty}
            precision={0.25}
            readOnly
            sx={{
              color: 'gray',
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
            }}
          >
            Nature
          </Typography>
          <Rating
            defaultValue={ratings.nature}
            precision={0.25}
            readOnly
            sx={{
              color: 'gray',
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
            }}
          >
            Difficulty
          </Typography>
          <Rating
            defaultValue={ratings.difficulty}
            size="small"
            precision={0.25}
            readOnly
            sx={{
              color: 'gray',
              fontSize: 15,
            }}
          />
        </Stack>

      </Stack>
    </div>
  );
}

StarRatings.propTypes = {
  ratings: PropTypes.objectOf(PropTypes.number),
};

export default StarRatings;
