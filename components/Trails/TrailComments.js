/* eslint-disable camelcase */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const sample_Data = require('./sampleData');

function TrailComments() {
  return (
    <Stack
      direction="column"
      sx={{
        border: 4,
        borderColor: 'primary.main',
        gap: 1,
      }}
    >
      {sample_Data.trail1.comments.map((comment) => (
        <Stack
          direction="column"
          sx={{
            border: 4,
            borderColor: 'primary.main',
          }}
          key={sample_Data.trail1.comments.indexOf(comment)}
        >
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            {comment.body }
          </Typography>
          <div>{comment.username}</div>
          {/* <div>{comment.timestamp}</div> */}
        </Stack>
      ))}
    </Stack>
  );
}

export default TrailComments;
