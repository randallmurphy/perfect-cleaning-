import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button, Box } from '@mui/material';

import apartmentImg from '../assets/images/apartment.jpg';
import officeImg from '../assets/images/office.jpg';
import houseImg from '../assets/images/house.jpg';
import carWashImg from '../assets/images/car-wash.jpg';
import greenCleaningImg from '../assets/images/green-cleaning.jpg';
import maintenanceImg from '../assets/images/maintenance.jpg';

const services = [
  { title: 'Apartment Cleaning', description: 'Thorough cleaning for your apartment.', image: apartmentImg, plan: 'Apartment' },
  { title: 'Office Cleaning', description: 'Professional cleaning for your office space.', image: officeImg, plan: 'Office' },
  { title: 'House Cleaning', description: 'Comprehensive cleaning for your home.', image: houseImg, plan: 'House' },
  { title: 'Car Washing', description: 'Detailed car washing services.', image: carWashImg, plan: 'Car Wash' },
  { title: 'Green Cleaning', description: 'Eco-friendly cleaning solutions.', image: greenCleaningImg, plan: 'Green' },
  { title: 'Maintenance Service', description: 'Reliable maintenance services.', image: maintenanceImg, plan: 'Maintenance' },
];

function ServicesSection() {
  // ✅ Helper: scroll to contact section
  const goToContact = (plan = '') => {
    if (plan) localStorage.setItem('selectedPlan', plan);
    const contactSection = document.getElementById('contact-section');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
        Sparkling Clean, Every Time
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom sx={{ mb: 4 }}>
        Experience top-notch cleaning services tailored to your needs.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map(({ title, description, image, plan }, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
              elevation={3}
            >
              <CardMedia
                component="img"
                height="180"
                image={image}
                alt={title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
                <Box textAlign="center" mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ px: 5 }}
                    onClick={() => goToContact(plan)}
                  >
                    Get a Free Quote
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ServicesSection;
