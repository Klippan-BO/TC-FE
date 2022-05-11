import axios from 'axios';

export default function handler(req, res) {
  axios.post('http://localhost:3005/users/signup', req.body.userDetails)
    .then(({ data }) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
}
