import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import backgroundImage from "/donation.jpg";
import { SlPaypal } from "react-icons/sl";
import PayPalButton from "../PayPal/PayPalButton";
import { RiBtcLine } from "react-icons/ri";

const Donate = ({ darkMode }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsConfirmed(event.target.checked);
    setShowError(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
          padding: "40px",
          backgroundColor: darkMode ? "#fff" : "#000",
          color: darkMode ? "#000" : "#fff",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant='h3'
          fontWeight='bold'
          gutterBottom
          sx={{ color: darkMode ? "#000" : "#fff" }}
        >
          Support Our Mission
        </Typography>

        <Typography
          variant='h6'
          paragraph
          sx={{ color: darkMode ? "#000" : "#fff" }}
        >
          Every donation helps provide meals for those in need. Choose your
          preferred payment method below.
        </Typography>

        {/* Checkbox for Confirmation */}
        <Box mt={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isConfirmed}
                onChange={handleCheckboxChange}
                sx={{
                  color: showError ? "red" : darkMode ? "#000" : "#fff",
                }}
              />
            }
            label={
              <Typography
                sx={{
                  color: showError ? "red" : darkMode ? "#000" : "#fff",
                  fontSize: 13,
                }}
              >
                Confirm that you donate voluntarily and that you are not forced
                by other factors, as well as confirm that you have read the
                terms of use and agree to all points.
              </Typography>
            }
          />
        </Box>

        {/* Error Message if Not Confirmed */}
        {showError && (
          <Typography mt={2} sx={{ color: "red" }}>
            You must confirm to proceed with the donation.
          </Typography>
        )}

        {/* Payment Methods (Conditional Rendering & Transparency) */}
        <Box
          mt={4}
          sx={{
            opacity: isConfirmed ? 1 : 0.3, // Dim if not confirmed
            pointerEvents: isConfirmed ? "auto" : "none", // Disable clicks
            transition: "opacity 0.3s ease",
            display: "flex",
            flexDirection: "column",
            gap: 3, // Space between buttons
          }}
        >
          <PayPalButton />
          {/* PayPal Donation */}
          <Button
            variant='outlined'
            size='large'
            href='https://paypal.me/sharethemealorg'
            target='_blank'
            sx={{
              color: darkMode ? "black" : "white",
              borderColor: darkMode ? "#000" : "#fff",
              padding: "12px 32px",
              fontSize: "18px",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0e9e3c",
                color: "white",
              },
            }}
          >
            Donate with PayPal Link
            <Box component='span' sx={{ ml: 1 }}>
              <SlPaypal size={30} />
            </Box>
          </Button>
          <Button
            variant='outlined'
            size='large'
            href='https://commerce.coinbase.com/checkout/a33276c8-5af1-48f6-958b-9f98e229edeb'
            sx={{
              // backgroundColor: "#4caf50",
              color: darkMode ? "black" : "white",
              padding: "16px 40px",
              borderColor: darkMode ? "#000" : "#fff",
              fontSize: "20px",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0e9e3c",
                color: "white",
              },
            }}
          >
            Donate with Crypto
            <Box component='span' sx={{ ml: 1 }}>
              <RiBtcLine size={30} />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Donate;
