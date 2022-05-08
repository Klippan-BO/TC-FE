import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';
import MAPSAPIKEY from '../../config';

import dummyTrails from './dummyData';

const containerStyle = {
  width: '90vw',
  height: '85vh',
};

const center = {
  lat: 37.79,
  lng: -122.41,
};

// PASS "lat" + "lng" PROPS TO MARKER

export default function MainMap() {
  return (
    <div style={containerStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPSAPIKEY }}
        defaultCenter={center}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
      >
        {dummyTrails.map((trail) => {
          const { lat, lng } = trail;
          return (
            <Marker
              lat={lat}
              lng={lng}
              trail={trail}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
