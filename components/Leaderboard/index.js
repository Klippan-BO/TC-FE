/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  DropdownButton, Dropdown, Button,
} from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dummyTrails from '../maps/dummyData.js';

function Leaderboard() {
  return (
    <Dropdown>
      <DropdownButton id="dropdown-basic" variant="secondary" title="Leaderboard">
        <Dropdown.ItemText>Top trails in your area</Dropdown.ItemText>
        {dummyTrails.sort((a, b) => a.ratings.average - b.ratings.average)
          .map((trail) => (
            <Dropdown.Item as="button" key={trail.name}>
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
            </Dropdown.Item>
          ))}
      </DropdownButton>
    </Dropdown>
  );
}

export default Leaderboard;

// <Card style={{ width: '18rem', backgroundColor: '#EEE2DC' }}>
//   <Card.Body>
//     <Card.Title>{trail.name}</Card.Title>
//     <Card.Text>{trail.ratings.average}</Card.Text>
//     <Button variant="primary">View Trail Info</Button>
//   </Card.Body>
// </Card>
