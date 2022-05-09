import { Dialog, DialogTitle, stepLabelClasses } from "@mui/material";
import style from "../../styles/user.module.css";
import CancelIcon from "@mui/icons-material/Cancel";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export default function MyNotification({
  openNotif,
  requests,
  requesting,
  closeNotif,
}) {
  const closePopUp = () => {
    closeNotif();
  };
  const handleAccept = () => {

  };

  const handleReject = () => {
      
  };

  return (
    <Dialog
      open={openNotif}
      PaperProps={{
        sx: {
          position: "absolute",
          top: 50,
          right: 50,
          m: 0,
          width: 500,
          height: 500,
          backgroundColor: "#eee2dc",
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
            <h3>
              <span>{person.username}</span>
              <br />
              {person.city}
            </h3>
            <div className={style.popUpBtnWrap}>
              <ThumbUpIcon
                className={style.request}
                onClick={handleAccept}
              ></ThumbUpIcon>
              <ThumbDownIcon className={style.request} onClick={handleReject} />
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
