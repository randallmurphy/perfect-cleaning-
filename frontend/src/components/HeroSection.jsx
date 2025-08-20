import { Container, Typography, Button } from '@mui/material';

const HeroSection = () => (
  <Container maxWidth="lg" sx={{ textAlign: 'center', py: 8 }}>
    <Typography variant="h2" component="h1" gutterBottom>
      Sparkling Clean, Every Time
    </Typography>
    <Typography variant="h5" paragraph>
      Experience top-notch cleaning services tailored to your needs.
    </Typography>
    <Button variant="contained" color="primary" href="#contact">
      Get a Free Quote
    </Button>
  </Container>
);

export default HeroSection;
