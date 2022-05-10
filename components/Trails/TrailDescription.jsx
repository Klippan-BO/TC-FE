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
      <Stack
        direction="row"
      >
        <Typography
          sx={{
            fontSize: 50,
            margin: 1,
          }}
        >
          {name}
        </Typography>
        <IconButton
          // children={CalendarTodayIcon}
          onClick={handleClick}
        >
          <CalendarTodayIcon
            sx={{
              fontSize: '50px',
              color: 'primary.main',
            }}
          />
        </IconButton>
        {/* <Button>
          add signin
        </Button> */}
        {/* <GoogleLogin
          clientId="553893922788-mu7p28kt19digrrma01h2m2bdbr9ralo.apps.googleusercontent.com"
          buttonText="Log in with Google"
          cookiePolicy="single_host_origin"
          scope="profile"
        /> */}
      </Stack>

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
