/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import HikingIcon from '@mui/icons-material/Hiking';

function Top({ trail }) {
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#EEE2DC',
    },
    '& .MuiRating-iconEmpty': {
      color: 'black',
    },
  });

  return (
    <Card
      sx={{
        m: 1, backgroundColor: '#123C69', borderRadius: '20px', border: '3px solid #bab2b5'
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: 10, fontFamily: 'inherit', color: '#EEE2DC', display: 'flex', alignItems: 'center',
          }}
          gutterBottom
        >
          {trail.name}
          <StyledRating sx={{ ml: 1 }} precision={0.25} emptyIcon={<HikingIcon style={{ fontSize: '10px' }} />} icon={<HikingIcon style={{ fontSize: '10px' }} />} value={trail.ratings.average} readOnly />
        </Typography>
        <Typography
          sx={{
            fontSize: 10, fontFamily: 'inherit', color: '#EEE2DC', width: '75%',
          }}
          align="left"
        >
          {trail.description.length > 150
            ? `${trail.description.substring(0, 150)}...`
            : trail.description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button variant="outlined" size="small" disableElevation>View Trail</Button>
      </CardActions> */}
    </Card>
  );
}

export default Top;
