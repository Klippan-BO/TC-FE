import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import { Search, GpsFixed } from '@material-ui/icons';
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
}
// PASS "lat" + "lng" PROPS TO MARKER

const getGeo = () => {
  const location = '2361 Glenview St Alameda CA';
  axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params: {
      address: location,
      key: 'AIzaSyCEblyOtkFC7QgjoP3bZa7FFz-a3-NCsJA',
    },
  })
    .then((res) => {
      console.log(res.data.results[0].geometry.location);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function MainMap() {
  const searchInput = useRef(null);
  const initMapScript = () => {
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapAutoApi}?key=${MAPSAPIKEY.MAPSAUTOKEY}&libraries=places&v=weekly`;
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

  initAutocomplete();
  getGeo();
  return (
    <div style={containerStyle}>
      <div className="search">
        <input ref={searchInput} type="text" placeholder="Search location..." />
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPSAPIKEY.MAPSAPIKEY }}
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
