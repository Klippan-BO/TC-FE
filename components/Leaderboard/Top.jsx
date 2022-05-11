/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Top({ trail }) {
  return (
    <Card variant="outlined" sx={{ margin: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {trail.name}
        </Typography>
        <Typography variant="body2">
          {trail.ratings.average}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button variant="outlined" size="small" disableElevation>View Trail</Button>
      </CardActions> */}
    </Card>
  );
}

export default Top;
