import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/extensions
import sampleData from '../components/User/sampleData.js';
import { useAuth } from '../context/AuthContext';
// eslint-disable-next-line import/extensions
import UserPage from '../components/User/UserPage.js';
import LoadingScreen from '../components/LoadingScreen';

// getting userId from useAuth()

function User() {
  const [isLoading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const [backEndUser, setBackEndUser] = useState();
  const userId = currentUser?.id;

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/api/users/me?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🚀 ~ file: [username].js ~ line 22 ~ .then ~ data", data);
        data.friends = data.friends || [];
        setTimeout(() => {
          setLoading(false);
          setBackEndUser(data);
        }, 75);
      })
      .catch((err) => { console.log(err); });
  }, []);

  if (isLoading) return <LoadingScreen />;

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
}

export default User;