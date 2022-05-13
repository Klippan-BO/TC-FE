import axios from 'axios';

export default async function handler(req, res) {
  console.log(req.body)
  await axios.post(`http://localhost:3005/rate/add`, req.body)
    .catch((err) => {
      console.log(err);
    });
}