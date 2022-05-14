import axios from 'axios';

export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('🚀 ~ file: friends.js ~ line 4 ~ handler ~ req', JSON.parse(req.body));
    // res.status(201).send(req.body)
    axios
      .post('http://localhost:3005/friends/add', JSON.parse(req.body))
      .then((response) => {
        console.log(
          '🚀 ~ file: users.js ~ line 8 ~ handler ~ response',
          response.data,
        );
        res.status(200).send(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (req.method === 'DELETE') {
    console.log("🚀 ~ file: friends.js ~ line 34 ~ handler ~ req.body", req.body)
    req.body = JSON.parse(req.body)
    console.log("🚀 ~ file: friends.js ~ line 23 ~ handler ~ id ", req.body )
    
    axios
      .delete(`http://localhost:3005/friends/${JSON.parse(req.body.friend_Id)}/reject`)
      .then((response) => {
        console.log(
          '🚀 ~ file: users.js ~ line 8 ~ handler ~ response',
          response.data,
        );
        res.status(200).send(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
     
  }
}
