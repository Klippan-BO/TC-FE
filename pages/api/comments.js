import axios from 'axios';

export default async function handler(req, res) {
  console.log('req here', req.body);
  // console.log('req.query here', req.query.id)
  if (req.method === 'POST') {
    await axios.post('http://localhost:3005/comments/add', req.body)
      .then((data) => {
        // console.log(data);
        res.status(201).json({ data });
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  }
}
