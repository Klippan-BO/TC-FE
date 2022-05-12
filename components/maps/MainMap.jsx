/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import Marker from './Marker';
import MAPSAPIKEY from '../../config';
import Search from './Search';
import apiLoaded from './mapLogic';
import Styles from '../../styles/Home.module.css';

// REPLACE WITH REAL FETCH DATA
// import list from './dummyData';

const containerStyle = {
  width: '90vw',
  height: '85vh',
};

const defaultCenter = {
  lat: 37.79,
  lng: -122.41,
};

const defaultBounds = {
  nelat: 41.88953,
  nelng: -112.47457,
  swlat: 32.75912,
  swlng: -124.07019,
};

export default function MainMap(props) {
  const hostURL = 'http://localhost:3000';

  const [bounds, setBounds] = useState(defaultBounds);
  const [trails, setTrails] = useState([]);
  const { height, width } = props;

  const loadTrails = () => {
    console.log('fetching trails');
    // setLoading(true);
    const {
      nelat, swlat, nelng, swlng,
    } = bounds;
    fetch(`${hostURL}/api/map?nelat=${nelat}&swlat=${swlat}&nelng=${nelng}&swlng=${swlng}`)
      .then((res) => res.json())
      .then((data) => {
        setTrails(data);
        // setLoading(false);
        const event = new CustomEvent('newTrails', { detail: data });
        document.dispatchEvent(event);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => loadTrails(), []);

  useEffect(() => {
    loadTrails();
  }, [bounds]);

  const handleSearch = (latLng) => {
    const event = new CustomEvent('locSearch', { detail: latLng });
    document.dispatchEvent(event);
  };

  useEffect(() => {
    const eventListener = (event) => setBounds(event.detail);
    document.addEventListener('newBounds', eventListener);
    return document.removeEventListener('newBounds', eventListener);
  }, []);

  return (
    <div style={containerStyle}>
      <div className={Styles.map} style={{ height: `${height}%`, width: `${width}%` }}>
        <div className="search">
          <Search handleSearch={handleSearch} />
        </div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAPSAPIKEY }}
          center={defaultCenter}
          zoom={12}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiLoaded(map, maps, trails)}
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
    </div>
  );
}

MainMap.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
