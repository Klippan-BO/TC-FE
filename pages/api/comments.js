import axios from 'axios';

export default function handler(req, res) {
  if (req.method === 'POST') {
    axios.post('http://localhost:3005/comments/add', req.body)
      .then((data) => {
        console.log(data);
        res.status(201).json({ data });
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  }
}
