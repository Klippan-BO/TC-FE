import React, { useEffect, useState, useRef } from 'react';
// eslint-disable-next-line import/extensions
import sampleData from '../components/User/sampleData.js';
import { useAuth } from '../context/AuthContext';
// eslint-disable-next-line import/extensions
import UserPage from '../components/User/UserPage.js';

// getting userId from useAuth()

function User() {
  const { currentUser } = useAuth();
  const [backEndUser, setBackEndUser] = useState();
  const userId = currentUser?.id;
  const userSet = useRef(false);

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/me?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        userSet.current = true;
        // data.friends = data.friends || [];
        setBackEndUser(data);
      })
      .catch((err) => { console.log(err); });
  }, []);

  if (userSet.current) {
    return (
      <div>
        { backEndUser && (
          <UserPage
            userData={sampleData}
            backEndUser={backEndUser}
          />
        )}
      </div>
    );
  } else {
    return <div> helloWorld!</div>
  }

}

export default User;
