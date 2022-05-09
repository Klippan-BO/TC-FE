import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

function TrailComments({ trail }) {
  const [comments, setComments] = useState(trail.comments);
  const [newComment, setNewComment] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setComments(comments.concat({ username: 'User', body: newComment, timestamp: Date.now()}));
      setNewComment('');
    }
  };

  return (
    <Stack
      direction="column"
      sx={{
        width: 960,
        gap: 1,
      }}
    >
      {comments.map((comment) => (
        <Stack
          direction="column"
          sx={{
            border: 1,
            borderColor: 'black',
            borderRadius: 1,
            padding: 1,
          }}
          key={comments.indexOf(comment)}
        >
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            {comment.body }
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              color: 'black',
            }}
          >
            {comment.username}
          </Typography>
        </Stack>
      ))}

      <TextField
        id="outlined-textarea"
        label="Comment"
        value={newComment}
        onChange={() => setNewComment(event.target.value)}
        onKeyDown={handleKeyDown}
        focused={false}
      />
    </Stack>
  );
}

TrailComments.propTypes = {
  trail: PropTypes.object.isRequired,
};

export default TrailComments;
