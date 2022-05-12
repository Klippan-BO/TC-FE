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
  })
    .then((result) => {

    })
    .catch((err) => {
      console.log(err);
    });
};

const uploadPhoto = (photo) => {
  fetch(`/api/photos/`, {
    method: 'POST',
    body: JSON.stringify({ photo }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export {
  test, upvotePhoto, uploadPhoto,
};
