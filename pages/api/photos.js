import axios from 'axios';

export default function handler(req, res) {
  if (req.method === 'PATCH') {
    console.log(req.body.id, 'asfljhawekfjhawkefhjawe');
    axios.put(`http://localhost:3005/photos/${req.body.id}/upvote`)
      .then(() => {
        res.status(204)
      })
      .catch(() => {
        res.status(500)
      });
    res.send('im back');
  }
}