import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
// import { createEvent } from './createEvent';
import { GoogleLogin } from 'react-google-login';

function TrailDescription({ name, description }) {
  const { gapi } = window;

  // const CLIENT_ID = "553893922788-mu7p28kt19digrrma01h2m2bdbr9ralo.apps.googleusercontent.com";
  // const API_KEY = "AIzaSyDbhq34dNRb3A1fStqISMyl-qOX3i7bXMs"
  // const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  // const SCOPES = "https://www.googleapis.com/auth/calendar.events"
  // const handleClick = () => {
  //   gapi.load('client:auth2', () => {
  //     gapi.client.init({
  //       apiKey: API_KEY,
  //       clientId: CLIENT_ID,
  //       discoveryDocs: DISCOVERY_DOCS,
  //       scope: SCOPES,
  //     });
  //     gapi.client.load('calendar', 'v3', () => {
  //       console.log('calendar loaded');
  //     });

  //     gapi.auth2.getAuthInstance().signIn({ prompt: 'consent' })
  //       .then(() => {
  //         const event = {
  //           summary: 'Google I/O 2015',
  //           location: '800 Howard St., San Francisco, CA 94103',
  //           description: 'A chance to hear more about Google\'s developer products.',
  //           start: {
  //             dateTime: '2022-05-11T09:00:00-07:00',
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
  //             { email: 'lpage@example.com' },
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

  //         request.execute(function(event) {
  //           console.log('Event created: ' + event.htmlLink);
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });

  //   });


  // }

  const SCOPES = "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar";
  const CLIENT_ID = "553893922788-mu7p28kt19digrrma01h2m2bdbr9ralo.apps.googleusercontent.com"
  const API_KEY = "AIzaSyDbhq34dNRb3A1fStqISMyl-qOX3i7bXMs"

  const initClient = () => {
    if (!localStorage.getItem("access_token")) {
      openSignInPopup();
    } else {
      fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${API_KEY}&orderBy=startTime&singleEvents=true`,
        { headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } },
      )
        .then((res) => {
          // Check if unauthorized status code is return open sign in popup
          if (res.status !== 401) {
            return res.json();
          } else {
            localStorage.removeItem("access_token");
            openSignInPopup();
          }
        })
        .then((data) => {
          if (data?.items) {
            setEvents(formatEvents(data.items));
          }
        });
    }
  };

  const handleClientLoad = () => {
    window.gapi.load("client:auth2", initClient);
  };
  useEffect(() => {
    const script = document.createElement("script")
    script.async = true;
    script.defer = true;
    script.src = "https://apis.google.com/js/api/js";

    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.gapi) {
        handleClientLoad()
      }
    });
  }, []);
  const listUpcomingEvents = () => {
    window.gapi.client.calendar.events
      .list({
        // Fetch events from user's primary calendar
        calendarId: "primary",
        showDeleted: true,
        singleEvents: true,
      })
      .then(function (response) {
        let events = response.result.items;
        if (events.length > 0) {
          setEvents(formatEvents(events));
        }
      });
  };
  const openSignInPopup = () => {
    window.gapi.auth2.authorize({
      client_id: CLIENT_ID,
      scope: SCOPES,
    }, (res) => {
      if (res) {
        if (res.access_token) {
          localStorage.setItem("access_token", res.access_token);
        }
        window.gapi.client.load("calendar", "v3", listUpcomingEvents);
      }
    });
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
          // onClick={handleClick}
        >
          <CalendarTodayIcon
            sx={{
              fontSize: '50px',
            }}
          />
        </Button>
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
