/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LandscapeIcon from '@mui/icons-material/Landscape';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import IconButton from '@mui/material/IconButton';
import HikingIcon from '@mui/icons-material/Hiking';
import { InitGoogleCal, createCalendarEvent, handleAuthClick } from '../../hooks/useGoogleCal';
import MiniMap from '../maps/MiniMap';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  width: '800px',
  p: 4,
};

function TrailAddEvent(props) {
  const {
    name, description,
    elevation, id,
    lat, lng,
    trail,
  } = props;
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(Date.now());
  const [friendsInvite, setFriendsInvite] = useState([]);
  const [auth, setAuth] = useState(false);
  const handleTimeChange = (value) => { setStartTime(value); };
  const handleEndTimeChange = (value) => { setEndTime(value); };
  const handleSummary = (e) => { setSummary(e.target.value); };
  const handleBody = (e) => { setBody(e.target.value); };


  // const selectFriendsChange = (value) => {
  //   console.log(value);
  //   const updatedList = friendsInvite.push(value);
  //   setFriendsInvite([updatedList]);
  // };

  const handleAddEvent = () => {
    if (!auth) {
      handleAuthClick();
      setAuth(true);
    } else {
      const event = {
        summary,
        description: body,
        start: {
          dateTime: startTime,
          timeZone: 'America/Los_Angeles',
        },
        end: {
          dateTime: endTime,
          timeZone: 'America/Los_Angeles',
        },
        location: `${lat}, ${lng}`,
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 24 * 60 },
            { method: 'popup', minutes: 30 },
          ]
        },
      };
      createCalendarEvent(event);
    }
  };
  return (
    <>
      <InitGoogleCal />
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4">
          {`Plan your next hike to - ${name}`}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {`Trail description - ${description}`}
        </Typography>
        <Stack>
          <Box
            direction="column"
            component="form"
            sx={{
              '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <Stack direction="column" width="40%" sx={{ justifyContent: 'space-between' }}>
                <TextField
                  id="outlined-basic"
                  label="Summary"
                  variant="outlined"
                  fullWidth
                  value={summary}
                  onChange={handleSummary}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  fullWidth="true"
                  value={body}
                  onChange={handleBody}
                  rows={12}
                  multiline
                />
              </Stack>
              <Box sx={{ width: '55%', height: '400px' }}>
                <MiniMap
                  lat={Number(lat)}
                  lng={Number(lng)}
                  zoom={13}
                  height={'30vh'}
                  width={'auto'}
                />
              </Box>
            </Stack>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>

              <LocalizationProvider dateAdapter={AdapterDateFns}>

                <DateTimePicker
                  label="start time"
                  // inputFormat="MM/dd/yyyy"
                  value={startTime}
                  onChange={handleTimeChange}
                  renderInput={(params) => <TextField {...params} />}
                />
                <DateTimePicker
                  label="end time"
                  // inputFormat="MM/dd/yyyy"
                  value={endTime}
                  onChange={handleEndTimeChange}
                  renderInput={(params) => <TextField {...params} />}
                  />
              </LocalizationProvider>
              {/* <LocalizationProvider dateAdapter={AdapterMoment}>
              </LocalizationProvider> */}
              {/* <FormHelperText>Gather your companions</FormHelperText> */}
              {/* <Select
                labelId="demo-simple-select-label"
                label="invite your friends"
                id="demo-simple-select"
                onChange={selectFriendsChange}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select> */}
              <Box>
                <IconButton
                  onClick={handleAddEvent}
                >
                  <HikingIcon sx={{
                    fontSize: '48px',
                    color: 'primary.main',
                  }}
                  />
                  <LandscapeIcon sx={{
                    fontSize: '48px',
                    color: 'primary.main',
                  }}
                  />
                </IconButton>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

TrailAddEvent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  elevation: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
};

export default TrailAddEvent;
