import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';
import MAPSAPIKEY from '../../config';

const containerStyle = {
  width: '90vw',
  height: '85vh',
};

const center = {
  lat: 37.79,
  lng: -122.41,
};

const dummyTrails = [
  {
    id: 2,
    name: 'Crystal Springs and Dean Trail',
    photos: [
      'http://www.trailstompers.com/uploads/2/6/8/6/2686411/9693769.jpg',
      'http://www.trailstompers.com/uploads/2/6/8/6/2686411/5328225.jpg?327',
      'http://www.trailstompers.com/uploads/2/6/8/6/2686411/2847590_orig.jpg',
      'http://www.trailstompers.com/uploads/2/6/8/6/2686411/326294_orig.jpg',
      'http://www.trailstompers.com/uploads/2/6/8/6/2686411/4025080_orig.jpg',
      'http://www.trailstompers.com/uploads/2/6/8/6/2686411/6829184_orig.jpg',
    ],
    description: 'This trail is one of the most popular trails in the area. It has plenty of shade, as well as sun. If you like the ocean, this trail is for you! Be sure to check out the view at the top. It also great for beginners so this is a great place for family and friends!',
    ratings: {
      average: 4.5,
      beauty: 4,
      nature: 4.5,
      difficulty: 1.2,
    },
    length: '5',
    elevation: '935',
    lat: '37.44169',
    lng: '-122.29066',
    google_url: 'https://goo.gl/maps/QptjVk4XzvysMJzf9',
  },
];

// PASS "lat" + "lng" PROPS TO MARKER

export default function MainMap(props) {
  const { lat, lng } = dummyTrails;

  return (
    <div style={containerStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPSAPIKEY }}
        defaultCenter={center}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
      >
        {dummyTrails.map((trail) => (
          <Marker
            lat={lat}
            lng={lng}
            trail={trail}
          />
        ))
        }
      </GoogleMapReact>
    </div>
  );
}

