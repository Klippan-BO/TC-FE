import React from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import PropTypes from 'prop-types';

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
              <img src={friend.profile_image} className={style.popUpImg} alt={friend.username} />
              <div className={style.darkNameBox}>
                <span>
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

MyConnections.propTypes = {
  openFriends: PropTypes.func.isRequired,
  closeFriends: PropTypes.func.isRequired,
  myFriends: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    profile_image: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  })).isRequired,
};
