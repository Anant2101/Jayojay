import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Fab, Box, CircularProgress } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { HelmetProvider } from "react-helmet-async";

// Lazy load the pages
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/AboutUs/AboutUs"));
const Services = lazy(() => import("./pages/Services/services"));
const Products = lazy(() => import("./pages/RecentProjects/RecentProjects"));
const ContactUS = lazy(() => import("./pages/ContactUs/contactUs"));
const ProjectDetails = lazy(() =>
  import("./pages/RecentProjects/ProjectDetails")
);
const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show the scroll-to-top button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          {/* Use Suspense to handle lazy-loaded components */}
          <Suspense
            fallback={
              <div
                style={{
                  minHeight: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress sx={{ color: "#002D62" }} />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/our-services" element={<Services />} />
              <Route path="/our-projects" element={<Products />} />
              <Route path="/contact-us" element={<ContactUS />} />
              <Route path="/details" element={<ProjectDetails />} />
            </Routes>
          </Suspense>
          <Footer />

          {/* Scroll to Top Button */}
          <Box
            sx={{
              position: "fixed",
              bottom: 16,
              right: 16,
              zIndex: 1000,
            }}
          >
            {showScroll && (
              <Fab
                sx={{
                  backgroundColor: "#002D62",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#004080",
                  },
                }}
                aria-label="scroll-to-top"
                onClick={handleScrollToTop}
              >
                <ArrowUpwardIcon />
              </Fab>
            )}
          </Box>
        </Router>
      </HelmetProvider>
    </>
  );
};

export default App;
