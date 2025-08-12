import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Button variant="contained" component={RouterLink} to="/">
        Go Home
      </Button>
    </Container>
  );
}
