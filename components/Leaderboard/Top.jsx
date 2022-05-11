/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Top({ trail }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {trail.name}
        </Typography>
        <Typography variant="body2">
          {trail.ratings.average}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Trail</Button>
      </CardActions>
    </Card>
  )
}

export default Top;
