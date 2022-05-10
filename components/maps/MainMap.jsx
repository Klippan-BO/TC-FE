import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import MAPSAPIKEY from '../../config';
import Search from './Search';
import mapQuadrants from './mapLogic';

// REPLACE WITH REAL FETCH DATA
import trails from './dummyData';
import dummyTrails from './dummyData';

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

/* {AUTOCOMPLETE FEATURE}
const mapAutoApi = 'https://maps.googleapis.com/maps/api/js';

function loadAsyncScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    Object.assign(script, {
      type: 'text/javascript',
      async: true,
      src,
    });
    script.addEventListener('load', () => resolve(script));
  });
} */

// PASS "lat" + "lng" PROPS TO MARKER

export default function MainMap() {
  /* autoComplete feature
  const searchInput = useRef(null);
  const initMapScript = () => {
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapAutoApi}?key=${MAPSAUTOKEY}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  };

  const onChangeAddress = (autocomplete) => {
    const location = autocomplete.getPlace();
    console.log(location);
  };
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
    autocomplete.setFields(['address_component', 'geometry']);
    autocomplete.addListener('place_changed', () => onChangeAddress(autocomplete));
  };

  useEffect(() => {
    initMapScript().then(() => {
      console.log('map loaded', window.google);
    });
  }, []);

  initAutocomplete(); */
  // getGeo();

  return (
    <div style={containerStyle}>
      <div className="search">
        {/* <input ref={searchInput} type="text" placeholder="Search location..." /> */}
        <Search />
      </div>
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
