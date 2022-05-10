// // const config = {
// //   'clientId': '80779173779-aip5t20ankcj4pv7q3ho69fcctgkvg5j.apps.googleusercontent.com',
// //   "apiKey": 'AIzaSyBmuHyhTRVEMtBCpMFFbOkPY2RLsPe291s',
// //   "scope": "https://www.googleapis.com/auth/calendar",
// //   "discoveryDocs": [
// //     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
// //   ]
// // }
// let tokenClient;
// let gapiInited = false;
// let gisInited = false;

// function gisLoaded() {
//   tokenClient = google.accounts.oauth2.initTokenClient({
//     client_id: "80779173779-aip5t20ankcj4pv7q3ho69fcctgkvg5j.apps.googleusercontent.com",
//     scope: "https://www.googleapis.com/auth/calendar",
//     callback: '', // defined later
//   });
//   gisInited = true;
//   // maybeEnableButtons();
// }

// async function intializeGapiClient() {
//   await gapi.client.init({
//     apiKey: "AIzaSyBmuHyhTRVEMtBCpMFFbOkPY2RLsPe291s",
//     discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
//   });
//   gapiInited = true;
// }
// const { gapi } = window;

// function gapiLoaded() {
//   gapi.load('client', intializeGapiClient);
// }

// function createEvent() {
//   var event = {
//     'summary': 'Google I/O 2015',
//     'location': '800 Howard St., San Francisco, CA 94103',
//     'description': 'A chance to hear more about Google\'s developer products.',
//     'start': {
//       'dateTime': '2022-05-09T09:00:00-07:00',
//       'timeZone': 'America/Los_Angeles'
//     },
//     'end': {
//       'dateTime': '2022-05-10T17:00:00-07:00',
//       'timeZone': 'America/Los_Angeles'
//     },
//     'recurrence': [
//       'RRULE:FREQ=DAILY;COUNT=2'
//     ],
//     'attendees': [
//       {'email': 'lpage@example.com'},
//       {'email': 'sbrin@example.com'}
//     ],
//     'reminders': {
//       'useDefault': false,
//       'overrides': [
//         {'method': 'email', 'minutes': 24 * 60},
//         {'method': 'popup', 'minutes': 10}
//       ]
//     }
//   };
//   const request = gapi.client.calendar.events.insert({
//     'calendarId': 'primary',
//     'resource': event
//   });
//   request.execute(function(e) {
//   });
//   // function handleAuthClick() {
//   //   tokenClient.callback = async (resp) => {
//   //     if (resp.error !== undefined) {
//   //       throw (resp);
//   //     }
//   //   };

//   //   if (gapi.client.getToken() === null) {
//   //     // Prompt the user to select an Google Account and asked for consent to share their data
//   //     // when establishing a new session.
//   //     tokenClient.requestAccessToken({prompt: 'consent'});
//   //   } else {
//   //     // Skip display of account chooser and consent dialog for an existing session.
//   //     tokenClient.requestAccessToken({prompt: ''});
//   //   }
//   // }
// }

// export { gisLoaded, createEvent, gapiLoaded };

// // gapi.auth2.getAuthInstance().signIn()
// // .then(() => {
// //   const event = {
// //     'summary': 'Google I/O 2015',
// //     'location': '800 Howard St., San Francisco, CA 94103',
// //     'description': 'A chance to hear more about Google\'s developer products.',
// //     'start': {
// //       'dateTime': '2022-05-10T09:00:00-07:00',
// //       'timeZone': 'America/Los_Angeles'
// //     },
// //     'end': {
// //       'dateTime': '2022-05-11T17:00:00-07:00',
// //       'timeZone': 'America/Los_Angeles'
// //     },
// //     // 'recurrence': [
// //     //   'RRULE:FREQ=DAILY;COUNT=2'
// //     // ],
// //     'attendees': [
// //       {'email': 'pascal9057@gmail.com'},
// //       {'email': 'sbrin@example.com'}
// //     ],
// //     'reminders': {
// //       'useDefault': false,
// //       'overrides': [
// //         {'method': 'email', 'minutes': 24 * 60},
// //         {'method': 'popup', 'minutes': 10}
// //       ]
// //     }
// //   };
// //   const request = gapi.client.calendar.events.insert({
// //     'calendarId': 'primary',
// //     'resource': event
// //   });
// //   request.execute((ev) => {
// //     console.log(ev.htmlLink);
// //   });
// // });