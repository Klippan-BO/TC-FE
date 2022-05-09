module.exports = {
  userProfile: {
    userID: 123,
    username: 'Clone Tristen Urban',
    city: 'San Francisco',
    photo: 'https://ca.slack-edge.com/T0455847Q-U03B0CLKMPT-d8a236d12882-192',
    friends: 3,
    friendsRequest: 2,
    description:
      'I love hiking and hope to meet people with similar interest!I love hiking and hope to meet people with similar interest!I love hiking and hope to meet people with similar interest!I love hiking and hope to meet people with similar interest!',
    // can be seperate data file or inside the same data file
    my_trails: [
      {
        trailID: 123,
        trail_name: 'Sunny trail',
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
      },
      {
        trailID: 234,
        trail_name: 'shady trail',
        photos: [
          'https://preview.redd.it/syytq2n53wl81.jpg?width=960&crop=smart&auto=webp&s=e8623a9525cc0f6a75d962c8e05776e119b626a2',
          'https://parks.smcgov.org/sites/parks.smcgov.org/files/styles/flexslider_full/public/Wunderlich%20-%20Oak%20Trail-003.jpg?itok=aivJ5XNV',
          'https://parks.smcgov.org/sites/parks.smcgov.org/files/styles/scale_800_wide/public/Skyline-Trail-Photo-2.jpg?itok=0S0-FBtE',
          'https://parks.smcgov.org/sites/parks.smcgov.org/files/styles/scale_800_wide/public/Bear-Gulch-Photo-1.jpg?itok=eHsLJyxw',
          'https://www.verywellmind.com/thmb/ciMKi3Kbt6WjkSJZWNNKZv8ufkA=/1715x1286/smart/filters:no_upscale()/low-angle-view-of-building-against-cloudy-sky-750507801-5bc50e0b46e0fb0058c9ef64.jpg',
        ],
        description: 'this trail is the best',
        ratings: {
          average: 5,
          difficulty: 2,
          nature: 5,
          beauty: 5,
        },
      },
      {
        trailID: 345,
        trail_name: 'ocean side',
        photos: [
          'https://www.rpvca.gov/ImageRepository/Document?documentID=12712',
          'https://www.rpvca.gov/ImageRepository/Document?documentID=12712',
        ],
        description: 'enjoy the ocean view',
        ratings: {
          average: 2,
          difficulty: 1,
          nature: 3,
          beauty: 4,
        },
      },
      {
        trailID: 456,
        trail_name: 'mountain side',
        photos: [
          'https://www.planetware.com/wpimages/2019/10/montana-best-hiking-trails-glacier-national-park-highline-trail.jpg',
          'https://www.planetware.com/wpimages/2021/08/montana-top-rated-hiking-trails-highline-trail-glacier-hikers.jpg',
        ],
        description: 'enjoy the canyon view',
        ratings: {
          average: 2,
          difficulty: 1,
          nature: 3,
          beauty: 4,
        },
      },
      {
        trailID: 567,
        trail_name: 'river side',
        photos: [
          'https://www.atlantatrails.com/wp-content/uploads/2018/10/chattooga-river-trail-01-770x515@2x.jpg',
          'https://www.atlantatrails.com/wp-content/uploads/2017/09/bartram-trail-chattooga-river-trail-763x509@2x.jpg',
        ],
        description: 'enjoy the water and forest',
        ratings: {
          average: 2,
          difficulty: 1,
          nature: 3,
          beauty: 4,
        },
      },
    ],
    // can be seperate data
    friendsList: [
      {
        userID: 234,
        username: 'Clone Matthew P',
        photo:
          'https://ca.slack-edge.com/T0455847Q-U033QQYQC6T-a512c52d82cb-512',
        city: 'Paris',
        description:
          'I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!I love San Diego!',
      },
      {
        userID: 23445,
        username: 'Clone Jerremy S',
        photo:
          'https://ca.slack-edge.com/T0455847Q-U033YPG0WES-4e3a7b1f236b-512',
        city: 'New York',
        description:
          'Can hold my breath for 10 minutes.Can hold my breath for 10 minutes.Can hold my breath for 10 minutes.Can hold my breath for 10 minutes.Can hold my breath for 10 minutes.Can hold my breath for 10 minutes.',
      },
      {
        userID: 345,
        username: 'Clone Patric L',
        photo:
          'https://ca.slack-edge.com/T0455847Q-U033QQS7UBZ-d40699909820-512',
        city: 'Tokyo',
        description:
          'Love to explore great food.Love to explore great food.Love to explore great food.Love to explore great food.Love to explore great food.Love to explore great food.Love to explore great food.Love to explore great food.Love to explore great food.Love to explore great food.',
      },

      {
        userID: 456,
        username: 'Peter Griffin',
        photo:
          'https://www.liveabout.com/thmb/PEVrAKXkjPymq-uDZYroL3F8sDk=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/peter_2008_v2F_hires1-56a00f083df78cafda9fdcb6.jpg',
        city: 'Quahog',
        description:
          'He spends his free time drinking at the Drunken Clam with his buddies, Quagmire, Cleveland, and Joe. Peter has worked for various companies, including the Pawtucket Patriot Brewery and the Happy-Go-Lucky Toy Factory (no doubt modeled after Hasbro, which is headquartered in Providence, Rhode Island). Also, Peter has a long history of fighting with a giant yellow chicken.',
      },

      {
        userID: 567,
        username: 'Lois Griffin',
        photo:
          'https://www.liveabout.com/thmb/5cgVX7Lg0hZ8igOlJLuJ0Sm9jf0=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fGuy2006_Lois_f-56a00b003df78cafda9fc743.jpg',
        city: 'Quahog',
        description:
          "Lois is an accomplished piano player and singer. She's considered to be very attractive, which is proven by Quagmire's not-so-subtle advances toward her as well as her short-lived career as a model. She may be more sophisticated than Peter, but we have seen occasionally that she shares his low-brow humor and lustfulness.",
      },
    ],
    // others requesting to be friend with user
    friendsRequestData: [
      {
        userID: 678,
        username: 'Clone Justin T',
        photo:
          'https://ca.slack-edge.com/T0455847Q-U034V5XHGBA-f7833d13c0b4-512',
        city: 'San Francisco',
        description:
          'Just want to chill and watch Netflix.Just want to chill and watch Netflix.Just want to chill and watch Netflix.Just want to chill and watch Netflix.',
      },
      {
        userID: 789,
        username: 'Clone Kyle N',
        photo:
          'https://ca.slack-edge.com/T0455847Q-U033YP64YH4-2e2f424679d2-512',
        city: 'San Francisco',
        description:
          'Love to hang out with people who like hiking.Love to hang out with people who like hiking.Love to hang out with people who like hiking.Love to hang out with people who like hiking.',
      },
    ],
    // user requests to others to be friends
    requestingFriendData: [
      {
        userID: 1234,
        username: 'Clone Lawrence M',
        photo:
          'https://ca.slack-edge.com/T0455847Q-U034V5SF77A-2275d091a370-512',
        city: 'San Francisco',
        description:
          'Hiking is my life.Hiking is my life.Hiking is my life.Hiking is my life.Hiking is my life.',
      },
    ],
  },
};
