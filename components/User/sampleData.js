module.exports = {
  userProfile: {
    name: "Clone Tristen Urban",
    city: "San Francisco",
    photo: "https://ca.slack-edge.com/T0455847Q-U03B0CLKMPT-d8a236d12882-192",
    friends: 3,
    friendsRequest: 2,
    description:
      "I love hiking and hope to meet people with similar interest!I love hiking and hope to meet people with similar interest!I love hiking and hope to meet people with similar interest!I love hiking and hope to meet people with similar interest!",
    //can be seperate data file or inside the same data file
    my_trails: [
      {
        trail_name: "Sunny trail",
        photos: [
          "http://www.trailstompers.com/uploads/2/6/8/6/2686411/9693769.jpg",
          "http://www.trailstompers.com/uploads/2/6/8/6/2686411/5328225.jpg?327",
          "http://www.trailstompers.com/uploads/2/6/8/6/2686411/2847590_orig.jpg",
          "http://www.trailstompers.com/uploads/2/6/8/6/2686411/326294_orig.jpg",
          "http://www.trailstompers.com/uploads/2/6/8/6/2686411/4025080_orig.jpg",
          "http://www.trailstompers.com/uploads/2/6/8/6/2686411/6829184_orig.jpg",
        ],
        description: "Yo this trail is lit dude!",
        ratings: {
          average: 4.5,
          difficulty: 3.2,
          nature: 2.9,
          beauty: 1,
        },
      },
      {
        trail_name: "shady trail",
        photos: [
          "https://preview.redd.it/syytq2n53wl81.jpg?width=960&crop=smart&auto=webp&s=e8623a9525cc0f6a75d962c8e05776e119b626a2",
          "https://parks.smcgov.org/sites/parks.smcgov.org/files/styles/flexslider_full/public/Wunderlich%20-%20Oak%20Trail-003.jpg?itok=aivJ5XNV",
          "https://parks.smcgov.org/sites/parks.smcgov.org/files/styles/scale_800_wide/public/Skyline-Trail-Photo-2.jpg?itok=0S0-FBtE",
          "https://parks.smcgov.org/sites/parks.smcgov.org/files/styles/scale_800_wide/public/Bear-Gulch-Photo-1.jpg?itok=eHsLJyxw",
          "https://www.verywellmind.com/thmb/ciMKi3Kbt6WjkSJZWNNKZv8ufkA=/1715x1286/smart/filters:no_upscale()/low-angle-view-of-building-against-cloudy-sky-750507801-5bc50e0b46e0fb0058c9ef64.jpg",
        ],
        description: "this trail is the best",
        rating: {
          average: 5,
          difficulty: 2,
          nature: 5,
          beauty: 5,
        },
      },
    ],
    //can be seperate data
    friendList: [
      {
        name: "Clone Matthew P",
        photo:
          "https://ca.slack-edge.com/T0455847Q-U033QQYQC6T-a512c52d82cb-512",
        city: "Paris",
        description:
          "I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!",
      },
      {
        name: "Clone Jerremy S",
        photo:
          "https://ca.slack-edge.com/T0455847Q-U033YPG0WES-4e3a7b1f236b-512",
        city: "New York",
        description:
          "Can hold my breath for 10 minutes.Can hold my breath for 10 minutes.Can hold my breath for 10 minutes.Can hold my breath for 10 minutes.Can hold my breath for 10 minutes.Can hold my breath for 10 minutes.",
      },
      {
        name: "Clone Patric L",
        photo:
          "https://ca.slack-edge.com/T0455847Q-U033QQS7UBZ-d40699909820-512",
        city: "Tokyo",
        description:
          "Love to explore great food.Love to explore great food.Love to explore great food.Love to explore great food.Love to explore great food.Love to explore great food.Love to explore great food.Love to explore great food.Love to explore great food.Love to explore great food.",
      },
    ],
    //others requesting to be friend with user
    friendsRequestData: [
      {
        name: "Clone Justin T",
        photo:
          "https://ca.slack-edge.com/T0455847Q-U034V5XHGBA-f7833d13c0b4-512",
        city: "San Francisco",
        description:
          "Just want to chill and watch Netflix.Just want to chill and watch Netflix.Just want to chill and watch Netflix.Just want to chill and watch Netflix.",
      },
      {
        name: "Clone Kyle N",
        photo:
          "https://ca.slack-edge.com/T0455847Q-U033YP64YH4-2e2f424679d2-512",
        city: "San Francisco",
        description:
          "Love to hang out with people who like hiking.Love to hang out with people who like hiking.Love to hang out with people who like hiking.Love to hang out with people who like hiking.",
      },
    ],
    //user requests to others to be friends
    requestingFriendData: [
      {
        name: "Clone Lawrence M",
        photo:
          "https://ca.slack-edge.com/T0455847Q-U034V5SF77A-2275d091a370-512",
        city: "San Francisco",
        description:
          "Hiking is my life.Hiking is my life.Hiking is my life.Hiking is my life.Hiking is my life.",
      },
    ],
  },
};
