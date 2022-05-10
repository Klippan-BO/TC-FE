import React from 'react';
import Typography from '@mui/material/Typography';
import { GoogleLogin } from 'react-google-login';
import Stack from '@mui/material/Stack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Button from '@mui/material/Button';
import ApiCalendar from 'react-google-calendar-api';
import PropTypes from 'prop-types';
import { useAuth } from '../../context/AuthContext';
// import { createEvent } from './createEvent';
import { addEvent, handleItemClick } from './addEvent';

const config = {
  clientId: '80779173779-aip5t20ankcj4pv7q3ho69fcctgkvg5j.apps.googleusercontent.com',
  apiKey: 'AIzaSyBmuHyhTRVEMtBCpMFFbOkPY2RLsPe291s',
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}

function TrailDescription({ name, description }) {
  const { currentUser } = useAuth();
  console.log(currentUser);

  const { gapi } = window;
  const CLIENT_ID = '80779173779-aip5t20ankcj4pv7q3ho69fcctgkvg5j.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyBmuHyhTRVEMtBCpMFFbOkPY2RLsPe291s';
  const DISCOVERY_DOCS = "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
  const SCOPE = "https://www.googleapis.com/auth/calendar";

  const responseGoogle = (response) => {
    console.log(response)
  }
  const responseError = (err) => {
    console.log(err)
  }
  // const handleAddEvent = (e) => {
  //   e.preventDefault();
  //   console.log(gapi);

  //   gapi.load('client:auth2', () => {
  //     console.log('loaded client');

  //     gapi.client.init({
  //       apiKey: API_KEY,
  //       clientId: CLIENT_ID,
  //       discoveryDocs: DISCOVERY_DOCS,
  //       scope: SCOPE,
  //     });

  //     gapi.client.load('calendar', 'v3', () => console.log('bam!'));

  //     // gapi.auth2.getAuthInstance().signIn()
  //     //   .then(() => {
  //         const event = {
  //           summary: 'Google I/O 2015',
  //           location: '800 Howard St., San Francisco, CA 94103',
  //           description: 'A chance to hear more about Google\'s developer products.',
  //           start: {
  //             dateTime: '2022-05-10T09:00:00-07:00',
  //             timeZone: 'America/Los_Angeles',
  //           },
  //           end: {
  //             dateTime: '2022-05-11T17:00:00-07:00',
  //             timeZone: 'America/Los_Angeles',
  //           },
  //           recurrence: [
  //             'RRULE:FREQ=DAILY;COUNT=2',
  //           ],
  //           attendees: [
  //             { email: 'pascal9057@gmail.com' },
  //             { email: 'sbrin@example.com' },
  //           ],
  //           reminders: {
  //             useDefault: false,
  //             overrides: [
  //               { method: 'email', minutes: 24 * 60 },
  //               { method: 'popup', minutes: 10 },
  //             ],
  //           },
  //         };
  //         const request = gapi.client.calendar.events.insert({
  //           calendarId: 'primary',
  //           resource: event,
  //         });
  //         request.execute((ev) => {
  //           console.log(ev.htmlLink);
  //         });
  //       });
  //   // });
  // };

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
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            fontSize: 50,
            margin: 1,
          }}
        >
          {name}
        </Typography>
        <Button
          onClick={(e) => { addEvent(e); }}
        >
          <CalendarTodayIcon
            sx={{
              fontSize: '50px',
            }}
          />
        </Button>
        <Button
          onClick={(e) => { handleItemClick(e, 'sign-in'); }}
        >
          add signin
        </Button>
        <div>
          <GoogleLogin
            clientId='80779173779-aip5t20ankcj4pv7q3ho69fcctgkvg5j.apps.googleusercontent.com'
            buttonText="sign in and authorize calender"
            onSuccess={responseGoogle}
            onFailure={responseError}
            cookiePolicy={"single_host_origin"}
              //important
            responseType="code"
            accessType="offline"
            scope='openid email profile https://www.googleapis.com/auth/calendar'
          />
        </div>
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