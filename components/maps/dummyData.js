const list = [
  {
    id: 1,
    name: 'Mission Peak Loop',
    city: 'Milpitas',
    short_description: "I'm baby succulents 90's banjo prism cred mixtape viral.",
    length: '5.8',
    elevation: '2135',
    lat: '37.50438',
    lng: '-121.90833',
    ratings: {
      average: 2.47,
      beauty: 2.92,
      nature: 2.75,
      difficulty: 2.61,
    },
    photos: [
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1458501534264-7d326fa0ca04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1530569673472-307dc017a82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1485201543483-f06c8d2a8fb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1509515837298-2c67a3933321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1508669232496-137b159c1cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1485201543483-f06c8d2a8fb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1470137430626-983a37b8ea46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1559666126-84f389727b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1461301214746-1e109215d6d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1553114836-026cecec9778?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 4,
        thumb: 'https://images.unsplash.com/photo-1530569673472-307dc017a82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 4,
        thumb: 'https://images.unsplash.com/photo-1651980979183-79425af50103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1MjIwNDc4Ng&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 4,
        thumb: 'https://images.unsplash.com/photo-1652143147456-2a23e2c130ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTIyMDQ3ODY&ixlib=rb-1.2.1&q=80&w=200',
      },
    ],
  },
  {
    id: 2,
    name: 'Crystal Springs and Dean Trail',
    city: 'Woodside',
    short_description: 'Small batch offal selfies chartreuse meditation fanny pack bespoke 3 wolf moon.',
    length: '5',
    elevation: '935',
    lat: '37.44169',
    lng: '-122.29066',
    ratings: {
      average: 3.18,
      beauty: 2.36,
      nature: 2.92,
      difficulty: 3.8,
    },
    photos: [
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 4,
        thumb: 'https://images.unsplash.com/photo-1420593248178-d88870618ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1533119408463-b0f487583ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1528184039930-bd03972bd974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1544084944-15269ec7b5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1490682143684-14369e18dce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1552083375-1447ce886485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 4,
        thumb: 'https://images.unsplash.com/photo-1552083375-1447ce886485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1652116776789-873f650efb68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MjIwNDc4Ng&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1652138896996-0c9ff7f19dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1MjIwNDc4Ng&ixlib=rb-1.2.1&q=80&w=200',
      },
    ],
  },
  {
    id: 3,
    name: 'Stanford Dish Loop Trail',
    city: 'Palo Alto',
    short_description: 'Bavarian bergkase cut the cheese everyone loves. ',
    length: '3.7',
    elevation: '534',
    lat: '37.41017',
    lng: '-122.16123',
    ratings: {
      average: 2.71,
      beauty: 2.4,
      nature: 2.88,
      difficulty: 3.11,
    },
    photos: [
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1511497584788-876760111969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1503903587778-5124b6d043b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1493815793585-d94ccbc86df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 4,
        thumb: 'https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 4,
        thumb: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1519356162333-4d49ceade668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1491147334573-44cbb4602074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1523528283115-9bf9b1699245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1544084944-15269ec7b5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1638913662735-a13cfc1dd8d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MjIwNDc4Ng&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1652126571823-15ee08c0be05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1MjIwNDc4Ng&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1MjIwNDc4Ng&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1652140517443-d67c485a648c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1MjIwNDc4Ng&ixlib=rb-1.2.1&q=80&w=200',
      },
    ],
  },
  {
    id: 4,
    name: 'PG&E Loop Trail',
    city: 'Cupertino',
    short_description: 'Melted cheese boursin mascarpone. ',
    length: '8.3',
    elevation: '1624',
    lat: '37.32949',
    lng: '-122.08587',
    ratings: {
      average: 3.1,
      beauty: 2.78,
      nature: 2.5,
      difficulty: 3.11,
    },
    photos: [
      {
        score: 4,
        thumb: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1552083375-1447ce886485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 4,
        thumb: 'https://images.unsplash.com/photo-1484542603127-984f4f7d14cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1503264116251-35a269479413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1528184039930-bd03972bd974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1504803900752-c2051699d0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1492496913980-501348b61469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1509515837298-2c67a3933321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 4,
        thumb: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1422205512921-12dac7b3b603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1462216589242-9e3e00a47a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 4,
        thumb: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1652154462095-d6ced82c20ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MjIwNDc4Ng&ixlib=rb-1.2.1&q=80&w=200',
      },
    ],
  },
  {
    id: 5,
    name: "Steven's Canyon Trail",
    city: 'Cupertino',
    short_description: 'Gummies wafer marshmallow liquorice chupa chups.',
    length: '5.9',
    elevation: '1079',
    lat: '37.30681',
    lng: '-122.07366',
    ratings: {
      average: 3.25,
      beauty: 3.18,
      nature: 3,
      difficulty: 3.5,
    },
    photos: [
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1525923838299-2312b60f6d69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 4,
        thumb: 'https://images.unsplash.com/photo-1504392022767-a8fc0771f239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 0,
        thumb: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 1,
        thumb: 'https://images.unsplash.com/photo-1438786657495-640937046d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1493815793585-d94ccbc86df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 3,
        thumb: 'https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200',
      },
      {
        score: 2,
        thumb: 'https://images.unsplash.com/photo-1652041436328-a7305368d29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1MjIwNDc4Ng&ixlib=rb-1.2.1&q=80&w=200',
      },
    ],
  },
];

export default list;
