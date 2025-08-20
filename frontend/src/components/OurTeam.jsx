import React from "react";
import { Box, Container, Grid, Typography, Avatar, Stack, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

// Team images
import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";
import team5 from "../assets/images/team-5.jpg";
import team6 from "../assets/images/team-6.jpg";

const team = [
  { name: "Nicole Hggns", role: "Founder", img: team1 },
  { name: "Williamson", role: "Team Member", img: team2 },
  { name: "Miranda Joy", role: "Team Member", img: team3 },
  { name: "Lauren Cox", role: "Team Member", img: team4 },
  { name: "Jessie Barnett", role: "Team Member", img: team5 },
  { name: "Kristina", role: "Team Leader", img: team6 },
];

export default function OurTeam() {
  return (
    <Box component="section" id="team" sx={{ py: 8, backgroundColor: "#f0f0f0" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Meet Our Awesome Team
        </Typography>

        <Grid container spacing={10} justifyContent="center">
          {team.map(({ name, role, img }, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={2}>
              <Box textAlign="center">
                <Avatar
                  alt={name}
                  src={img}
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mb: 2,
                    border: "3px solid",
                    borderColor: "primary.main",
                  }}
                />
                <Typography variant="h6" fontWeight="bold">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {role}
                </Typography>
                <Stack direction="row" spacing={1} justifyContent="center">
                  {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                    <IconButton key={idx} size="small" color="primary" href="#">
                      <Icon />
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
