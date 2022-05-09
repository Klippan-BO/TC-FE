import React, { useState } from 'react';
import axios from 'axios';
import { GEOKEY } from '../../config';

export default function Search() {
  const [zipCode, setzipCode] = useState('');
  const getGeo = (e) => {
    if (e.key === 'Enter') {
      const location = zipCode;
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: location,
          key: GEOKEY,
        },
      })
        .then((res) => {
          console.log(res.data.results[0].geometry.location);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Address..."
        onChange={(e) => setzipCode(e.target.value)}
        onKeyDown={getGeo}
      />
    </div>
  );
}
