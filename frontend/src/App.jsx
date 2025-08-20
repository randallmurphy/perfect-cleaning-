import React from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

// Layout Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

// Section Components
import WhyChooseUs from "./components/WhyChooseUs";
import AchievementSection from "./components/AchievementSection";
import LatestProject from "./components/LatestProject";
import OurTeam from "./components/OurTeam";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Subscription from "./components/Subscription";

// Page Components
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ContactSection from "./components/ContactSection";

 function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      {/* <Header /> */}
      <Slider />

      <Routes>
        {/* Home Route with full landing sections */}
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              {/* <WhyChooseUs />
              <AchievementSection /> */}
              {/* <LatestProject /> */}
              {/* <OurTeam /> */}
              {/* <Pricing /> */}
              {/* <Testimonials />
              <Subscription /> */}
              
            </>
          }
        />

        {/* Other routes */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactSection />} /> */}

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App