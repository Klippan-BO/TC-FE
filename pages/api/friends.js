import axios from "axios";

export default function handler(req, res) {
console.log("🚀 ~ file: friends.js ~ line 4 ~ handler ~ req", JSON.parse(req.body))
// res.status(201).send(req.body)
    
  axios
    .post("http://localhost:3005/friends/add", JSON.parses(req.body))
    .then((response) => {
      console.log(
        "🚀 ~ file: users.js ~ line 8 ~ handler ~ response",
        response.data
      );
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
