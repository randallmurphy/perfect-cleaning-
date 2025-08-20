import React from 'react';
import { Container, Typography } from '@mui/material';

function AboutPage() {
  return (
    <Container sx={{ mt: 9, backgroundColor:'black' }}>
      <Typography variant="h3" gutterBottom>
        About Perfect Cleaning
      </Typography>
      <Typography variant="body1">
        We are committed to delivering top-quality cleaning services with professionalism and integrity.
      </Typography>
    </Container>
  );
}
export default AboutPage