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
// import PayPalButton from "../PayPal/PayPalButton";
import { RiBtcLine } from "react-icons/ri";
import { keyframes } from "@mui/system";

const heartAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const brokenHeartAnimation = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 0;
  }
  50% {
    transform: rotate(45deg) scale(1.2);
    opacity: 1;
  }
  100% {
    transform: rotate(90deg) scale(1);
    opacity: 0;
  }
`;

const Heart = () => (
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "70px",
      color: "red",
      animation: `${heartAnimation} 1.5s ease-in-out`,
    }}
  >
    ❤️
  </Box>
);

const BrokenHeart = () => (
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "70px",
      color: "red",
      animation: `${brokenHeartAnimation} 1.5s ease-in-out`,
    }}
  >
    💔
  </Box>
);

const Donate = ({ darkMode }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showError, setShowError] = useState(false);


  const [showHeart, setShowHeart] = useState(false);
  const [showBrokenHeart, setShowBrokenHeart] = useState(false);
  
  const handleCheckboxChange = (event) => {
    setIsConfirmed(event.target.checked);
    if (event.target.checked) {
      setShowHeart(true);
      setShowBrokenHeart(false);
      setTimeout(() => setShowHeart(false), 1500); 
    } else {
      setShowHeart(false); 
      setShowBrokenHeart(true);
      setTimeout(() => setShowBrokenHeart(false), 1500); 
    }
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
        {showHeart && <Heart />}{showBrokenHeart && <BrokenHeart />}
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

        {showError && (
          <Typography mt={2} sx={{ color: "red" }}>
            You must confirm to proceed with the donation.
          </Typography>
        )}

        <Box
          mt={4}
          sx={{
            opacity: isConfirmed ? 1 : 0.3, 
            pointerEvents: isConfirmed ? "auto" : "none", 
            transition: "opacity 0.3s ease",
            display: "flex",
            flexDirection: "column",
            gap: 3, 
          }}
        >
          {/* <PayPalButton /> */}

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
