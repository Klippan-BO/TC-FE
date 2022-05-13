import axios from "axios";

const handler = async (req, res) => {
  await axios
    .get(`http://localhost:3005/users/me?userId=${req.query.userId}`)
    .then(({ data }) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
export default handler;
