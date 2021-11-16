
import React from 'react';





function App() {
   const url = `https://twitter.com/${user.twitterUsername}`;

const user = {
                  name: 'Chris on Code',
                  location: 'Las Vegas',
                  foodType: 'Everything',
                    age: 28,
                    likes: 'Coding into the wee hours of the morning',
                    twitterUsername: 'chrisoncode',
                    avatar:
                    'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
                      }

  return (

    <div className="App">
        
      <div className="user-detail">
        {user.name}
        <img src={user.avatar} alt="" />
        <h3>{user.name}</h3>
        <p>Location {user.location}</p>
        <p>Eats {user.foodType}</p>
        <p>Age {user.age}</p>
        <p>Likes {user.likes}</p>
        <p><a href={`https://twitter.com/@${user.twitterUsername}`}>@{user.twitterUsername}</a></p>
      </div>
    </div>
  );
}

export default App;