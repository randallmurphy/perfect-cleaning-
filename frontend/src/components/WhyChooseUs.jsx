import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import BuildIcon from "@mui/icons-material/Build";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import serviceTeam from "../assets/images/service-team.jpg";

function WhyChooseUs() {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundColor: "#f9f9f9",
        overflowX: "hidden", // ✅ stops x-scroll
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Why Choose Us
        </Typography>
        <Typography align="center" paragraph>
          We serve our clients as if we were serving ourselves. We value their
          feedback and we use it to improve our work.
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{ mt: 4 }}
          justifyContent="center"
          alignItems="center"
        >
          {/* Left Column */}
          <Grid item xs={12} md={6} lg={4}>
            <Box mb={3}>
              <StarIcon color="primary" fontSize="large" />
              <Typography variant="h6" mt={1}>
                We provide best solutions for a Clean Environment.
              </Typography>
              <Typography>
                We serve our clients as if we were serving ourselves. We value
                their feedback and we use it to improve our work.
              </Typography>
            </Box>
            <Box>
              <PeopleIcon color="primary" fontSize="large" />
              <Typography variant="h6" mt={1}>
                We Provide Qualified and Expert
              </Typography>
              <Typography>
                We provide training to our personnel to ensure high standards.
                We stay up-to-date with eco-friendly innovations.
              </Typography>
            </Box>
          </Grid>

          {/* Middle Column - Image */}
          <Grid item xs={12} md={6} lg={4}>
            <Box
              component="img"
              src={serviceTeam}
              alt="Service Team"
              sx={{
                width: "100%", // ✅ responsive
                height: "auto",
                borderRadius: "50%",
                objectFit: "cover",
                maxWidth: 350, // keeps it neat
                display: "block",
                mx: "auto", // centers it
              }}
            />
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6} lg={4}>
            <Box mb={3}>
              <BuildIcon color="primary" fontSize="large" />
              <Typography variant="h6" mt={1}>
                Modern Technology and Tools We Use
              </Typography>
              <Typography>
                We carefully choose the best and most natural cleaning products
                that give amazing results.
              </Typography>
            </Box>
            <Box>
              <SupportAgentIcon color="primary" fontSize="large" />
              <Typography variant="h6" mt={1}>
                Quick Response and 24/7 Support
              </Typography>
              <Typography>
                Our goal is your satisfaction. Office phone works around the
                clock (24/7).
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WhyChooseUs;
