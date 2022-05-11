import axios from 'axios';

export default function handler(req, res) {
  if (req.method === 'PATCH') {
    console.log(req.body.id, 'asfljhawekfjhawkefhjawe');
    axios.put(`http://localhost:3005/photos/${req.body.id}/upvote`)
      .then(() => {
        res.status(204);
      })
      .catch(() => {
        res.status(500);
      });
  }

  if (req.method === 'POST') {
    console.log(req.body);
    res.send('hello from posting photos');
    axios.post('http://localhost:3005/photos/', req.body.photo)
      .then(() => {
        res.status(202);
      })
      .catch(() => {
        res.status(500);
      });
  }
}
