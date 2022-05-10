import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function TrailDescription({ name, description }) {
  return (
    <Stack
      direction="column"
      sx={{
        width: '960x',
        backgroundColor: '#123C69',
        color: '#EEE2DC',
      }}
    >
      <Typography
        onClick={()=>console.log('yo')}
        sx={{
          fontSize: 30,
          margin: 1,
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: 16,
          margin: 1,
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
}

export default TrailDescription;