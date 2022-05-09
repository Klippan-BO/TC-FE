import { Dialog, DialogTitle, stepLabelClasses } from "@mui/material";
import style from "../../styles/user.module.css";
import CancelIcon from "@mui/icons-material/Cancel";
import StarRatings from "./StarRating";

export default function MyTrails({ openTrails, closeTrails,my_trails }) {
console.log("🚀 ~ file: MyTrails.js ~ line 6 ~ MyTrails ~ my_trails ", my_trails )
    
    const closePopUp = () => {
        closeTrails();
      };
  return(

<Dialog open={openTrails}      
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
      }}>
 
    <DialogTitle>
    <div className={style.popUpBtnWrapper}>
    <CancelIcon className={style.close} onClick={closePopUp} />
          <div className={style.popUpTitle}>My Trails</div>
      
        </div>
    </DialogTitle>
    <div className={style.popUpInnerCont}>
     
        {my_trails && my_trails.map((trail) => (
          <div className={trail.rowCont} key={trail.trail_name}>
            <img src={trail.photos[0]} className={style.popUpImg} />
            <span className={style.darkName}>{trail.trail_name} <br/>{trail.description}</span>
            <StarRatings ratings={trail.ratings} />
          </div>
        ))}
      </div>
    </Dialog>
  )
}
