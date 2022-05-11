/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Style from '../../styles/Home.module.css';
import MAPSAPIKEY from '../../config';

export default function Search({ handleSearch }) {
  const [zipCode, setzipCode] = useState('');
  const getGeo = (e) => {
    e.preventDefault();
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
  };

  return (
    <div className={Style.search}>
      <form className={Style.search_btn} onSubmit={(e) => getGeo(e)}>
        <input
          type="text"
          placeholder="Enter zipcode"
          value={zipCode}
          onChange={(e) => setzipCode(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              getGeo(e);
            }
          }}
        />
        <button type="submit"> Find </button>
      </form>
    </div>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
