/* eslint-disable react/jsx-filename-extension */
import { SvgIcon } from '@mui/material';
import React, { useState } from 'react';
import Head from 'next/head';
import Container from '@mui/material/Container';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Badge from '@mui/material/Badge';
import Link from 'next/link';
import MyNotification from './MyNotification';
import MyTrails from './MyTrails';
import MyConnections from "./myConnections";
import style from '../../styles/user.module.css';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import sampleData from "./sampleData";

function UserPage({
  backEndUser,
}) {
  const [openNotif, setOpenNotif] = useState(false);
  const [openTrails, setOpenTrails] = useState(false);
  const [openFriends, setOpenFriends] = useState(false);
  const [updatedUser, setUpdatedUser] =useState(backEndUser)
  const [value, setValue] = useState(1);
  const myFriends = updatedUser.friends || [];
  const [calendarDrawer, setCalendarDrawer] = useState(false)

  const toggleDrawer = () => {
    setCalendarDrawer((prev) => !prev);
  };

  const handleNotificationClick = () => {
    if(updatedUser.incoming_requests ||updatedUser.outgoing_requests ) {
      setOpenNotif(true);}
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

  const updateMyNotif=()=>{
    fetch(`http://localhost:3000/api/users/me?userId=${updatedUser.id}`)
      .then((res) => res.json())
      .then((data) => {
        data.friends = data.friends || [];
        setUpdatedUser(data);
      })
      .catch((err) => { console.log(err); });
      setValue(value+1)
  }

  return (
    <div>
      <Head>
        <title>TC - User</title>
      </Head>
      <Container>
        <div className={style.container}>
          <div className={style.parentCont}>
            <img src={updatedUser.profile_image} className={style.userImg} />

            <CircleNotificationsIcon
              style={{ fontSize: 50 }}
              onClick={handleNotificationClick}
              className={
                (updatedUser.incoming_requests || updatedUser.outgoing_requests)
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
          <div className={style.trailText}>Recently Visited Trails</div>
          <div className={style.trailsCont}>
            {updatedUser.trails &&
              updatedUser.trails.map((trail, index) => {
                if (index < 4) {
                  return (
                    <Link
                      href={{
                        pathname: "/trails/[id]",
                        query: { id: trail.id },
                      }}
                    >
                      <div className={style.imgBox} key={index}>
                        <img
                          className={style.myTrailImg}
                          src={trail.photos[0].url}
                        />
                        <span>{trail.name}</span>
                      </div>
                    </Link>
                  );
                }
              })}
            {/* {updatedUser.trails && updatedUser.trails.length > 4 ?
              ( <div className={style.moreTrailBtn} onClick={handleMyTrailsClick}>
                  <p>
                    See
                    <br />
                    More <br>
                    Trails
                  </p>
                </div> )
              : null
            } */}
          </div>
          <div className={style.friendsText}>My Friends</div>
          <div className={style.friendsCont}>
            {myFriends &&
              myFriends.map((friend, index) => {
                if (index < 4) {
                  return (
                    <div className={style.nameBox} key={index}>
                      <img
                        className={style.friendImg}
                        src={friend.profile_image}
                      />
                      <span>{friend.username}</span>
                    </div>
                  );
                }
              })}
            {myFriends && myFriends.length > 4 ? (
              <div
                className={style.moreFriendsBtn}
                onClick={handleMyFriendsClick}
              >
                <p>
                  See
                  <br />
                  Friends
                </p>
              </div>
            ) : (
              <div />
            )}
          </div>
          <MyConnections
            openFriends={openFriends}
            closeFriends={closeFriends}
            myFriends={myFriends}
          />
        </div>
      </Container>
      <Drawer
        anchor='bottom'
        open={calendarDrawer}
        onClose={toggleDrawer(false)}
      >
        <Box sx={{width: '400px', height: '400px', bgColor: 'red' }} />
    </Drawer>
    </div>
  );
}

export default UserPage;


// "id": 5,
// "name": "Steven's Canyon Trail",
// "short_description": "Gummies wafer marshmallow liquorice chupa chups.",
// "photos": [
//     {
//         "url": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyMDY3MDM&ixlib=rb-1.2.1&q=80&w=1080"