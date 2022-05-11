/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-unused-vars
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
  lat2 = toRad(Number(lat2));
  lng2 = toRad(Number(lng2));

  const dlat = lat2 - lat1;
  const dlng = lng2 - lng1;
  const a = Math.sin(dlat / 2) ** 2
  + Math.cos(lat1) * Math.cos(lat2)
  * Math.sin(dlng / 2) ** 2;
  const c = 2 * Math.asin(Math.sqrt(a));
  const r = 6371;

  return (c * r);
};

const locSearch = (map, maps) => {
  maps.event.addDomListener(document, 'locSearch', (e) => {
    const origin = e.detail;
    map.panTo(origin);
    map.setZoom(11);

    const {
      north: nelat, south: swlat, east: nelng, west: swlng,
    } = getBounds(map);
    const event = new CustomEvent('newBounds', {
      detail: {
        nelat, swlat, nelng, swlng,
      },
    });
    document.dispatchEvent(event);
  });
};

const updateClosestTrails = (map, maps) => {
  // CHANGE SEARCHLIMIT TO CHANGE NUMBER OF RESULTS
  const searchLimit = 5;
  const rangeLimit = 45;
  maps.event.addDomListener(document, 'newTrails', (e) => {
    const trails = e.detail;
    const origin = {
      lat: map.getCenter().lat(),
      lng: map.getCenter().lng(),
    };
    const bounds = map.getBounds();
    const sortedTrails = trails.sort((a, b) => {
      if (calculateDist(origin, { lat: a.lat, lng: a.lng })
      < calculateDist(origin, { lat: b.lat, lng: b.lng })) {
        return -1;
      }
      if (calculateDist(origin, { lat: a.lat, lng: a.lng })
      > calculateDist(origin, { lat: b.lat, lng: b.lng })) {
        return 1;
      }
      return 0;
    });

    let foundResults = false;
    if (sortedTrails.length) {
      let length = searchLimit;
      if (sortedTrails.length < searchLimit) {
        length = sortedTrails.length;
      }
      for (let i = 0; i < length; i += 1) {
        const point = {
          lat: Number(sortedTrails[i].lat),
          lng: Number(sortedTrails[i].lng),
        };
        if (calculateDist(origin, point) > rangeLimit) {
          break;
        }
        bounds.extend(point);
        foundResults = true;
      }
    }
    if (foundResults) {
      map.fitBounds(bounds);
    } else {
      // eslint-disable-next-line no-alert
      alert(`No trails found within ${rangeLimit}km!`);
    }
  });
};

const apiLoaded = (map, maps, trails) => {
  mapQuadrants(map, maps, trails);
  locSearch(map, maps);
  updateClosestTrails(map, maps, trails);
};

/*
map methods:
panTo([{latlng}])
setZoom([zoomLvl])
*/

export default apiLoaded;
