/* eslint-disable camelcase */
import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip, Stack, Typography, SvgIcon, Rating, Divider, Fade,
} from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';

import Difficulty from '../Chips/Difficulty';

export default function Marker({ trail }) {
  const {
    id, name, short_description, length, elevation, quadrant, ratings: {
      average, difficulty,
    },
  } = trail;

  const tooltipOrigin = () => {
    switch (quadrant) {
      case 1:
        return 'right-end';
      case 2:
        return 'left-end';
      case 3:
        return 'left-start';
      default:
        return 'right-start';
    }
  };

  return (
    <Tooltip
      TransitionComponent={Fade}
      title={(
        <Stack spacing={2}       margin={2}>
          <Link href={`/trails/${id}`}>
            <Typography variant="h5" style={{ cursor: 'pointer', fontSize: 24 }}>{name}</Typography>
          </Link>
          <Rating
            defaultValue={average}
            precision={0.25}
            readOnly
            sx={{
              color: 'F6CC66',
              fontSize: 24,
            }}
          />
          <Difficulty difficulty={difficulty} />
          <Stack
            direction="row"
            justifyContent="center"
            spacing={4}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Typography sx={{fontSize: 12}}>
              {`Length: ${length} mi`}
            </Typography>
            <Typography sx={{fontSize: 12}}>
              {`Elevation: ${elevation} ft`}
            </Typography>
          </Stack>
          <Typography sx={{ p: 1 }}>{short_description}</Typography>
        </Stack>
      )}
      placement={tooltipOrigin()}
    >
      <SvgIcon
        component={LocationOnIcon}
        inheritViewBox
      />
    </Tooltip>
  );
}

Marker.propTypes = {
  trail: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    elevation: PropTypes.string.isRequired,
    ratings: PropTypes.shape({
      average: PropTypes.number.isRequired,
      difficulty: PropTypes.number.isRequired,
    }).isRequired,
    quadrant: PropTypes.number,
  }).isRequired,
};
