import { React, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Donate from "./Pages/Donate";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TermsOfUse from "./Pages/TermsOfUse";
import { Box } from "@mui/material";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <ScrollToTop />
      <Box
        sx={{
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "#e0e0e0" : "#000",
          minHeight: "100vh",
          maxWidth: "100%",
        }}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/donate' element={<Donate darkMode={darkMode} />} />
          <Route
            path='/termsofuse'
            element={<TermsOfUse darkMode={darkMode} />}
          />
          <Route
            path='/privacypolicy'
            element={<PrivacyPolicy darkMode={darkMode} />}
          />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
