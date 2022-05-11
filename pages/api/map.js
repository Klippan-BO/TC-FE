import axios from 'axios';

const serviceURL = 'http://localhost:3005/trails/map';

export default function handler(req, res) {
  console.log('host request received');
  const {
    nelat, swlat, nelng, swlng,
  } = req.query;
  axios.get(`${serviceURL}?nelat=${nelat}&swlat=${swlat}&nelng=${nelng}&swlng=${swlng}`)
    .then(({ data }) => {
      console.log('DATA RECEIVED');
      res.json(data);
    })
    .catch((err) => console.log(err));
}
