/* eslint-disable camelcase */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function TrailComments({ trail }) {
  return (
    <Stack
      direction="column"
      sx={{
        border: 4,
        borderColor: 'primary.main',
        gap: 1,
      }}
    >
      {trail.comments.map((comment) => (
        <Stack
          direction="column"
          sx={{
            border: 4,
            borderColor: 'primary.main',
          }}
          key={trail.comments.indexOf(comment)}
        >
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            {comment.body }
          </Typography>
          <div>{comment.username}</div>
        </Stack>
      ))}
    </Stack>
  );
}

export default TrailComments;
