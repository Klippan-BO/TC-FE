import axios from 'axios';

export default function handler(req, res) {
  const { email } = req.body;
  axios.post('http://localhost:3005/users/login', { email })
    .then(({ data }) => {
      console.log('data in api is: ', data);
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
}
