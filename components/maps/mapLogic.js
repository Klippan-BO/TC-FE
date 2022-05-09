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

const mapQuadrants = (map, maps, trails) => {
  // Probably needs modulator to prevent continuous reevaluation of marker quadrant status
  map.addListener('bounds_changed', () => {
    console.log('CHANGING BOUNDS');
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
  });
};

/*
map methods:
panTo([{latlng}])
setZoom([zoomLvl])
*/

export default mapQuadrants;
