import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/extensions
import sampleData from '../components/User/sampleData.js';
import { useAuth } from '../context/AuthContext';
// eslint-disable-next-line import/extensions
import UserPage from '../components/User/UserPage.js';

// getting userId from useAuth()

function User() {
  const [isLoading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const [backEndUser, setBackEndUser] = useState();
  const userId = currentUser?.id || 1;

  const userPhoto = currentUser.photo;
  const { displayName } = currentUser;

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/api/users/me?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        data.friends = data.friends || [];
        setLoading(false);
        setBackEndUser(data);
      })
      .catch((err) => { console.log(err); });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      { backEndUser && (
        <UserPage
          userData={sampleData}
          displayName={displayName}
          userPhoto={userPhoto}
          backEndUser={backEndUser}
        />
      )}
    </div>
  );
}

export default User;
