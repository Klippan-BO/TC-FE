import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import style from '../../styles/user.module.css';

function StarRatings({ rating }) {
  return (
    <div className={style.starCont}>
      <Stack
        direction="column"
        >
        {/* Ratings */}
        <Rating
          defaultValue={rating.average}
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
              color:"#123c69"
            }}
          >
            Beauty
          </Typography>
          <Rating
            defaultValue={rating.beauty}
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
              color:"#123c69"
            }}
          >
            Nature
          </Typography>
          <Rating
            defaultValue={rating.nature}
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
              color:"#123c69"
            }}
          >
            Difficulty
          </Typography>
          <Rating
            defaultValue={rating.difficulty}
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
