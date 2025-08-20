// src/components/AchievementSection.jsx
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const achievements = [
  { icon: <CalendarTodayIcon color="primary" fontSize="large" />, number: 30, label: "Years Experience" },
  { icon: <PersonAddIcon color="primary" fontSize="large" />, number: 1599, label: "Happy Clients" },
  { icon: <GroupIcon color="primary" fontSize="large" />, number: 1299, label: "Our Employees" },
  { icon: <EmojiEventsIcon color="primary" fontSize="large" />, number: 199, label: "Awards" },
];

 function AchievementSection() {
  return (
    <Box component="section" sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {achievements.map(({ icon, number, label }, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                textAlign: "center",
                animation: `fadeInUp 0.6s ease forwards`,
                animationDelay: `${i * 0.2}s`,
                opacity: 0,
                "@keyframes fadeInUp": {
                  "0%": { opacity: 0, transform: "translateY(20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <Box>
                {icon}
                <Typography variant="h3" fontWeight="bold" mt={1}>
                  {number}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export default AchievementSection