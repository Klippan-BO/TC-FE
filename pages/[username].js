import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/extensions
import sampleData from '../components/User/sampleData.js';

// eslint-disable-next-line import/extensions
import UserPage from '../components/User/UserPage.js';

// getting userId from useAuth()
const userId = 1;

function User() {
  const [isLoading, setLoading] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState('');
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

  if (isLoading) return <p>Loading...</p>
 
  return (
    <div>
      { loggedInUser && (<UserPage userData={sampleData} loggedInUserData={loggedInUser} /> )}
    </div>
  );
}
export default User;
