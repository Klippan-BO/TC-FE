import React from 'react';
import Chip from '@mui/material/Chip';

export default function Difficulty({ difficulty }) {
  if (difficulty < 1.67) {
    return (
      <Chip
        variant="outline"
        label="Easy"
        color="success"
      />
    );
  }
  if (difficulty >= 1.67 && difficulty < 3.33) {
    return (
      <Chip
        label="Intermediate"
        color="warning"
      />
    );
  }
  return (
    <Chip
      label="Hard"
      color="error"
    />
  );
}
