import axios from "axios";

const handler = async (req, res) => {
console.log("🚀 ~ file: index.js ~ line 4 ~ handler ~ eq", req.query)
//res.status(200).send("/me is working");
  // try {
  //   const result = await axios({
  //     method: "GET",
  //     url: "http://localhost:3005/users/me",
  //   });
  //   res.status(200).send(result.data);
  //   console.log(
  //     "🚀 ~ file: index.js ~ line 10 ~ handler ~ result.data",
  //     result.data
  //   );
  // } catch (error) {
  //   res.status(450).json(error);
  // }

  // const response = await fetch(`http://localhost:3005/users/me`)
  // const data = await response.json()
  // return data

  axios
    .get(`http://localhost:3005/users/me?userId=${req.query.userId}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
export default handler;
