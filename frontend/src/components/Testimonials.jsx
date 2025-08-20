import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  IconButton,
  Link,
} from "@mui/material";
import { Google, Facebook } from "@mui/icons-material";
import YelpIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";

// Local images (make sure they exist in src/assets/images)
import client1 from "../assets/images/client-img1.jpg";
import client2 from "../assets/images/client-img2.jpg";
import client3 from "../assets/images/client-img3.jpg";
import client4 from "../assets/images/client-img4.jpg";
import client5 from "../assets/images/client-img5.jpg";

const testimonials = [
  {
    name: "Hannah Peterson",
    text: "Perfect Cleaning LLC made my home sparkle like new! I’ve never seen such attention to detail.",
    img: client1,
    google: "#",
    yelp: "#",
    facebook: "#",
  },
  {
    name: "Carlos Mendoza",
    text: "Professional, fast, and friendly! They left my office spotless and smelling fresh.",
    img: client2,
    google: "#",
    yelp: "#",
    facebook: "#",
  },
  {
    name: "Ava Collins",
    text: "I booked them for my Airbnb. Every guest since has mentioned how clean and inviting it feels!",
    img: client3,
    google: "#",
    yelp: "#",
    facebook: "#",
  },
  {
    name: "David Harper",
    text: "They handle both my home and small business cleaning — consistent, reliable, and affordable.",
    img: client4,
    google: "#",
    yelp: "#",
    facebook: "#",
  },
  {
    name: "Emily Nguyen",
    text: "Eco-friendly products, amazing service, and they always go above and beyond.",
    img: client5,
    google: "#",
    yelp: "#",
    facebook: "#",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate active testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #f0f9ff, #cbebff)",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Hear from Our Happy Clients
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={5}>
        Trusted by families & businesses across the city — see why they choose{" "}
        <strong>Perfect Cleaning LLC</strong>
      </Typography>
      <br />

      <Stack
        direction="row"
        spacing={6}
        justifyContent="center"
        flexWrap="nowrap"
        sx={{ overflowX: "visible", px: 2 , height:'200px'}}
      >
        {testimonials.map((t, i) => {
          const isActive = i === activeIndex;
          return (
            <motion.div
              key={i}
              animate={{
                scale: isActive ? 1.15 : 1,
                opacity: isActive ? 1 : 0.6,
              }}
              transition={{ duration: 0.5 }}
              style={{
                minWidth: 200,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <Avatar
                src={t.img}
                alt={t.name}
                sx={{
                  width: isActive ? 90 : 70,
                  height: isActive ? 90 : 70,
                  border: "3px solid #1976d2",
                  margin: "0 auto",
                }}
              />
              <Box mt={1}>
                <Typography variant="body1" fontWeight="bold">
                  {t.name}
                </Typography>
                {isActive && (
                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ px: 1, fontStyle: "italic" }}
                  >
                    "{t.text}"
                  </Typography>
                )}
                <Stack
                  direction="row"
                  justifyContent="center"
                  spacing={1}
                  mt={1}
                >
                  <IconButton size="small" color="primary" component={Link} href={t.google}>
                    <Google />
                  </IconButton>
                  <IconButton size="small" color="primary" component={Link} href={t.yelp}>
                    <YelpIcon />
                  </IconButton>
                  <IconButton size="small" color="primary" component={Link} href={t.facebook}>
                    <Facebook />
                  </IconButton>
                </Stack>
              </Box>
            </motion.div>
          );
        })}
      </Stack>
    </Box>
  );
}
