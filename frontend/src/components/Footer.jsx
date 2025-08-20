import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  useTheme,
  Fab,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";

// Import logo & payment logos
import logo from "../assets/images/logo.jpeg";
import mastercard from "../assets/images/mastercard.png";
import paypal from "../assets/images/paypal.png";
import visa from "../assets/images/visa02.png";
import amex from "../assets/images/americanexpress.png";
import cashapp from "../assets/images/cashapp.png";
import venmo from "../assets/images/venmo.png";
import zelle from "../assets/images/zelle.png";
import applepay from "../assets/images/applepay.png";

function Footer() {
  const theme = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);

  const paymentLogos = [mastercard, paypal, visa, amex, cashapp, venmo, zelle, applepay];

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY + window.innerHeight;
      if (scrollTop + 50 >= scrollHeight) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowBackToTop(false);
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: "white",
        pt: 6,
        pb: 4,
        boxShadow: "0px -2px 10px rgba(0,0,0,0.2)",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo & Contact Info */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={logo}
              alt="Perfect Cleaning Logo"
              sx={{
                width: 160,
                mb: 2,
                borderRadius: "50%",
                border: `3px solid ${theme.palette.secondary.main}`,
                boxShadow: `0 0 15px ${theme.palette.secondary.main}`,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05) rotate(-2deg)",
                  boxShadow: `0 0 25px ${theme.palette.secondary.main}`,
                },
              }}
            />
            <Typography variant="body1" mb={1}>
              We are always ready to help you.
            </Typography>
            <Typography variant="body2">
              1674 Delano Ave #1002 Memphis TN 38127
            </Typography>
            <Stack spacing={0.5} mt={2}>
              <Typography>Phone: 901-264-9766</Typography>
              <Typography>
                Email:{" "}
                <Link href="mailto:hggnsnicole@gmail.com" color="inherit" underline="hover">
                  info@perfectcleaning.com
                </Link>
              </Typography>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4} textAlign={{ xs: "left", md: "center" }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {["Home", "About", "Services", "Projects", "Pricing", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  color="inherit"
                  underline="hover"
                  sx={{
                    cursor: "pointer",
                    fontWeight: 500,
                    transition: "color 0.3s ease",
                    "&:hover": { color: theme.palette.secondary.main },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Opening Hours & Social */}
          <Grid item xs={12} md={4} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Opening Hours
            </Typography>
            <Typography>Mon - Fri: 06:00 am - 6:00 pm</Typography>
            <Typography>Saturday: 06:00 am - 6:00 pm</Typography>
            <Typography>Sunday: Closed</Typography>

            <Stack
              direction="row"
              spacing={1}
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
              mt={2}
            >
              {[FacebookIcon, TwitterIcon, GoogleIcon, LinkedInIcon, YouTubeIcon, PinterestIcon].map(
                (Icon, i) => (
                  <IconButton
                    key={i}
                    color="inherit"
                    size="large"
                    sx={{
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: theme.palette.secondary.main,
                        transform: "scale(1.2)",
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                )
              )}
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box mt={6} textAlign="center" fontSize={14} sx={{ opacity: 0.85 }}>
          © {new Date().getFullYear()} All Rights Reserved by Perfect Cleaning Services.
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            mt={1}
            flexWrap="wrap"
            alignItems="center"
          >
            {paymentLogos.map((logoSrc, i) => (
              <Box
                key={i}
                component="img"
                src={logoSrc}
                alt={`payment-${i}`}
                sx={{
                  height: 24,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.3)",
                    filter: "drop-shadow(0 0 10px white)",
                  },
                  cursor: "pointer",
                  m: 0.5,
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Floating Back to Top Button */}
        {showBackToTop && (
          <Fab
            color="secondary"
            onClick={handleBackToTop}
            sx={{
              position: "fixed",
              bottom: 30,
              right: 30,
              zIndex: 9999,
              boxShadow: "0 0 20px rgba(255,255,255,0.6)",
              "&:hover": {
                transform: "scale(1.2)",
                boxShadow: "0 0 30px rgba(255,255,255,1)",
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        )}
      </Container>
    </Box>
  );
}

export default Footer;
