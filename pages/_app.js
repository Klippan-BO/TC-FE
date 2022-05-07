import React, { useState } from 'react';
import { UserInfoContext } from '../context/userInfoContext';
import '../styles/globals.css';
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  const [userInfo, setUserInfo] = useState({
    displayName: null,
    email: null,
  });

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo}}>
      <div className='page_container'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </UserInfoContext.Provider>
  )
}

export default MyApp
