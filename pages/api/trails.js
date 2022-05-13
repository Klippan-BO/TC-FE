import axios from 'axios';

export default async function handler(req, res) {
  await axios.get(`http://localhost:3005/trails/${req.query.id}`)
    .then(({ data }) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
  if (req.method === 'POST') {
    console.log('req body here', req.body)
    console.log('comment here', req.body.comment)
    axios.post(`http://localhost:3005/comments/${req.body.comment.trail_id}/add`, req.body.comment)
      .then((data) => {
        res.status(201).json({ data });
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  }
}
