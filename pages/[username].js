import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/extensions
import sampleData from '../components/User/sampleData.js';
import { useAuth } from '../context/AuthContext';
// eslint-disable-next-line import/extensions
import UserPage from '../components/User/UserPage.js';

// getting userId from useAuth()

function User() {
  const [isLoading, setLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const { currentUser } = useAuth();
  const [backEndUser, setBackEndUser] = useState({});

  const userId = currentUser.id || 1;
  const userPhoto = currentUser.photo;
  const { displayName } = currentUser;

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/api/users?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setLoggedInUser(data);
        setLoading(false);
      })
      .catch((err) => { console.log('🚀 ~ file: trail.js ~ line 27 ~ err', err); });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/me?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setBackEndUser(data);
  
      
      })
      .catch((err) => { console.log(err); });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      { (loggedInUser && backEndUser) && (<UserPage userData={sampleData} displayName={displayName} userPhoto={userPhoto} loggedInUserData={loggedInUser} backEndUser={backEndUser} />)}
    </div>
  );
}
export default User;
