import React from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip, Stack, Typography, SvgIcon, Rating, Divider,
} from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';

import Difficulty from '../Chips/Difficulty';

export default function Marker({ trail }) {
  const {
    name, description, length, elevation, quadrant, ratings: {
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
      title={(
        <Stack spacing={2}>
          <Typography variant="h5">{name}</Typography>
          <Rating
            defaultValue={average}
            precision={0.25}
            readOnly
            sx={{
              color: 'white',
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
            <Typography>
              {`Length: ${length} mi`}
            </Typography>
            <Typography>
              {`Elev: ${elevation} ft`}
            </Typography>
          </Stack>
          <Typography sx={{ p: 1 }}>{description}</Typography>
        </Stack>
      )}
      placement={tooltipOrigin()}
    >
      <SvgIcon
        component={LocationOnIcon}
        // onMouseEnter={handleOpen}
        // onMouseLeave={handleClose}
        inheritViewBox
      />
      {/* <Popover
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin()}
        transformOrigin={transOrigin()}
        onClose={handleClose}
        disableRestoreFocus
      >
        <Stack sx={style} spacing={2}>
          <Typography variant="h5">{name}</Typography>
          <Rating
            defaultValue={average}
            precision={0.25}
            readOnly
            sx={{
              color: 'gray',
              fontSize: 24,
            }}
          />
          <Difficulty difficulty={difficulty} />
          <Typography sx={{ p: 1 }}>{description}</Typography>
        </Stack>
      </Popover> */}
    </Tooltip>
  );
}

Marker.propTypes = {
  trail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    elevation: PropTypes.string.isRequired,
    ratings: PropTypes.shape({
      average: PropTypes.number.isRequired,
      difficulty: PropTypes.number.isRequired,
    }).isRequired,
    quadrant: PropTypes.number,
  }).isRequired,
};
