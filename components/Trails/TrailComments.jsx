/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Stack, ListItem, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import moment from 'moment';
import PropTypes from 'prop-types';

function TrailComments({ comments }) {
  const [trailComments, setComments] = useState(comments);
  const [newComment, setNewComment] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setComments(comments.concat({ username: 'User', body: newComment, timestamp: Date.now()}));
      setNewComment('');
    }
  };

  return (
    <Stack
      sx={{
        maxHeight: '100%', overflow: 'auto', mt: '10px', backgroundColor: '#BAB2B5', borderRadius: 3,
      }}
    >
      <Stack
        spacing={2}
        p={2}
        direction="column"
        sx={{
          overflow: 'auto', backgroundColor: '#EEE2DC', borderRadius: '2px',
        }}
      >
        {trailComments.map((comment) =>
          (
            <ListItem sx={{
              wordWrap: 'break-word', backgroundColor: '#123C69', color: '#EEE2DC', m: 'auto', padding: '15px', borderRadius: '8px',
            }}
            >
              <div key={trailComments.indexOf(comment)}>
                <div>{comment.username}</div>
                <div style={{ marginBottom: '10px' }}>{moment(comment.timestamp).format('MMM Do YY')}</div>
                <div style={{ wordBreak: 'break-all' }}>{comment.body }</div>
              </div>
            </ListItem>
          ))}
      </Stack>
      <ListItem key={1} style={{ justifyContent: 'center' }}>
        <TextField
          sx={{
            backgroundColor: '#EEE2DC', variant: 'filled', margin: 'none', width: '90%', size: 'small',
          }}
          InputProps={{ endAdornment: <SendIcon /> }}
          label="Leave a comment"
          value={newComment}
          onChange={() => setNewComment(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </ListItem>
    </Stack>
  );
}

TrailComments.propTypes = {
  comments: PropTypes.object.isRequired,
};

export default TrailComments;
