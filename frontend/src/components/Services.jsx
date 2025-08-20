import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

const services = [
  { title: "Apartment Cleaning", description: "Thorough and detailed cleaning for apartments.", img: "/assets/img/service1.jpg" },
  { title: "Office Cleaning", description: "Keep your workspace clean and productive.", img: "/assets/img/service2.jpg" },
  { title: "House Cleaning", description: "Regular and deep cleaning for homes.", img: "/assets/img/service3.jpg" },
  { title: "Car Washing", description: "Complete exterior and interior cleaning.", img: "/assets/img/service4.jpg" },
  { title: "Green Cleaning", description: "Eco-friendly products for a healthier environment.", img: "/assets/img/service5.jpg" },
  { title: "Maintenance Service", description: "Ongoing maintenance and cleaning services.", img: "/assets/img/service6.jpg" },
];

 function Services() {
  return (
    <Box component="section" id="services" sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map(({ title, description, img }, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia component="img" height="140" image={img} alt={title} />
                <CardContent>
                  <Typography variant="h6" gutterBottom>{title}</Typography>
                  <Typography variant="body2" color="text.secondary">{description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export default Services