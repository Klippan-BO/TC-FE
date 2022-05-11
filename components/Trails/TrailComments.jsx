import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
/* eslint-disable camelcase */
import { Stack, ListItem, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import moment from 'moment';
import PropTypes from 'prop-types';
import axios from 'axios';

function TrailComments({ comments }) {
  const [trailComments, setComments] = useState(comments);
  const [newComment, setNewComment] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setComments(comments.concat({ username: 'User', body: newComment, timestamp: Date.now()}));
      setNewComment('');
    }
  };

  const handleClick = () => {
    setComments(comments.concat({ username: 'User', body: newComment, timestamp: Date.now()}));
    setNewComment('');
  };

  const handleSubmit = () => {

  }

  return (
    <Stack
      sx={{
        maxHeight: '100%', overflow: 'auto', mt: '10px', backgroundColor: '#BAB2B5', borderRadius: 3,
      }}
    >
      <ListItem key={1} style={{ justifyContent: 'center' }}>
        <TextField
          sx={{
            backgroundColor: '#EEE2DC', variant: 'filled', margin: 'none', width: '90%', size: 'small',
          }}
          InputProps={{
            endAdornment: <SendIcon
              style={{ cursor: 'pointer' }}
              onClick={(e) => handleClick(e.target.value)} />,
          }}
          label="Leave a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </ListItem>
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
            <ListItem
              sx={{
                wordWrap: 'break-word', backgroundColor: '#123C69', color: '#EEE2DC', m: 'auto', padding: '15px', borderRadius: '8px',
              }}
              key={trailComments.indexOf(comment)}
            >
              <div>
                <div>{comment.username}</div>
                <div style={{ marginBottom: '10px' }}>{moment(comment.timestamp).format('MMM Do YY')}</div>
                <div style={{ wordBreak: 'break-all' }}>{comment.body }</div>
              </div>
            </ListItem>
          ))}
      </Stack>
    </Stack>
  );
}

// TrailComments.propTypes = {
//   comments: PropTypes.object.isRequired,
// };

export default TrailComments;
