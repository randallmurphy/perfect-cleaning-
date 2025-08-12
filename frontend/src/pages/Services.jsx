import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const serviceList = [
  'Residential Cleaning',
  'Office Cleaning',
  'Post-Construction Cleanup',
  'Carpet Cleaning',
  'Window Washing',
];

export default function Services() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Our Services
      </Typography>
      <List>
        {serviceList.map(service => (
          <ListItem key={service}>
            <ListItemText primary={service} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
