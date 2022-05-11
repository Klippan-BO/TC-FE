import { Dialog, DialogTitle, stepLabelClasses } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import style from '../../styles/user.module.css';

export default function MyNotification({
  openNotif,
  requests,
  requesting,
  closeNotif,
}) {
  const closePopUp = () => {
    closeNotif();
  };
  const handleAccept = (e) => {
    fetch('api/users',{
      method:'PATCH',
      body:JSON.stringify({userId:e.userID,
        action:"accept"
      })
    })
  };


  const handleReject = (e) => {
    fetch('api/users',{
      method:'PATCH',
      body:JSON.stringify({userId:e.userID,
        action:"deny"
      })
    })
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
      <DialogTitle>
        <div className={style.popUpBtnWrapper}>
          <div className={style.popUpTitle}>Hikers who want to be friends</div>
          <CancelIcon className={style.close} onClick={closePopUp} />
        </div>
      </DialogTitle>
      <div className={style.popUpCont}>
        {requests.map((person) => (
          <div className={style.popUpRowCont} key={person.username}>
            <img src={person.photo} className={style.popUpImg} />
            <div className={style.popUpRowMidCont}>
              {' '}
              <h4>
                <span>{person.username}</span>
                <br />
                {person.description}
              </h4>
              {' '}

            </div>
            <div className={style.popUpBtnWrap}>
              <ThumbUpIcon
                className={style.request}
                onClick={()=>{handleAccept(person)}}
                receipient={person.id}
              />
              <ThumbDownIcon className={style.request} onClick={()=>{handleReject(person)}} recipient={person.id} />
            </div>
          </div>
        ))}
      </div>

      <DialogTitle>
        <div className={style.popUpTitle}>My Requests to Other Hikers</div>
      </DialogTitle>
      <div className={style.imgRow}>
        {requesting.map((person) => (
          <div className={style.darkImgBox} key={person.username}>
            <img src={person.photo} className={style.popUpImg} />
            <span className={style.darkName}>{person.username}</span>
          </div>
        ))}
      </div>
    </Dialog>
  );
}
