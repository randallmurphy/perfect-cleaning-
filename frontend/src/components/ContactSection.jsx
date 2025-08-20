import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const ContactSection = () => (
  <Container maxWidth="lg" sx={{ py: 8 }} id="contact">
    <Typography variant="h4" component="h2" gutterBottom>
      Contact Us
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Your Name" variant="outlined" margin="normal" />
        <TextField fullWidth label="Your Email" variant="outlined" margin="normal" />
        <TextField fullWidth label="Message" variant="outlined" multiline rows={4} margin="normal" />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="body1" paragraph>
          <strong>Phone:</strong> +12345678945
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Email:</strong> [email protected]
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Address:</strong> 75 Hockanum Blvd Unit 1523, Vernon Rockville, CT, 06066
        </Typography>
      </Grid>
    </Grid>
  </Container>
);

export default ContactSection;
