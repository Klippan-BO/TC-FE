/* eslint-disable indent */
const dummyTrails = [
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
          difficulty: 3.11
      },
      photos: [
          {
              score: 4,
              thumb: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 3,
              thumb: 'https://images.unsplash.com/photo-1552083375-1447ce886485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 0,
              thumb: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 4,
              thumb: 'https://images.unsplash.com/photo-1484542603127-984f4f7d14cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 2,
              thumb: 'https://images.unsplash.com/photo-1503264116251-35a269479413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 3,
              thumb: 'https://images.unsplash.com/photo-1528184039930-bd03972bd974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 3,
              thumb: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 2,
              thumb: 'https://images.unsplash.com/photo-1504803900752-c2051699d0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 3,
              thumb: 'https://images.unsplash.com/photo-1492496913980-501348b61469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 3,
              thumb: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 1,
              thumb: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 0,
              thumb: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 1,
              thumb: 'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 0,
              thumb: 'https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 1,
              thumb: 'https://images.unsplash.com/photo-1509515837298-2c67a3933321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 4,
              thumb: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 1,
              thumb: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 2,
              thumb: 'https://images.unsplash.com/photo-1422205512921-12dac7b3b603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 0,
              thumb: 'https://images.unsplash.com/photo-1462216589242-9e3e00a47a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 4,
              thumb: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 1,
              thumb: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 3,
              thumb: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 1,
              thumb: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 0,
              thumb: 'https://images.unsplash.com/photo-1652154462095-d6ced82c20ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MjIwNDc4Ng&ixlib=rb-1.2.1&q=80&w=200'
          }
      ]
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
          difficulty: 3.5
      },
      photos: [
          {
              score: 0,
              thumb: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 0,
              thumb: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 3,
              thumb: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 4,
              thumb: 'https://images.unsplash.com/photo-1504392022767-a8fc0771f239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 3,
              thumb: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 3,
              thumb: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 0,
              thumb: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1Mzc&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 3,
              thumb: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 1,
              thumb: 'https://images.unsplash.com/photo-1438786657495-640937046d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 3,
              thumb: 'https://images.unsplash.com/photo-1493815793585-d94ccbc86df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 3,
              thumb: 'https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY1OTI&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 2,
              thumb: 'https://images.unsplash.com/photo-1652041436328-a7305368d29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1MjIwNDc4Ng&ixlib=rb-1.2.1&q=80&w=200'
          },
          {
              score: 2,
              thumb: 'https://images.unsplash.com/photo-1525923838299-2312b60f6d69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=200'
          }
      ]
  }
]

export default dummyTrails;
