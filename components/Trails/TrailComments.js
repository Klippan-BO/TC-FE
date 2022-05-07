/* eslint-disable camelcase */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Stack from '@mui/material/Stack';

const sample_Data = require('./sampleData');

function TrailComments() {
  return (
    <Stack
      direction="column"
      sx={{ border: 4, borderColor: 'primary.main' }}
    >
      {sample_Data.trail1.comments.map((comment) =>
        (
          <div key={sample_Data.trail1.comments.indexOf(comment)}>
            <div>{comment.username}</div>
            <div>{comment.timestamp}</div>
            <div>{comment.body }</div>
          </div>
        ))}
    </Stack>
  );
}

export default TrailComments;
