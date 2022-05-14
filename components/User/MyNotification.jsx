import React, { useEffect } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import PropTypes from 'prop-types';
import style from '../../styles/user.module.css';

export default function MyNotification({
  openNotif,
  requests,
  requesting,
  closeNotif,
  updateMyNotif,
  value,
}) {
  useEffect(() => { console.log('value update'); }, [value]);

  const closePopUp = () => {
    closeNotif();
  };
  const addfriend = (body) => {
    fetch('api/friends', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  };
  const handleAccept = (e) => {
    const body = { userId: e.friend_id, friendId: e.user_id };
    addfriend(body);
    updateMyNotif();
  };
  const handleReject = (person) => {
    const friend_Id = person.id;
    fetch('api/friends', {
      method: 'DELETE',
      body: JSON.stringify({ friend_Id }),
    });
    updateMyNotif();
  };

  return (
    <Dialog
      open={openNotif}
      PaperProps={{
        sx: {
          position: 'absolute',
          top: 50,
          right: 50,
          m: 0,
          width: 500,
          height: 500,
          backgroundColor: '#eee2dc',
        },
      }}
    >
      <div>
        <DialogTitle>
          <div className={style.popUpBtnWrapper}>
            <div className={style.popUpTitle}>
              Hikers who want to be friends
            </div>
            <CancelIcon className={style.close} onClick={closePopUp} />
          </div>
        </DialogTitle>
        <div className={`${style.popUpCont} removeScrollBar`}>
          {requests
            && requests.map((person) => (
              <div className={style.popUpRowCont} key={person.username}>
                <img src={person.profile_image} className={style.popUpImg} />
                <div className={style.popUpRowMidCont}>
                  <span>
                    <strong>{person.username}</strong>
                    <br />
                    {person.bio}

                  </span>
                </div>
                <div className={style.popUpBtnWrap}>
                  <ThumbUpIcon
                    className={style.request}
                    onClick={() => {
                      handleAccept(person);
                    }}
                    recipient={person.id}
                  />
                  <ThumbDownIcon
                    className={style.request}
                    onClick={() => {
                      handleReject(person);
                    }}
                    recipient={person.id}
                  />
                </div>
              </div>
            ))}
        </div>

        <DialogTitle>
          <div className={style.popUpTitle}>My Requests to Other Hikers</div>
        </DialogTitle>
        <div className={style.imgRow}>
          {requesting
            && requesting.map((person) => (
              <div className={style.darkImgBox} key={person.username}>
                <img src={person.profile_image} alt={person.username} className={style.popUpImg} />
                <span className={style.darkName}>{person.username}</span>
              </div>
            ))}
        </div>
      </div>
    </Dialog>
  );
}

MyNotification.propTypes = {
  openNotif: PropTypes.bool.isRequired,
  requests: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    profile_image: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  })).isRequired,
  requesting: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    profile_image: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  })).isRequired,
  closeNotif: PropTypes.func.isRequired,
  updateMyNotif: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
