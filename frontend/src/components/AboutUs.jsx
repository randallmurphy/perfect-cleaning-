import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Paper
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import PeopleIcon from "@mui/icons-material/People";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SettingsIcon from "@mui/icons-material/Settings";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

// Import side images
import cultureImg from "../assets/images/culture.png";
import awardImg from "../assets/images/award.png";

export function AboutUs() {
  return (
    <section id="about-us" style={{ position: "relative" }}>
      {/* Background wrapper */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: 'url("/assets/images/best-clean-company.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          py: 12,
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
            backgroundColor: "rgba(25, 118, 211, 0.3)", // light blue overlay
            zIndex: 1,
          }}
        />

        {/* Left Culture Image */}
        <Box
          component="img"
          src={cultureImg}
          alt="Culture"
          sx={{
            position: "absolute",
            top: "28%",
            left: "-500px",
            width: { xs: 200, md: 450 },
            zIndex: 2,
            display: { xs: "none", md: "block" },
            transform: "rotate(-10deg)",
            transition: "transform 0.3s",
            "&:hover": { transform: "rotate(0deg) scale(1.05)" },
          }}
        />

        {/* Right Award Image */}
        <Box
          component="img"
          src={awardImg}
          alt="Award"
          sx={{
            position: "absolute",
            top: "30%",
            right: "-500px",
            width: { xs: 200, md: 450 },
            zIndex: 2,
            display: { xs: "none", md: "block" },
            transform: "rotate(10deg)",
            transition: "transform 0.3s",
            "&:hover": { transform: "rotate(0deg) scale(1.05)" },
          }}
        />

        {/* Content */}
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Section Title */}
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
              About Us
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={2}>
              We are committed to delivering top-notch cleaning services with professionalism, reliability, and affordability.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Local, licensed, and insured cleaning company!
            </Typography>
          </Box>

          {/* Grid content */}
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            {/* Info Column */}
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection="column" gap={3}>
                {[
                  { icon: <PeopleIcon sx={{ fontSize: 50, color: "#1976d3" }} />, title: "Professional Staffs", text: "We create long-term community relations while constantly expanding." },
                  { icon: <BathtubIcon sx={{ fontSize: 50, color: "#1976d3" }} />, title: "First Class Service", text: "Our goal is your satisfaction. Office phone works 24/7." },
                  { icon: <SettingsIcon sx={{ fontSize: 50, color: "#1976d3" }} />, title: "Quality Cleaning Tools", text: "We use the best natural cleaning products for amazing results." }
                ].map((item, idx) => (
                  <Paper
                    key={idx}
                    elevation={6}
                    sx={{
                      p: 3,
                      display: "flex",
                      gap: 2,
                      alignItems: "flex-start",
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" }
                    }}
                  >
                    {item.icon}
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>{item.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{item.text}</Typography>
                    </Box>
                  </Paper>
                ))}

                {/* Key Highlights */}
                <Box mt={4}>
                  <List sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                    {["Creativity", "Experience", "Teamwork", "Result"].map((item) => (
                      <ListItem key={item} sx={{ width: "auto" }}>
                        <ListItemIcon>
                          <CheckIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Grid>

            {/* Video Column */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingBottom: "56.25%",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: 6,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <IconButton
                  component="a"
                  href="https://vimeo.com/43250124"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "primary.main",
                    fontSize: 70,
                    backgroundColor: "rgba(255,255,255,0.8)",
                    "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                  }}
                >
                  <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
}
