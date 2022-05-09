import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';

import Difficulty from '../Chips/Difficulty';

export default function Marker({ trail }) {
  const {
    name, description, length, elevation, quadrant, ratings: {
      average, difficulty,
    },
  } = trail;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  const style = {
    height: 500,
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
  };

  const anchorOrigin = () => {
    switch (quadrant) {
      case 1:
        return ({
          vertical: 'bottom',
          horizontal: 'right',
        });
      case 2:
        return ({
          vertical: 'bottom',
          horizontal: 'left',
        });
      case 3:
        return ({
          vertical: 'top',
          horizontal: 'left',
        });
      default:
        return ({
          vertical: 'top',
          horizontal: 'right',
        });
    }
  };

  const transOrigin = () => {
    switch (quadrant) {
      case 1:
        return ({
          vertical: 'top',
          horizontal: 'left',
        });
      case 2:
        return ({
          vertical: 'top',
          horizontal: 'right',
        });
      case 3:
        return ({
          vertical: 'bottom',
          horizontal: 'right',
        });
      default:
        return ({
          vertical: 'bottom',
          horizontal: 'left',
        });
    }
  };

  return (
    <>
      <SvgIcon
        component={LocationOnIcon}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        inheritViewBox
      />
      <Popover
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
          {quadrant}
        </Stack>
      </Popover>
    </>
  );
}

Marker.propTypes = {
  trail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    ratings: PropTypes.shape({
      average: PropTypes.number.isRequired,
      difficulty: PropTypes.number.isRequired,
    }).isRequired,
    quadrant: PropTypes.number,
  }).isRequired,
};
