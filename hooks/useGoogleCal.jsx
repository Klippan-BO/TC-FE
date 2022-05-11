import React from 'react';
import Script from 'next/script';

const { calendar } = require('../calendarConfig');
// const event = {
//   'summary': 'Google I/O 2015',
//   'location': '800 Howard St., San Francisco, CA 94103',
//   'description': 'A chance to hear more about Google\'s developer products.',
//   'start': {
//     'dateTime': '2022-05-11T09:00:00-07:00',
//     'timeZone': 'America/Los_Angeles'
//   },
//   'end': {
//     'dateTime': '2022-05-11T17:00:00-07:00',
//     'timeZone': 'America/Los_Angeles'
//   },
//   'recurrence': [
//     'RRULE:FREQ=DAILY;COUNT=2'
//   ],
//   'attendees': [
//     'pascal9057@gmail.com',
//   ],
//   'reminders': {
//     'useDefault': false,
//     'overrides': [
//       {'method': 'email', 'minutes': 24 * 60},
//       {'method': 'popup', 'minutes': 10}
//     ]
//   }
// };

const CLIENT_ID = calendar.clientId;
const API_KEY = calendar.apiKey;
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar';

let tokenClient;
let gapiInited = false;
let gisInited = false;

async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
}

function gapiLoaded() {
  gapi.load('client', initializeGapiClient);
}

function gisLoaded() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: '',
  });
  gisInited = true;
}

export async function createCalendarEvent(eventToCreate) {
  const request = gapi.client.calendar.events.insert({
    'calendarId' : 'primary',
    'resource' : eventToCreate,
  });

  request.execute((event) => {
    console.log('Event created!, ', event);
  });
}

export function handleAuthClick() {
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw (resp);
    }
    // await createCalendarEvent();
  };

  if (gapi.client.getToken() === null) {
    // Prompt the user to select an Google Account and asked for consent to share their data
    // when establishing a new session.
    tokenClient.requestAccessToken({ prompt: 'consent' });
  } else {
    // Skip display of account chooser and consent dialog for an existing session.
    tokenClient.requestAccessToken({ prompt: '' });
  }
}

export function InitGoogleCal() {
  return (
    <>
      <Script async defer src="https://apis.google.com/js/api.js" onLoad={() => gapiLoaded()} />
      <Script async defer src="https://accounts.google.com/gsi/client" onLoad={() => gisLoaded()} />
    </>
  );
}
