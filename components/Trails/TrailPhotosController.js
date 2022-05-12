const test = () => {
  fetch('http://localhost:3000/api/photos/')
    .then((result) => {
    })
    .catch((err) => {
    });
};

const upvotePhoto = (id) => {
  fetch('/api/photos/', {
    method: 'PATCH',
    body: JSON.stringify({ id }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => {

    })
    .catch(() => {
    });
};

const uploadPhoto = (photo) => {
  fetch('/api/photos/', {
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
