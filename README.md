<h1>Overview</h1>
Trail Companions is a full stack web application consisting of a client, server, database, and API created over a span of 7 days. This application utilizes Google Maps API, Google Calendars API, Firebase Authentication and AWS EC2 instances. Users can search for trails of any difficulty throughout the continent and find information including descriptions, ratings, and comments for each trail provided by the local community. Users may create their own profile page, bookmark trails, add trail photos, leave comments, and plan events with their friends and family.
<br>
<br>

[Click here to view the comprehensive readme for our API!](https://github.com/Klippan-BO/TC-API)

<h2>Who was this application built for?</h2>
<li>Experienced hikers</li>
<li>Beginners</li>
<li>Parents</li>
<li>Seniors</li>
<li>Event planners</li>

<h2>App Features</h2>
<li>Firebase Authentication</li>
<li>Google Maps trail finder</li>
<li>Search functionality</li>
<li>User profiles: recently visited trails and friends</li>
<li>Trail Page: description, photos, ratings, comments</li>
<li>Google Calendar invites</li>
<li>Leaderboard for top trails in your area</li>
<li>Mobile-compatibility</li>

<h2>Technologies Used</h2>

| Name | Purpose |
| --- | --- |
| [Node](https://nodejs.org/en/) | JavaScript Runtime Environment |
| [Express](https://expressjs.com/) | Back End Web Application Framework |
| [AWS](https://aws.amazon.com/) | Cloud-Computing Platform (EC2) |
| [PostgreSQL](https://www.postgresql.org/) | Relational database |
| [Google Maps API](https://developers.google.com/maps) | In-app map features |
| [Google Calendars API](https://developers.google.com/calendar/api) | In-app calendar/events features |
| [Firebase](https://firebase.google.com/) | Google Authentication |
| [Next.js](https://nextjs.org/) | Web Development Framework |
| [React](https://reactjs.org/) | Front-End UI Library |
| [Material UI](https://mui.com/) | Front-End UI Library |
| [ESLint](https://eslint.org/) | Code Quality [(Airbnb Style Guide)](https://github.com/airbnb/javascript) |
| [Figma](https://www.figma.com/) | Wireframe desiging |
| [Cloudinary](https://cloudinary.com/) | Image hosting for user uploads |

<h2>App Architecture</h2>

![Untitled Diagram drawio (11)](https://user-images.githubusercontent.com/97769405/169568270-3000f5d1-6466-4318-886c-ba6836da7a50.png)

<h2>Components</h2>

<h3>Login</h3>
<li>Google Authentication with Firebase</li>
<br>

![login](https://user-images.githubusercontent.com/97769405/168492637-c8cd17f2-8a34-4ebc-bdf7-7f6df76db4a5.gif)


<h3>Map</h3>
<li>Google Maps Integration</li>
<li>Pop-up modals for each trail</li>
<br>

![map](https://user-images.githubusercontent.com/97769405/168444660-d497dc8b-705c-42bc-8502-29a7a61aa31d.gif)

<h3>Leaderboard</h3>
<li>Top 5 Trails in your area</li>
<br>

![leaderboard](https://user-images.githubusercontent.com/97769405/168492645-7d72ab5f-1ac0-4618-b77c-ecf48917c6e2.gif)


<h3>Trail Photos</h3>
<li>Carousel and gallery</li>
<li>Auto-play feature</li>
<li>Photo upload with Cloudinary</li>
<br>


![photos](https://user-images.githubusercontent.com/97769405/168444718-015796f7-f0c2-4f23-aee1-5442362db3a0.gif)

<h3>Ratings</h3>
<li>Rate a trail based on overall rating, beauty, sunlight and difficulty</li>
<br>

![ratings](https://user-images.githubusercontent.com/97769405/168444844-12f7d8f6-bf88-427d-8346-9e66a1b078c1.gif)

<h3>Create Event & Minimap</h3>
<li>Google Calendars and Google Maps API integration</li>
<br>

![calendar and mini map](https://user-images.githubusercontent.com/97769405/168444853-647724d7-714a-4700-aa90-8647650be133.gif)

<h3>Comments Section</h3>
<li>Leave comments on a trail</li>
<br>

![comments](https://user-images.githubusercontent.com/97769405/168446130-fb30dddc-f82a-4403-8b64-02f883e01b9a.gif)


<h3>User Profiles</h3>
<li>Profile pictures and bio</li>
<br>

![image](https://user-images.githubusercontent.com/97769405/168460116-06b9c1d6-fe33-4118-a639-0f2e9678d862.png)


<h3>Notifications</h3>
<li>Incoming and outgoing friend requests</li>
<br>

![notifications](https://user-images.githubusercontent.com/97769405/168460130-687fac45-1057-4321-bfa2-3d7e9530cb33.gif)

<h3>Recently Visted Trails & Friends</h3>
<br>
<li>Includes trail ratings and user bios</li>

![friends and trials](https://user-images.githubusercontent.com/97769405/168460180-b9c5bfba-63f5-46ec-828c-60ffa6d4d501.gif)


<h2>Contributors</h2>

[**Jerremy Stroman**](https://github.com/jerremy777): Architech Owner, API, database

[**Justin Tang**](https://github.com/justintang510): Project Manager, trails, ratings, readme

[**Kyle Nissley**](https://github.com/knissley): UI Owner, login, authentication

[**Lawrence Malloy**](https://github.com/lcmalloy): dependencies, nav bar, map

[**Matt Pak**](https://github.com/pakman3590): map, search function

[**Pascal Bui**](https://github.com/RphPandan): trails, events, photos

[**Patrick Lee**](https://github.com/ptriklee): trails, comments, leaderboard

[**Shanshan Liu**](https://github.com/SHANSHANCODER): user profiles, notifications
