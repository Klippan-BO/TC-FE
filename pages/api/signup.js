import axios from 'axios';

export default function handler(req, res) {
  const { email } = req.body;
  axios.post('http://localhost:3005/users/login', { email })
    .then(({ data }) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.log('error logging in: ', err);
      res.status(404);
    });
}
