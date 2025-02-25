import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ToastContainer, toast } from "react-toastify";
import { FaTiktok } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      toast.error("Please enter a valid email.");
      return;
    }
    toast.success("Subscribed successfully! 🎉");
    setEmail("");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        py: 6,
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant='h6' gutterBottom>
              Contact Us
            </Typography>
            <Typography variant='body2'>
              Email: foodforlife.official0@gmail.com
            </Typography>
            {/* <Typography variant='body2'>Phone: +1 234 567 890</Typography> */}
            {/* <Typography variant='body2'>
              Address: 123 Charity Street, City, Country
            </Typography> */}
          </Grid>

          <Grid item xs={12} md={4} textAlign='center'>
            <Typography variant='h6' gutterBottom>
              Follow Us
            </Typography>
            {/* <IconButton
              href='https://facebook.com'
              target='_blank'
              sx={{ color: "#fff" }}
            >
              <FacebookIcon />
            </IconButton> */}
            <IconButton
              href='https://www.tiktok.com/@foodforlife.org?_t=ZG-8svnvH9Ut05&_r=1'
              target='_blank'
              sx={{ color: "#fff" }}
            >
              <FaTiktok />
            </IconButton>
            <IconButton
              href='https://www.instagram.com/foodforlife_org/profilecard/?igsh=MjgwcmRpamZiZ3l2'
              target='_blank'
              sx={{ color: "#fff" }}
            >
              <InstagramIcon />
            </IconButton>
            {/* <IconButton
              href='https://linkedin.com'
              target='_blank'
              sx={{ color: "#fff" }}
            >
              <LinkedInIcon />
            </IconButton> */}
          </Grid>

          <Grid item xs={12} md={4} textAlign='center'>
            <Typography variant='h6' gutterBottom>
              Subscribe to Our Newsletter
            </Typography>
            <Box component='form' noValidate autoComplete='off'>
              <TextField
                variant='outlined'
                placeholder='Enter your email'
                type='email'
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  input: {
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                  },
                  mb: 2,
                }}
              />
              <Button
                variant='contained'
                color='primary'
                size='large'
                sx={{ textTransform: "none" }}
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box mt={6} textAlign='center'>
          <Typography variant='body2'>
            By donating you are agreeing to our{" "}
            <Button
              component={Link}
              to='/privacypolicy'
              variant='text'
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                padding: 0,
                paddingRight: 1,
                minWidth: "auto",
              }}
            >
              Privacy Policy
            </Button>
            and{" "}
            <Button
              component={Link}
              to='/termsofuse'
              variant='text'
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                padding: 0,
                minWidth: "auto",
              }}
            >
              Terms of Use
            </Button>
          </Typography>
          <Typography variant='body2'>
            © 2025 Food for life. All rights reserved.
          </Typography>
        </Box>
      </Container>
      <ToastContainer position='top-center' autoClose={3000} />
    </Box>
  );
}
