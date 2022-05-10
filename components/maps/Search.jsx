import React, { useState } from 'react';
import axios from 'axios';

import MAPSAPIKEY from '../../config';

export default function Search({ handleSearch }) {
  const [zipCode, setzipCode] = useState('');
  const getGeo = (e) => {
    if (e.key === 'Enter') {
      const location = zipCode;
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: location,
          key: MAPSAPIKEY,
        },
      })
        .then((res) => {
          handleSearch(res.data.results[0].geometry.location);
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
        placeholder="Enter zipcode"
        onChange={(e) => setzipCode(e.target.value)}
        onKeyDown={(e) => getGeo(e)}
      />
      <button onClick={(e) => getGeo(e)}> Find </button>
    </div>
  );
}
