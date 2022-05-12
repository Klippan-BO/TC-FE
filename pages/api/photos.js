import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'PATCH') {
    await axios.put(`http://localhost:3005/photos/${req.body.id}/upvote`)
      .then(() => res.status(202).json({ message: 'content updated' }))
      .catch(() => res.status(500).json({ message: 'content not updated' }));
  }

  if (req.method === 'POST') {
    await axios.post('http://localhost:3005/photos/', req.body.photo)
      .then((result) => {
        res.status(202).json({ message: 'photo posted', result });
      })
      .catch(() => {
        res.status(500).json({ message: 'photo not posted' });
      });
  }
}
