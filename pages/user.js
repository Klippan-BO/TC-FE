import React from 'react';
import sampleData from '../components/User/sampleData.js';

// eslint-disable-next-line import/extensions
import UserPage from '../components/User/index.js';

function User() {
  return (
    <div>
      <UserPage userData={sampleData}/>
    </div>
  );
}
export default User;
