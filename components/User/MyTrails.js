import { Dialog, DialogTitle, stepLabelClasses } from "@mui/material";
import style from "../../styles/user.module.css";
import CancelIcon from "@mui/icons-material/Cancel";
import StarRatings from "./StarRating";
import Link from 'next/link';

export default function MyTrails({ openTrails, closeTrails,my_trails }) {
    
    const closePopUp = () => {
        closeTrails();
      };
      const openTrail=()=>{
          alert()
      }
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
            <Link href={{pathname:'/trails/[id]',query:{id:trail.trailID} }} >
          <div className={style.popUpRowCont} key={trail.trail_name} onClick={openTrail}>
          <div><img src={trail.photos[0]} className={style.popUpImg} /></div>
          <div className={style.rowMidBox}>  <span className={style.darkName}>
              <strong>{trail.trail_name}</strong> <br/><br/>{trail.description}</span> </div>
          <div>  <StarRatings ratings={trail.ratings} /> </div>
          </div> 
          </Link>
        ))}
      </div>
    </Dialog>

  )
}
