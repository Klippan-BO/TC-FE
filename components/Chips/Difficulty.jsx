import React from 'react';
import Chip from '@mui/material/Chip';

import PropTypes from 'prop-types';

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

Difficulty.propTypes = {
  difficulty: PropTypes.number.isRequired,
};
