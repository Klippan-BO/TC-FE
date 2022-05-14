import { Dialog, DialogTitle, stepLabelClasses } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import Link from 'next/link';
import style from '../../styles/user.module.css';
import StarRatings from './StarRating';

export default function MyTrails({ openTrails, closeTrails, my_trails }) {
  const closePopUp = () => {
    closeTrails();
  };
  const openTrail = () => {

  };
  return (

    <Dialog
      open={openTrails}
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
          <div className={style.popUpTitle}>My Trails</div>

        </div>
      </DialogTitle>
      <div className={`${style.popUpInnerCont} removeScrollBar`}>
        {my_trails && my_trails.map((trail) => (
          <Link href={{ pathname: '/trails/[id]', query: { id: trail.id } }}>
            <div className={style.popUpRowCont} key={trail.name} onClick={openTrail}>
              <div><img src={trail.photos[0].url} className={style.popUpImg} /></div>
              <div className={style.rowMidBox}>
                {' '}
                <span className={style.darkName}>
                  <strong>{trail.name}</strong>
                  {' '}
                  <br />
                  <br />
                  {trail.short_description}
                </span>
              </div>
              <div>
                <StarRatings rating={trail.rating} />

              </div>
            </div>
          </Link>
        ))}
      </div>
    </Dialog>

  );
}
