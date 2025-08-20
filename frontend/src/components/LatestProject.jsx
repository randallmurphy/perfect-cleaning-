import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

// Import images from src/assets/img
import project1 from "../assets/images/project-bg-1.jpg";
import project2 from "../assets/images/project-bg-2.jpg";
import project3 from "../assets/images/project-bg-3.jpg";
import project4 from "../assets/images/project-bg-4.jpg";
import project5 from "../assets/images/project-bg-5.jpg";
import project6 from "../assets/images/project-bg-6.jpg";

const projects = [
  { img: project1, alt: "project one", title: "Apartment Cleaning" },
  { img: project2, alt: "project two", title: "Office Cleaning" },
  { img: project3, alt: "project three", title: "Vacation Rental Cleaning" },
  { img: project4, alt: "project four", title: "House Cleaning" },
  { img: project5, alt: "project five", title: "Renovation Cleanup" },
  { img: project6, alt: "project six", title: "Green Cleaning Service" },
];

export default function LatestProject() {
  return (
    <Box
      component="section"
      sx={{
        py: 12,
        background: "linear-gradient(135deg, #e0f7fa, #f0f9ff)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1976d2", mb: 6 }}
        >
          Our Latest Projects
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {projects.map(({ img, alt, title }, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  width: 350,
                  height: 400,
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: 6,
                  transition: "transform 0.4s, box-shadow 0.4s",
                  "&:hover": {
                    transform: "scale(1.08)",
                    boxShadow: 12,
                  },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={img}
                  alt={alt}
                  sx={{
                    height: 220,
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    bgcolor: "rgba(25, 118, 210, 0.85)",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    py: 3,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {title}
                  </Typography>
                  <Button
                    href="#"
                    endIcon={<ArrowCircleRightIcon />}
                    sx={{
                      color: "#fff",
                      mt: 2,
                      textTransform: "none",
                      border: "1px solid #fff",
                      borderRadius: 2,
                      px: 3,
                      "&:hover": {
                        bgcolor: "#fff",
                        color: "#1976d2",
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
