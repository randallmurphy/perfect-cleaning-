import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

 function About() {
  return (
    <Box component="section" id="about" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          About Us where is this at
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box component="img" src="/assets/img/about-img.jpg" alt="About Perfect Cleaning" sx={{ width: "100%", borderRadius: 2 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography paragraph>
              Perfect Cleaning Services is dedicated to providing top-tier cleaning solutions for residential and commercial clients.
              Our experienced team uses eco-friendly products and the latest technology to deliver outstanding results every time.
            </Typography>
            <Typography paragraph>
              We believe a clean environment leads to a healthier, happier life for our clients and their communities.
              Trust us to keep your space spotless and fresh.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default About