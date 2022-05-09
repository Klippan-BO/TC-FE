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

/*
map methods:
panTo([{latlng}])
setZoom([zoomLvl])
*/

export default mapQuadrants;
