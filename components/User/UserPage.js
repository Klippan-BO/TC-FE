/* eslint-disable react/jsx-filename-extension */
import { SvgIcon } from "@mui/material";
import React, { useState } from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import MyNotification from "./MyNotification";
import MyTrails from "./MyTrails";
import MyConnections from "./myConnections";
import style from "../../styles/user.module.css";
import Badge from "@mui/material/Badge";
import sampleData from "./sampleData";
import Link from "next/link";

function UserPage({ userData,loggedInUserData }) {
  const [openNotif, setOpenNotif] = useState(false);
  const [openTrails, setOpenTrails] = useState(false);
  const [openFriends, setOpenFriends] = useState(false);

  const handleNotificationClick = () => {
    setOpenNotif(true);
  };

  const closeNotif = () => {
    setOpenNotif(false);
  };
  const handleMyTrailsClick = (e) => {
    e.preventDefault();
    if (userData.userProfile.my_trails.length > 4) {
      setOpenTrails(true);
    }
  };

  const closeTrails = () => {
    setOpenTrails(false);
  };

  const handleMyFriendsClick = () => {
    if (userData.userProfile.friendsList.length > 4) {
      setOpenFriends(true);
    }
  };
  const closeFriends = () => {
    setOpenFriends(false);
  };

  return (
    
    <div>
      <Head>
        <title>TC - User</title>
      </Head>
      <Container>
        <div className={style.container}>
          <div className={style.parentCont}>
            <img src={loggedInUserData.profile_image} className={style.userImg} />

            <CircleNotificationsIcon
              style={{ fontSize: 50 }}
              onClick={handleNotificationClick}
              className={
                userData.userProfile.friends
                  ? style.notificationBtnActive
                  : style.notificationBtnNoneActive
              }
            />

            <MyNotification
              requests={userData.userProfile.friendsRequestData}
              requesting={userData.userProfile.requestingFriendData}
              openNotif={openNotif}
              closeNotif={closeNotif}
            />
          </div>
          <div className={style.userName}>{loggedInUserData.username}</div>
          {/* <div className={style.userCity}>{userData.userProfile.city}</div> 
          <div className={style.userFriends}>
            I HAVE {userData.userProfile.friends} FRIENDS
          </div> */}
          <div className={style.description}>
            {loggedInUserData.bio}
          </div>
          <MyTrails
            openTrails={openTrails}
            closeTrails={closeTrails}
            my_trails={loggedInUserData.trails}
          />
          <div className={style.trailText}>Recently Visited Trails</div>
          <div className={style.trailsCont}>
            {loggedInUserData.trails &&
              loggedInUserData.trails.map((trail, index) => {
                if (index < 4) {
                  return (
                    <Link href={{pathname:'/trails/[id]',query:{id:trail.id} }} >
                    <div className={style.imgBox} key={index}>
                      <img className={style.myTrailImg} src={trail.photos[0].url} />
                      <span>{trail.name}</span>
                    </div>
                    </Link>
                  );
                }
              })}
            {
            loggedInUserData.trails.length > 4  ? 
            (
              <div className={style.moreTrailBtn} onClick={handleMyTrailsClick}>
                <p>
                  See
                  <br />
                  More <br/>
                  Trails
                </p>
              </div>
            ) 
            : (
              <div />)
              }
          </div>
          <div className={style.friendsText}>My Friends</div>
          <div className={style.friendsCont}>
            {sampleData.userProfile.friendsList &&
              sampleData.userProfile.friendsList.map((friend, index) => {
                if (index < 4) {
                  return (
                    <div className={style.nameBox} key={index}>
                      <img className={style.friendImg} src={friend.photo} />
                      <span>{friend.username}</span>
                    </div>
                  );
                }
              })}
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
          </div>
          <MyConnections
            openFriends={openFriends}
            closeFriends={closeFriends}
            myFriends={sampleData.userProfile.friendsList}
          />
        </div>
      </Container>
    </div>
  );
  
}

export default UserPage;
