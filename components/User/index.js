/* eslint-disable react/jsx-filename-extension */
import { SvgIcon } from "@mui/material";
import React, { useState } from "react";
import Head from "next/head";

import Container from "@mui/material/Container";
import MyNotification from "./MyNotification";
import MyTrails from "./MyTrails";
import MyConnections from "./myConnections";
import style from "../../styles/user.module.css";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

import sampleData from "./sampleData";

function UserPage({ userData }) {
  const [openNotif, setOpenNotif] = useState(false);

  const handleNotificationClick = () => {
    setOpenNotif(true)
  };

  const closeNotif=()=>{
    setOpenNotif(false)
  }
  return (
    <div>
      <Head>
        <title>TC - User</title>
      </Head>
      <Container>
        <div className={style.container}>
          <div className={style.parentCont}>
            <img src={userData.userProfile.photo} className={style.userImg} />
            <CircleNotificationsIcon
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
          <div className={style.userName}>{userData.userProfile.name}</div>
          <div className={style.userCity}>{userData.userProfile.city}</div>
          <div className={style.userFriends}>
            I HAVE {userData.userProfile.friends} FRIENDS
          </div>
          <div className={style.description}>
            {userData.userProfile.description}
          </div>
          <div className={style.trailText}>Recently Visited Trails</div>
          <div className={style.trailsCont}>
            {sampleData.userProfile.my_trails &&
              sampleData.userProfile.my_trails.map((trail, index) => {
                if (index < 4) {
                  return (
                    <div className={style.imgBox} key={index}>
                      <img className={style.myTrailImg} src={trail.photos[0]} />
                      <span>{trail.trail_name}</span>
                    </div>
                  );
                }
              })}
            <div className={style.moreTrailBtn}>
              <p>
                See<br></br>More <br></br>Trails
              </p>
            </div>
          </div>
          <div className={style.friendsText}>My Friends</div>
          <div className={style.friendsCont}>
            {sampleData.userProfile.friendList &&
              sampleData.userProfile.friendList.map((friend, index) => {
                if (index < 4) {
                  return (
                    <div className={style.nameBox} key={index}>
                      <img className={style.friendImg} src={friend.photo} />
                      <span>{friend.name}</span>
                    </div>
                  );
                }
              })}
            <div className={style.moreFriendsBtn}>
              <p>
                See<br></br>Friends
              </p>
            </div>
          </div>
          {/* 
        <MyTrails />
        <MyConnections />*/}
        </div>
      </Container>
    </div>
  );
}

export default UserPage;
