import React from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import style from '../../styles/user.module.css';

export default function MyConnections({
  openFriends,
  closeFriends,
  myFriends,
}) {
  const closePopUp = () => {
    closeFriends();
  };

  return (
    <Dialog
      open={openFriends}
      PaperProps={{
        sx: {
          position: 'absolute',
          top: 350,
          right: 50,
          m: 0,
          width: 500,
          height: 500,
          backgroundColor: '#eee2dc',
        },
      }}
    >
      <DialogTitle>
        <div className={style.popUpBtnWrapper}>
          <CancelIcon className={style.close} onClick={closePopUp} />
          <div className={style.popUpTitle}>My Friends</div>
        </div>
      </DialogTitle>
      <div
        className={`${style.popUpInnerCont} removeScrollBar`}
      >
        {myFriends
          && myFriends.map((friend) => (
            <div className={style.popUpRowCont} key={friend.username}>
              <img src={friend.profile_image} className={style.popUpImg} />
              <div>
                <span className={style.darkName}>
                  <strong>
                    {friend.username}
                  </strong>
                  <br />
                  {friend.bio}
                </span>
              </div>
            </div>
          ))}
      </div>
    </Dialog>
  );
}
