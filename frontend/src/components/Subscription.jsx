import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";

 function Subscription() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography variant="body1" gutterBottom>
          Get latest news in your inbox
        </Typography>
        <Typography variant="h4" gutterBottom>
          Subscribe now
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 3 }}>
          <TextField
            type="email"
            placeholder="Enter your email address"
            variant="outlined"
            size="medium"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ flexGrow: 1 }}
          />
          <Button type="submit" variant="contained" color="primary" size="large">
            Subscribe Now
          </Button>
        </Box>
        <Typography variant="caption" color="text.secondary" mt={2} display="block">
          <i className="fa fa-lock" /> We never share your email with others
        </Typography>
      </Container>
    </Box>
  );
}
export default Subscription