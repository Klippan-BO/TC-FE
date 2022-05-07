module.exports = {

  trail1: {
    name: 'Sunny trail',
    photos: [
      'http://www.trailstompers.com/uploads/2/6/8/6/2686411/9693769.jpg',
      'http://www.trailstompers.com/uploads/2/6/8/6/2686411/5328225.jpg?327',
      'http://www.trailstompers.com/uploads/2/6/8/6/2686411/2847590_orig.jpg',
      'http://www.trailstompers.com/uploads/2/6/8/6/2686411/326294_orig.jpg',
      'http://www.trailstompers.com/uploads/2/6/8/6/2686411/4025080_orig.jpg',
      'http://www.trailstompers.com/uploads/2/6/8/6/2686411/6829184_orig.jpg',
    ],
    description: 'Yo this trail is lit dude!',
    ratings: {
      average: 4.5,
      difficulty: 3.2,
      nature: 2.9,
      beauty: 1,
    },
    comments: [
      {
        username: 'Justin',
        body: 'This trail is amazing!!!',
        timestamp: Date.now(),
      },
      {
        username: 'Patrick',
        body: 'This trail sucks!!!',
        timestamp: Date.now(),
      },
    ],
  },

};
