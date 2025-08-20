import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
} from "@mui/material";

const plans = [
  {
    title: "Basic Plan",
    price: "$2000",
    period: "Per Day",
    features: [
      "Apartment Cleaning",
      "Office Cleaning",
      "House Cleaning",
      "Car Washing",
      "Green Cleaning",
      "Maintenance Service",
    ],
  },
  {
    title: "Standard Plan",
    price: "$5000",
    period: "Per Day",
    features: [
      "Apartment Cleaning",
      "Office Cleaning",
      "House Cleaning",
      "Car Washing",
      "Green Cleaning",
      "Maintenance Service",
    ],
    popular: true,
  },
  {
    title: "Ultimate Plan",
    price: "$7000",
    period: "Per Day",
    features: [
      "Apartment Cleaning",
      "Office Cleaning",
      "House Cleaning",
      "Car Washing",
      "Green Cleaning",
      "Maintenance Service",
    ],
  },
  {
    title: "Deep Clean Deluxe",
    price: "$8500",
    period: "Per Day",
    features: [
      "Deep Carpet Shampoo",
      "Tile & Grout Cleaning",
      "Window Washing",
      "Garage Cleaning",
      "Eco-Friendly Products",
      "Maintenance Service",
    ],
  },
  {
    title: "Move-In / Move-Out Plan",
    price: "$6000",
    period: "Per Service",
    features: [
      "Full House Cleaning",
      "Appliance Deep Clean",
      "Cabinet & Closet Wipe Down",
      "Garage Sweep & Wash",
      "Patio / Balcony Cleaning",
      "Eco-Friendly Products",
    ],
  },
  {
    title: "Event Cleanup",
    price: "$4500",
    period: "Per Event",
    features: [
      "Pre-Event Cleaning",
      "Post-Event Deep Clean",
      "Trash Removal",
      "Floor Buff & Polish",
      "Restroom Sanitization",
      "On-Site Cleaning Crew",
    ],
  },
];

export default function Pricing() {
  // ✅ function to save plan and scroll to contact
  const selectPlan = (planTitle) => {
    localStorage.setItem("selectedPlan", planTitle);
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        background: "linear-gradient(135deg, #f9f9f9, #e0f7fa)",
      }}
      id="pricing"
    >
      <Container maxWidth="x3">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1976d2" }}
        >
          Flexible Pricing
        </Typography>
        <Typography
          variant="body1"
          align="center"
          mb={6}
          color="text.secondary"
          maxWidth={700}
          mx="auto"
        >
          Let us use our years of experience, skilled employees, and advanced
          procedures to ensure a clean and healthy environment for your
          employees, customers, and guests.
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {plans.map(({ title, price, period, features, popular }, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  boxShadow: 6,
                  borderRadius: 4,
                  position: "relative",
                  overflow: "hidden",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 10,
                  },
                  ...(popular && {
                    border: "2px solid #1976d2",
                  }),
                }}
              >
                {popular && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: -40,
                      background: "#1976d2",
                      color: "#fff",
                      px: 4,
                      py: 0.5,
                      transform: "rotate(45deg)",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Most Popular
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="h3"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {price}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ fontStyle: "italic" }}
                  >
                    {period}
                  </Typography>
                  <List
                    sx={{
                      textAlign: "left",
                      mt: 2,
                      mb: 3,
                    }}
                  >
                    {features.map((feature, index) => (
                      <ListItem
                        key={index}
                        sx={{
                          py: 0.5,
                          px: 0,
                          fontSize: "0.95rem",
                          borderBottom: "1px dashed #e0e0e0",
                        }}
                      >
                        ✅ {feature}
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      py: 1.2,
                      fontSize: "1rem",
                      fontWeight: "bold",
                      borderRadius: 3,
                      boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
                    }}
                    onClick={() => selectPlan(title)} // ✅ attach the plan selection
                  >
                    Select Plan
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
