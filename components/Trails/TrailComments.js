/* eslint-disable camelcase */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Stack, ListItem, TextField } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import moment from 'moment';

const sample_Data = require('./sampleData');

function TrailComments() {
  return (
    <Stack
      sx={{
        maxHeight: '100%', overflow: 'auto', mt: '10px', backgroundColor: '#EEE2DC',
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
        {sample_Data.trail1.comments.map((comment) =>
          (
            <ListItem sx={{
              wordWrap: 'break-word', backgroundColor: '#123C69', color: '#EEE2DC', m: 'auto', padding: '15px', borderRadius: '8px',
            }}
            >
              <div key={sample_Data.trail1.comments.indexOf(comment)}>
                <div>{comment.username}</div>
                <div style={{ marginBottom: '10px' }}>{moment(comment.timestamp).format('MMM Do YY')}</div>
                <div style={{ wordBreak: 'break-all' }}>{comment.body }</div>
              </div>
              <ThumbUpIcon sx={{ fontSize: 'medium', justifyContent: 'flex-end' }} />
              <ChatBubbleIcon sx={{
                marginLeft: '5px', fontSize: 'medium', justifyContent: 'flex-end',
              }}
              />
            </ListItem>
          ))}
      </Stack>
      <TextField sx={{ backgroundColor: '#EEE2DC', variant: 'filled', margin: 'none' }} InputProps={{ endAdornment: <SendIcon /> }} label="Leave a comment" />
    </Stack>
  );
}

export default TrailComments;
