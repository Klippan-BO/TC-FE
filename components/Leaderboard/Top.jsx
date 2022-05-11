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
          height: '18vh',
          borderRadius: '20px',
          border: '3px solid #bab2b5',
          ':hover': {
            transform: 'scale(1.03)',
          },
        }}
      >
        <CardContent sx={{ cursor: 'pointer' }}>
          <Typography
            sx={{
              fontSize: 10, fontFamily: 'inherit', color: '#EEE2DC', display: 'flex', alignItems: 'center', borderBottom: '1px solid #BAB2B5', width: '60%',
            }}
            display="inline"
            gutterBottom
          >
            {trail.name}
            <StyledRating sx={{ ml: 1 }} precision={0.25} emptyIcon={<HikingIcon style={{ fontSize: '10px' }} />} icon={<HikingIcon style={{ fontSize: '10px' }} />} value={trail.ratings.average} readOnly />
          </Typography>
          <Typography
            sx={{
              fontSize: 15, fontFamily: 'inherit', color: '#EEE2DC', width: '60%', wordWrap: 'break-word', marginTop: '2vh', height: '2vh',
            }}
            align="left"
          >
            {trail.short_description.length > 150
              ? `${trail.short_description.substring(0, 150)}...`
              : trail.short_description}
          </Typography>
          <div style={{ position: 'relative', width: '0', height: '0', float: 'right' }}>
            <CardMedia
              component="img"
              src={preview}
              style={{
                width: '13vh', height: '13vh', borderRadius: '50%', border: '2px solid #BAB2B5', left: '-15vh', top: '-45px', position: 'absolute', marginBottom: 'auto', marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto',
              }}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default Top;
