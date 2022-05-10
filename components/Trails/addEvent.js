import ApiCalendar from 'react-google-calendar-api';

const handleItemClick = (e, name) => {
  if (name === 'sign-in') {
    ApiCalendar.handleAuthClick()
      .then(() => {
        console.log('sign in succesful!');
      })
      .catch((e) => {
        console.error(`sign in failed ${e}`);
      });
  } else if (name === 'sign-out') {
    ApiCalendar.handleSignoutClick();
  };
};
const addEvent = () => {
  ApiCalendar.handleAuthClick()
    .then(() => {
      let stDate = "2022-05-11T12:00:00+05:30";
      let endDate = "2022-5-11T15:00:00+05:30";
      const event = {
        summary: "new event created",
        description: "demo of create event function",
        start: {
          dateTime: stDate,
        },
        end: {
          dateTime: endDate,
        }
      };
      ApiCalendar.createEvent(event)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
    });
};

export { handleItemClick, addEvent };
