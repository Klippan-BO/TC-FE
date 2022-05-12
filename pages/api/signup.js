import axios from 'axios';

export default async function handler(req, res) {
  await axios.post('http://localhost:3005/users/signup', req.body.userDetails)
    .then(({ data }) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
}
