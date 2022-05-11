import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ApiCalendar from 'react-google-calendar-api';
import PropTypes from 'prop-types';
// import { createEvent } from './createEvent';

function TrailDescription({ name, description }) {
  const handleClick = () => {

  };

  return (
    <Stack
      direction="column"
      sx={{
        width: '960x',
        backgroundColor: '#123C69',
        color: '#EEE2DC',
      }}
    >
      <Typography
        onClick={()=>console.log('yo')}
        sx={{
          fontSize: 30,
          margin: 1,
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: 16,
          margin: 1,
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
}

TrailDescription.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TrailDescription;
