import { Dialog, DialogTitle, stepLabelClasses } from "@mui/material";
import style from "../../styles/user.module.css";
import CancelIcon from "@mui/icons-material/Cancel";

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
          position: "absolute",
          top: 350,
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
          <CancelIcon className={style.close} onClick={closePopUp} />
          <div className={style.popUpTitle}>My Friends</div>
        </div>
      </DialogTitle>
      <div className={style.popUpInnerCont}>
        {myFriends &&
          myFriends.map((friend) => (
            <div className={style.rowCont} key={friend.username}>
              <img src={friend.photo} className={style.popUpImg} />
              <span className={style.darkName}>
                {friend.username} <br />
                {friend.description}
              </span>
            </div>
          ))}
      </div>
    </Dialog>
  );
}
