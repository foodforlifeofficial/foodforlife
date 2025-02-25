import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Switch,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "/logo.png";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 550);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: darkMode ? "#121212" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display='flex' alignItems='center'>
          {/* <Typography
            variant='body1'
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "bold",
              fontSize: "20px",
              color: "#0070f3",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            FoodForLife
          </Typography> */}
          <Link to='/'>
            <img
              src={logo}
              alt='Company Logo'
              style={{
                height: "50px",
              }}
            />
          </Link>
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            color='default'
          />
          <Typography variant='body1' color='secundary'>
            Dark mode
          </Typography>
        </Box>

        {isMobile ? (
          <Box>
            <IconButton
              edge='end'
              color='inherit'
              aria-label='menu'
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} to='/' onClick={handleMenuClose}>
                Home
              </MenuItem>
              <MenuItem component={Link} to='/donate' onClick={handleMenuClose}>
                Donate
              </MenuItem>
              <MenuItem component={Link} to='/about' onClick={handleMenuClose}>
                About
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box>
            <Button color='inherit' component={Link} to='/'>
              Home
            </Button>
            <Button color='inherit' component={Link} to='/donate'>
              Donate
            </Button>
            <Button color='inherit' component={Link} to='/about'>
              About
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
