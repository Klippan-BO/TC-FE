/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Head from 'next/head';
import Container from '@mui/material/Container';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Link from 'next/link';
import PropTypes from 'prop-types';
import MyNotification from './MyNotification';
import MyTrails from './MyTrails';
import MyConnections from './MyConnections';
import style from '../../styles/user.module.css';

function UserPage({ backEndUser }) {
  const [openNotif, setOpenNotif] = useState(false);
  const [openTrails, setOpenTrails] = useState(false);
  const [openFriends, setOpenFriends] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(backEndUser);
  const [value, setValue] = useState(1);
  const myFriends = updatedUser.friends || [];

  const handleNotificationClick = () => {
    if (updatedUser.incoming_requests || updatedUser.outgoing_requests) {
      setOpenNotif(true);
    }
  };

  const closeNotif = () => {
    setOpenNotif(false);
  };
  const handleMyTrailsClick = (e) => {
    e.preventDefault();
    if (updatedUser.trails.length > 4) {
      setOpenTrails(true);
    }
  };

  const closeTrails = () => {
    setOpenTrails(false);
  };

  const handleMyFriendsClick = () => {
    if (updatedUser.friends.length > 4) {
      setOpenFriends(true);
    }
  };
  const closeFriends = () => {
    setOpenFriends(false);
  };

  const updateMyNotif = () => {
    fetch(`http://localhost:3000/api/users/me?userId=${updatedUser.id}`)
      .then((res) => res.json())
      .then((data) => {
        data.friends = data.friends || [];
        setUpdatedUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setValue(value + 1);
  };

  return (
    <div>
      <Head>
        <title>TC - User</title>
      </Head>
      <Container>
        <div className={style.container}>
          <div className={style.parentCont}>
            <img
              src={updatedUser.profile_image}
              className={style.userImg}
              alt="User profile"
            />

            <CircleNotificationsIcon
              style={{ fontSize: 50 }}
              onClick={handleNotificationClick}
              className={
                updatedUser.incoming_requests || updatedUser.outgoing_requests
                  ? style.notificationBtnActive
                  : style.notificationBtnNoneActive
              }
            />

            <MyNotification
              requests={updatedUser.incoming_requests}
              requesting={updatedUser.outgoing_requests}
              openNotif={openNotif}
              closeNotif={closeNotif}
              updateMyNotif={updateMyNotif}
              value={value}
            />
          </div>
          <div className={style.userName}>{updatedUser.username}</div>
          {/* <div className={style.userCity}>{userData.userProfile.city}</div>
          <div className={style.userFriends}>
            I HAVE {userData.userProfile.friends} FRIENDS
          </div> */}
          <div className={style.description}>{updatedUser.bio}</div>
          <MyTrails
            openTrails={openTrails}
            closeTrails={closeTrails}
            my_trails={updatedUser.trails}
          />
          <div style={{ minHeight: '200px' }}>
            <div className={style.trailText}>Recently Visited Trails</div>
            <div className={style.trailsCont}>
              {updatedUser.trails
                && updatedUser.trails.map((trail, index) => {
                  if (index < 4) {
                    return (
                      <Link
                        href={{
                          pathname: '/trails/[id]',
                          query: { id: trail.id },
                        }}
                      >
                        <div className={style.imgBox} key={trail.name} alt={trail.name}>
                          <img
                            className={style.myTrailImg}
                            src={trail.photos[0].url}
                            alt={trail}
                          />
                          <span className={style.avatarText}>{trail.name}</span>
                        </div>
                      </Link>
                    );
                  }
                })}
              {updatedUser.trails && updatedUser.trails.length > 4 ? (
                <div
                  className={style.moreTrailBtn}
                  onClick={handleMyTrailsClick}
                  aria-hidden="true"
                >
                  <span>See</span>
                  <span>More</span>
                  <span>Trails</span>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
          <div style={{ minHeight: '200px' }}>
            <div className={style.friendsText}>My Friends</div>
            <div className={style.trailsCont
              //friendsCont
              } //style={{ paddingLeft: '1em' }}
              >
              {myFriends
                && myFriends.map((friend, index) => {
                  if (index < 4) {
                    return (
                      <div className={style.
                      //nameBox
                      imgBox} key={friend.username}>
                        <img
                          className={style.
                            //friendImg
                          myTrailImg}
                          src={friend.profile_image}
                          alt="user"
                        />
                        <span className={style.avatarText}>
                          {friend.username}
                        </span>
                      </div>
                    );
                  }
                })}
              {myFriends && myFriends.length > 4 ? (
                <div
                  className={style.moreFriendsBtn}
                  onClick={handleMyFriendsClick}
                  aria-hidden="true"
                >
                  <span>See</span>
                  <span>Friends</span>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
          <MyConnections
            openFriends={openFriends}
            closeFriends={closeFriends}
            myFriends={myFriends}
          />
        </div>
      </Container>
    </div>
  );
}

export default UserPage;
MyTrails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  backEndUser: PropTypes.object.isRequired,
};
