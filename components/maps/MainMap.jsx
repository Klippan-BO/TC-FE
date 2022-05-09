import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';
import MAPSAPIKEY from '../../config';

import mapQuadrants from './mapLogic';

// REPLACE WITH REAL FETCH DATA
import trails from './dummyData';

const containerStyle = {
  width: '90vw',
  height: '85vh',
};

const defaultCenter = {
  lat: 37.79,
  lng: -122.41,
};

// CURRENT:
// fx to obtain current map bounds

// NEXT:
// determine quadrant location rel to map bounds

export default function MainMap() {
  return (
    <div style={containerStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPSAPIKEY }}
        defaultCenter={defaultCenter}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => mapQuadrants(map, maps, trails)}
      >
        {trails.map((trail) => {
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
