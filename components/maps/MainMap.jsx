import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import MAPSAPIKEY from '../../config';
import Search from './Search';
import apiLoaded from './mapLogic';

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

const list = [
  {
    lat: 37.87,
    lng: -122.53,
  },
  {
    lat: 37.86,
    lng: -122.43,
  },
  {
    lat: 37.69,
    lng: -122.44,
  },
  {
    lat: 37.88,
    lng: -122.23,
  },
  {
    lat: 37.63,
    lng: -121.97,
  },
  {
    lat: 37.87,
    lng: -121.90,
  },
];

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

  const [bounds, setBounds] = useState(null)
;
  const handleSearch = (latLng) => {
    const event = new CustomEvent('locSearch', { detail: latLng });
    document.dispatchEvent(event);
  };



  return (
    <div style={containerStyle}>
      <div className="search">
        {/* <input ref={searchInput} type="text" placeholder="Search location..." /> */}
        <Search handleSearch={handleSearch} />
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPSAPIKEY }}
        center={defaultCenter}
        zoom={11}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiLoaded(map, maps, list)}
      >
        {trails.map((trail) => {
          const { id, lat, lng } = trail;
          return (
            <Marker
              key={id}
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
