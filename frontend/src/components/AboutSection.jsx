import { Container, Typography, Grid, Box } from '@mui/material';

const AboutSection = () => (
  <Container maxWidth="lg" sx={{ py: 8 }}>
    <Typography variant="h4" component="h2" gutterBottom>
      About Us
    </Typography>
    <Typography variant="body1" paragraph>
      We are a local, licensed, and insured cleaning company committed to providing top-quality services. Our team is trained to use the best and most natural cleaning products, ensuring a clean and healthy environment for our clients.
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <Box textAlign="center">
          <Typography variant="h6">30</Typography>
          <Typography variant="body2" color="text.secondary">Years Experience</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box textAlign="center">
          <Typography variant="h6">1599</Typography>
          <Typography variant="body2" color="text.secondary">Happy Clients</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box textAlign="center">
          <Typography variant="h6">1299</Typography>
          <Typography variant="body2" color="text.secondary">Employees</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box textAlign="center">
          <Typography variant="h6">199</Typography>
          <Typography variant="body2" color="text.secondary">Awards</Typography>
        </Box>
      </Grid>
    </Grid>
  </Container>
);

export default AboutSection;
