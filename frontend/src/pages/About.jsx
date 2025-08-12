import React from 'react';
import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        About Perfect Cleaning
      </Typography>
      <Typography variant="body1">
        We are committed to delivering top-quality cleaning services with professionalism and integrity.
      </Typography>
    </Container>
  );
}
