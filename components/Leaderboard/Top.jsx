/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import HikingIcon from '@mui/icons-material/Hiking';
import Link from 'next/link';

function Top({ trail }) {
  const [preview, setPreview] = useState('');

  useEffect(() => {
    const highestVote = trail.photos.reduce(
      (max, character) => (character.score >= max ? character.thumb : max),
      trail.photos[0].score
    );
    setPreview(highestVote);
  }, [trail.photos])

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#EEE2DC',
    },
    '& .MuiRating-iconEmpty': {
      color: 'black',
    },
  });

  return (
    <Link href={{ pathname: '/trails/[id]', query: { id: trail.id } }} replace>
      <Card
        sx={{
          m: 1,
          backgroundColor: '#123C69',
          height: '150px',
          borderRadius: '20px',
          boxShadow: '2px 2px 2px rgba(0,0,0,.55)',
          transition: '200ms all linear',
          ':hover': {
            backgroundColor: '#0A2452',
          },
        }}
      >
        <CardContent sx={{ cursor: 'pointer', display: 'flex', gap: '1.125em' }}>
          <CardMedia
            component="img"
            src={preview}
            style={{
              width: '125px', height: '125px', borderRadius: '100%', border: '2px solid #BAB2B5',
            }}
          />
          <div>
            <Typography
              sx={{
                fontSize: 22, fontFamily: 'inherit', color: '#EEE2DC', display: 'flex', alignItems: 'center', borderBottom: '1px solid #BAB2B5',
              }}
              display="inline"
              gutterBottom
            >
              {trail.name}
              <StyledRating sx={{ ml: 1 }} precision={0.25} emptyIcon={<HikingIcon style={{ fontSize: '17px' }} />} icon={<HikingIcon style={{ fontSize: '17px' }} />} value={trail.ratings.average} readOnly />
            </Typography>
            <Typography
              sx={{
                fontSize: 15, fontFamily: 'inherit', color: '#EEE2DC', wordWrap: 'break-word', marginTop: '.125em', maxWidth: '50ch',
              }}
              align="left"
            >
              {trail.short_description.length > 150
                ? `${trail.short_description.substring(0, 150)}...`
                : trail.short_description}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default Top;
