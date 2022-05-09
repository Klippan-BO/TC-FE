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

// PASS "lat" + "lng" PROPS TO MARKER

export default function MainMap(props) {
  return (
    <div style={containerStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPSAPIKEY }}
        defaultCenter={center}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
      >
        <Marker
          lat={37.813}
          lng={-122.373}
        />
      </GoogleMapReact>
    </div>
  );
}
