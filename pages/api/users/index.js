import axios from "axios";

export default function handler(req, res) {
  if (req.method === "PUT") {
    axios
      .patch("http://localhost:3005/users/connection", JSON.parse(req.body))
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
  } else if (req.method === "GET") {
    const userId = req.query.userId;

    axios
      .get(`http://localhost:3005/users/${userId}`)
      .then((response) => {
        console.log(response.data);
        res.status(200).send(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
