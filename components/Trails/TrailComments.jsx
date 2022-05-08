import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function TrailComments({ trail }) {
  return (
    <Stack
      direction="column"
      sx={{
        width: 960,
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

TrailComments.propTypes = {
  trail: PropTypes.string.isRequired,
};

export default TrailComments;
