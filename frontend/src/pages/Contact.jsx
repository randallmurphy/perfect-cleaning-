import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", plan: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: null, message: "" });

  // ✅ Pull selected plan from localStorage when landing on contact section
  useEffect(() => {
    const savedPlan = localStorage.getItem("selectedPlan");
    if (savedPlan) {
      setForm((prev) => ({
        ...prev,
        plan: savedPlan,
        message: `I am interested in the ${savedPlan} plan.`,
      }));
      localStorage.removeItem("selectedPlan"); // clear after use
    }
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          selected_plan: form.plan || "N/A",
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setStatus({
        success: true,
        message: "✅ Thanks for reaching out! We’ll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "", plan: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        success: false,
        message: "❌ Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    // ✅ Added id for smooth scrolling
    <Box id="contact-section" sx={{ background: "linear-gradient(135deg, #e3f2fd, #bbdefb)", py: 8 }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: "bold", color: "#1976d2", mb: 4 }}
          >
            Get in Touch with Perfect Cleaning
          </Typography>
        </motion.div>

        {status.message && (
          <Alert severity={status.success ? "success" : "error"} sx={{ mb: 3 }}>
            {status.message}
          </Alert>
        )}

        <Box
          component={motion.form}
          onSubmit={handleSubmit}
          noValidate
          sx={{
            background: "#fff",
            p: 4,
            borderRadius: 3,
            boxShadow: 6,
            maxWidth: 600,
            mx: "auto",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            margin="normal"
          />

          {form.plan && (
            <TextField
              fullWidth
              label="Selected Plan"
              name="plan"
              value={form.plan}
              onChange={handleChange}
              margin="normal"
              InputProps={{ readOnly: true }}
            />
          )}

          <TextField
            fullWidth
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            multiline
            rows={4}
            required
            margin="normal"
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 3, py: 1.5, fontSize: "1rem", textTransform: "none" }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
