import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.jpeg";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Team", href: "team" },
  { label: "Pricing", href: "pricing" },
  { label: "Projects", href: "our-project" },
  { label: "Contact", href: "contact-us" },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawerList = (
    <Box sx={{ width: 250, p: 2 }} role="presentation">
      <List>
        {navLinks.map(({ label, href }) => (
          <ListItem
            button
            key={label}
            onClick={() => scrollToSection(href)}
            sx={{
              "&:hover": { bgcolor: "primary.light", color: "#fff" },
              borderRadius: 1,
              mb: 1,
            }}
          >
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: scrolled
            ? "rgba(25, 118, 210, 0.85)"
            : "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          boxShadow: scrolled ? 3 : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo + Title */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              cursor: "pointer",
            }}
            onClick={() => scrollToSection("home")}
          >
            <motion.img
              src={logo}
              alt="Perfect Cleaning Logo"
              style={{
                height: 48,
                width: 48,
                borderRadius: "50%",
                objectFit: "cover",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: scrolled ? "#fff" : "#000",
                  fontWeight: "bold",
                }}
              >
                Perfect Cleaning
              </Typography>
            </motion.div>
          </Box>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navLinks.map(({ label, href }) => (
              <Button
                key={label}
                onClick={() => scrollToSection(href)}
                sx={{
                  color: scrolled ? "#fff" : "#000",
                  fontWeight: "500",
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: scrolled ? "#fff" : "#1976d2",
                    transition: "width 0.3s ease",
                  },
                  "&:hover:after": {
                    width: "100%",
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { md: "none" }, color: scrolled ? "#fff" : "#000" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
}

export default Navbar;
