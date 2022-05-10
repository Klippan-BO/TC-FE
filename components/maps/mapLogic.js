import axios from 'axios';
import MAPSAPIKEY from '../../config';

/* eslint-disable no-param-reassign */
const getBounds = (map, maps) => {
  const { Ab, Va } = map.getBounds();
  return ({
    north: Ab.j,
    south: Ab.h,
    east: Va.j,
    west: Va.h,
  });
};

// Can update to expand based on given array of places for location search

const updateQuad = (map, maps, trails) => {
  const {
    north, south, east, west,
  } = getBounds(map, maps);
  const lngCenter = (east + west) / 2;
  const latCenter = (north + south) / 2;
  trails.forEach((trail) => {
    const { lat, lng } = trail;
    switch (true) {
      case (lat > latCenter && lng <= lngCenter):
        trail.quadrant = 1;
        break;
      case (lat > latCenter && lng > lngCenter):
        trail.quadrant = 2;
        break;
      case (lat <= latCenter && lng > lngCenter):
        trail.quadrant = 3;
        break;
      default: // in quad 4
        trail.quadrant = 4;
    }
  });
};

const mapQuadrants = (map, maps, trails) => {
  updateQuad(map, maps, trails);
  map.addListener('dragend', () => {
    updateQuad(map, maps, trails);
  });
  map.addListener('zoom_changed', () => {
    updateQuad(map, maps, trails);
  });
};

const calculateDist = (origin, point) => {
  let { lat: lat1, lng: lng1 } = origin;
  let { lat: lat2, lng: lng2 } = point;
  const toRad = (deg) => ((deg * Math.PI) / 180);
  lat1 = toRad(lat1);
  lng1 = toRad(lng1);
  lat2 = toRad(lat2);
  lng2 = toRad(lng2);

  const dlat = lat2 - lat1;
  const dlng = lng2 - lng1;
  const a = Math.sin(dlat / 2) ** 2
  + Math.cos(lat1) * Math.cos(lat2)
  * Math.sin(dlng / 2) ** 2;
  const c = 2 * Math.asin(Math.sqrt(a));
  const r = 6371;

  return (c * r);
};

const updateClosestTrails = (map, maps, trails) => {
  // CHANGE SEARCHLIMIT TO CHANGE NUMBER OF RESULTS
  const searchLimit = 5;
  const rangeLimit = 30;
  maps.event.addDomListener(document, 'locSearch', (e) => {
    const origin = e.detail;
    map.panTo(origin);
    map.setZoom(11);

    const bounds = map.getBounds();
    const sortedTrails = trails.sort((a, b) => {
      if (calculateDist(origin, a) < calculateDist(origin, b)) {
        return -1;
      }
      if (calculateDist(origin, a) > calculateDist(origin, b)) {
        return 1;
      }
      return 0;
    });

    let foundResults = false;
    for (let i = 0; i < searchLimit; i += 1) {
      const { lat, lng } = sortedTrails[i];
      if (calculateDist(origin, { lat, lng }) > rangeLimit) {
        break;
      }
      bounds.extend({ lat, lng });
      foundResults = true;
    }
    map.fitBounds(bounds);
    if (!foundResults) {
      alert(`No trails found within ${rangeLimit}km!`);
    }
  });
};

const apiLoaded = (map, maps, trails) => {
  mapQuadrants(map, maps, trails);
  updateClosestTrails(map, maps, trails);
};

/*
map methods:
panTo([{latlng}])
setZoom([zoomLvl])
*/

export default apiLoaded;
