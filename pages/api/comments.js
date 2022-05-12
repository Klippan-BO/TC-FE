import axios from 'axios';

export default function handler(req, res) {
  if (req.method === 'POST') {
    axios.post('http://localhost:3005/comments/add', {})
      .then(() => {
        res.status(204)
      })
      .catch(() => {
        res.status(500)
      });
    res.send('im back');
  }
}