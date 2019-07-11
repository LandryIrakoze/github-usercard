/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/*   REFACTOR THIS USING CHAINED PROMISES  */

//FETCH USER INFO + CREATE CARD
axios.get('https://api.github.com/users/LandryIrakoze')
  .then(data => {
    const userInfo = data.data;
    const element = userCard(userInfo);
    cards.appendChild(element);
  })
  .catch(error => {
    console.log('Woops something is broken on our end, try again later', error)
  })

axios.get('https://api.github.com/users/LandryIrakoze/followers')
  .then(data => {
    const followerData = data.data;
    const followerArray = followerData.map(user => user.login);
    console.log(followerArray);
  })
  .catch(error => {
    console.log('Woops something is broken on our end, try again later', error)
  })
//FOR EACH FOLLOWER, FOLLOW ID, TO GET TO GITHUB USER PAGE TO GET EXTRA DATA
//MAYBE ADD IT TO AN ARRAY AT FIRST???
//FETCH FOLLOWER INFO + CREATE CARDS
// axios.get('https://api.github.com/users/LandryIrakoze/followers')
//   .then(data => {
//     const followers = data.data;
//     followers.forEach(user => {
//       cards.appendChild(userCard(user));  
//     })
//   })
//   .catch(error => {
//     console.log('Woops something is broken on our end, try again later', error)
//   })

// const followersArray = [];

// axios.get('https://api.github.com/users/LandryIrakoze/followers')
//   .then(data => {
//     const followers = data.data;
//     followers.forEach(user => {
//       // const followerData = 
//       console.log(user.login);
//       const followerData = `https://api.github.com/users/${user.login}`;
//     })
//   })
//   .catch(error => {
//     console.log('Woops something is broken on our end, try again later', error)
//   })

// const followersArray = [];


/*  ADD CALENDAR  */

// CREATE CARD FUNCTION 
const userCard = (data) => {
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  img.src = `${data.avatar_url}`;
  profileLink.href = `https://github.com/${data.login}`;

  name.textContent = `${data.login}`;
  userName.textContent = `${data.login}`;
  location.textContent = `${data.location}`;
  profile.textContent = 'Profile:';
  profileLink.textContent = `https://github.com/${data.login}`;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `${data.bio}`;

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  profile.appendChild(profileLink);

  if(data.bio !== null) {
    cardInfo.appendChild(bio);
  }

  if(data.location !== null) {
    cardInfo.appendChild(location);
  }

  console.log(card);
  return card;
}
const cards = document.querySelector('.cards');



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
