const test = () => {
  fetch('http://localhost:3000/api/photos/')
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const upvotePhoto = (id) => {
  console.log(id, 'inside upvotephoto')
  fetch(`/api/photos/`, {
    method: 'PATCH',
    body: JSON.stringify({ id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export {
  test, upvotePhoto,
};
