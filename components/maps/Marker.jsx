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
    name, description, length, elevation, ratings: {
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
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
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
      </Popover>
    </>
  );
}

Marker.propTypes = {
  trail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    ratings: PropTypes.shape({
      average: PropTypes.number.isRequired,
      difficulty: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
