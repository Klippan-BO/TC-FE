import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import Marker from './Marker';
import MAPSAPIKEY from '../../config';
import Search from './Search';
import mapQuadrants from './mapLogic';
import Styles from '../../styles/Home.module.css';

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

// PASS "lat" + "lng" PROPS TO MARKER

export default function MainMap(props) {
  const { height, width } = props;
  return (
    <div style={containerStyle}>
      <div className="search">
        {/* <input ref={searchInput} type="text" placeholder="Search location..." /> */}
        <Search />
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
    </div>
  );
}

MainMap.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
