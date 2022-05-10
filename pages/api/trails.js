import axios from 'axios';

export default function handler(req, res) {
  axios.get(`http://localhost:3005/trails/${req.query.id}`)
    .then(({ data }) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
}