/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Top from './Top';
import dummyTrails from '../maps/dummyData';
import Link from 'next/link';


function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState(dummyTrails);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <div
        ref={anchorRef}
        onClick={handleToggle}
        style={{
          color: open === false ? null : '#123C69',
          borderBottom: open === false ? null : '3px solid #123C69',
        }}
      >
        Leaderboard
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-end"
        transition
        sx={{ zIndex: 4, width: '40%' }}
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                'right top',
            }}
          >
            <Paper sx={{
              width: '80vh', backgroundColor: '#EEE2DC', borderRadius: '6px', borderTop: '18px solid #AC3B61', borderLeft: '0.5px solid #AC3B61', borderRight: '0.5px solid #AC3B61', borderBottom: '0.5px solid #AC3B61', marginTop: '5px', paddingTop: '10px', overflow: 'auto', minHeight: '10vh', maxHeight: '60vh', height: 'auto', textAlign: 'center', boxShadow: '3px 3px 3px #BAB2B5',
            }}
            >
              {(leaderboard.length >= 1)
                ? <>
                  <Typography style={{
                    display: 'inline', fontFamily: 'inherit', fontWeight: '450', backgroundColor: '#EDC7B7', border: '4px solid #BAB2B5', borderRadius: '15px', padding: '4.5px', color: '#123C69',
                  }}
                  >
                    Top 5 Trails in Your Area
                  </Typography>
                  <br />
                  <small style={{ fontFamily: 'inherit', fontSize: '10px' }}> Click a Trail to View Details & Ratings</small>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                    >
                      {leaderboard.sort((b, a) => a.ratings.average - b.ratings.average).slice(0, 5).map((trail) => (
                        <Top trail={trail} key={trail.name} />
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </>
                : <ClickAwayListener onClickAway={handleClose}>
                  <Typography style={{
                    display: 'inline', fontFamily: 'inherit', fontWeight: '450', backgroundColor: '#EDC7B7', border: '4px solid #BAB2B5', borderRadius: '15px', padding: '4.5px', color: '#123C69',
                  }}
                  >
                    No Trails Upvoted, be the First!
                  </Typography>
                </ClickAwayListener> }
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default Leaderboard;
