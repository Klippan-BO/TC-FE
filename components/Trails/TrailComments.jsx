import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
/* eslint-disable camelcase */
import { Stack, ListItem, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Moment from 'moment';
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

  return (
    <Stack
      sx={{
        maxHeight: '100%', overflow: 'auto', mt: '10px', backgroundColor: '#BAB2B5', borderRadius: 3, mb: '20px',
      }}
    >
      <ListItem key={1} style={{ justifyContent: 'center', marginTop: '6px', marginBottom: '6px' }}>
        <TextField
          sx={{
            backgroundColor: '#EEE2DC', variant: 'filled', margin: 'none', width: '100%', borderRadius: '12px', size: 'small',
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
        {trailComments.sort((a, b) => new Moment(b.timestamp).format('YYYYMMDD') - new Moment(a.timestamp).format('YYYYMMDD')).map((comment) =>
          (
            <ListItem
              sx={{
                wordWrap: 'break-word', backgroundColor: '#123C69', color: '#EEE2DC', m: 'auto', padding: '15px', borderRadius: '8px', borderTop: '15px solid #AC3B61', borderLeft: '3px solid #BAB2B5', borderBottom: '3px solid #BAB2B5', borderRight: '3px solid #BAB2B5', ':hover': {
                  transform: 'scale(1.01)', cursor: 'pointer',
                },
              }}
              key={trailComments.indexOf(comment)}
            >
              <div>
                <span style={{ fontWeight: '450' }}>{comment.username} </span>
                <div style={{ position: 'relative', width: '0', height: '0' }}>
                  <span style={{ position: 'absolute', right: '-1050px', top: '-28px' }}>{Moment(comment.timestamp).format('MMM Do YY')}</span>
                </div>
                <div style={{ wordBreak: 'break-all', fontSize: '15px' }}>{comment.body }</div>
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
