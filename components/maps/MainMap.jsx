/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import Marker from './Marker';
import MAPSAPIKEY from '../../config';
// eslint-disable-next-line import/no-named-as-default
import Search from './Search';
import mapQuadrants from './mapLogic';
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
    // eslint-disable-next-line no-console
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

  useEffect(() => loadTrails(), []);

  useEffect(() => {
    loadTrails();
  }, [bounds]);

  const handleSearch = (latLng) => {
    const event = new CustomEvent('locSearch', { detail: latLng });
    document.dispatchEvent(event);
  };

  document.addEventListener('newBounds', (e) => {
    const newBounds = e.detail;
    setBounds(newBounds);
  });
  return (
    <div style={containerStyle}>
      <div className="search">
        <Search handleSearch={handleSearch} />
      </div>
      <div className={Styles.map} style={{ height: `${height}%`, width: `${width}%` }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAPSAPIKEY }}
          defaultCenter={defaultCenter}
          defaultZoom={10}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => mapQuadrants(map, maps, trails)}
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
