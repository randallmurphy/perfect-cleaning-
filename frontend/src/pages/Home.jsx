import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import ServiceCard from '../components/ServiceCard';
import heroImage from '../assets/hero.jpg';

const services = [
  {
    title: 'Residential Cleaning',
    description: 'Keep your home sparkling clean.',
    image: '/src/assets/service1.jpg',
  },
  {
    title: 'Office Cleaning',
    description: 'A clean workspace for better productivity.',
    image: '/src/assets/service2.jpg',
  },
  {
    title: 'Special Event Cleaning',
    description: 'Making your events spotless and memorable.',
    image: '/src/assets/service3.jpg',
  },
];

export default function Home() {
  return (
    <>
      <Box
        sx={{
          height: 400,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Welcome to Perfect Cleaning
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Professional cleaning services you can trust.
        </Typography>
      </Box>

      <Container sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map(({ title, description, image }) => (
            <Grid item xs={12} sm={6} md={4} key={title}>
              <ServiceCard title={title} description={description} image={image} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
