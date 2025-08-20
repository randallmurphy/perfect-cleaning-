import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const slides = [
  {
    title: "Welcome to Perfect Cleaning",
    subtitle: "We keep your spaces spotless and healthy.",
    bg: "/assets/img/slider-1.jpg",
  },
  {
    title: "Professional Cleaning Services",
    subtitle: "Experience the best care for your home and office.",
    bg: "/assets/img/slider-2.jpg",
  },
  {
    title: "Trusted & Experienced Team",
    subtitle: "Serving with dedication and care for over 30 years.",
    bg: "/assets/img/slider-3.jpg",
  },
];

 function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, bg } = slides[currentSlide];

  return (
    <Box
      sx={{
        height: { xs: 300, md: 500 },
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        alignItems: "center",
        transition: "background-image 0.7s ease-in-out",
      }}
      id="home"
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ textShadow: "2px 2px 4px #000" }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, textShadow: "1px 1px 3px #000" }}>
          {subtitle}
        </Typography>
        <Button variant="contained" color="secondary" href="#contact-us">
          Book Now
        </Button>
      </Container>
    </Box>
  );
}
export default HeroSlider