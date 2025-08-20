// src/pages/LandingPage.jsx
import React from "react";
import { Container, Typography, Button, Paper, Box } from "@mui/material";
import OurTeam from "../components/OurTeam";
import Pricing from "../components/Pricing";
import ServicesSection from "../components/ServicesSection";
import LatestProject from "../components/LatestProject";
import WhyChooseUs from "../components/WhyChooseUs";
import AchievementSection from "../components/AchievementSection";
import Testimonials from "../components/Testimonials";
import Subscription from "../components/Subscription";
import About from "../components/About";
import AboutSection from "../components/AboutSection";
import { AboutUs } from "../components/AboutUs";
import bestCleanCompany from "../assets/images/bestcleancompany.png";
import banner from '../assets/images/banner.jpg'
import Contact from "./Contact";
export default function LandingPage() {
  return (
    <div>
      {/* Home Section */}
      <section id="home">
        <Paper
          elevation={3}
          sx={{
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundImage: 'url("/assets/images/hero-bg.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            p: 4,
            position: "relative", // needed for overlay positioning
          }}
        >
          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(25, 118, 211,.3)", // light blue with 0.5 opacity
              zIndex: 1,
            }}
          />

          {/* Content */}
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3, px: 4, py: 1.5 }}
            >
              Book a Service Today
            </Button>

            <br />
            <br />

            <Typography variant="h2" gutterBottom color="primary">
              The Perfect Cleaning Company
            </Typography>
            <Typography variant="h5" gutterBottom color="primary">
              Professional, Reliable & Affordable
            </Typography>
          </Box>
        </Paper>
      </section>

      <Box
        sx={{
          width: "100%",
          height: { xs: "300px", md: "800px" }, // responsive height
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

      </Box>

      {/* About Section */}
      <section id="about">
        <Container sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>

          <AboutUs />
        </Container>
      </section>

      {/* Achievement Section */}
      <section id="achievements">
        <AchievementSection />
      </section>

      {/* Banner / Image Section */}
      {/* Banner / Image Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "500px", md: "800px" }, // responsive height
          backgroundImage: `url(${bestCleanCompany})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

      </Box>



      {/* Why Choose Us Section */}
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>



      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Team Section */}
      <section id="team">
        <OurTeam />
      </section>

      {/* Projects Section */}
      <section id="our-project">
        <Container sx={{ py: 8 }}>
          <LatestProject />
        </Container>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <Pricing />
      </section>



      {/* Subscription Section */}
      <section id="subscribe">
        <Subscription />
      </section>

      {/* CTA Section */}
      <section id="contact-us">
        <Paper
          elevation={3}
          sx={{
            py: 6,
            textAlign: "center",
            backgroundColor: "#1976d2",
            color: "#fff",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Ready for a Cleaner Space?
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2, px: 4, py: 1.5 }}
          >
            Schedule Now
          </Button>
        </Paper>
        <Contact />
      </section>
    </div>
  );
}
