import { Container, Typography, Grid, Paper } from '@mui/material';

const testimonials = [
  { name: 'Stephanie S.', feedback: 'Integra Cleaning Service is wonderful and also reasonably priced and extremely professional! They always go above and beyond.' },
  { name: 'Sam S.', feedback: 'Well first off we’ve been getting service from Integra for about a year and a half and I have to say they do a great job on our Airbnb.' },
];

const TestimonialsSection = () => (
  <Container maxWidth="lg" sx={{ py: 8 }}>
    <Typography variant="h4" component="h2" gutterBottom>
      What Our Clients Say
    </Typography>
    <Grid container spacing={4}>
      {testimonials.map((testimonial, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6">{testimonial.name}</Typography>
            <Typography variant="body1" color="text.secondary">
              "{testimonial.feedback}"
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default TestimonialsSection;
