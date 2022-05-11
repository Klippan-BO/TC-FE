import React from 'react';
import GoogleMapReact from 'google-map-react';
import SvgIcon from '@mui/material/SvgIcon';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MAPSAPIKEY from '../../config';

export default function MiniMap(props) {
  const {
    lat, lng, zoom, height, width,
  } = props;

  return (
    <div style={{
      height,
      width,
    }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPSAPIKEY }}
        center={{ lat, lng }}
        zoom={zoom}
        options={{
          disableDefaultUI: true,
          draggable: false,
        }}
      >
        <SvgIcon
          component={LocationOnIcon}
          lat={lat}
          lng={lng}
        />
      </GoogleMapReact>
    </div>
  );
}
