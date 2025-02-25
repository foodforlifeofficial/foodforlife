import React from "react";
import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage from "/termsofuse.jpg";
import donation from "/donation.jpg";
import home from "/home.jpg";
import home2 from "/home2.jpg";
import kids from "/kids.jpg";
import { styled } from "@mui/system";

const images = [
  donation,
  home,
  home2,
  kids
];
const SlideBox = styled(Box)({
  width: "100%",
  height: "400px", 
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
});
export default function About({ darkMode }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: "3%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
          padding: "40px",
          color: darkMode ? "#000" : "#fff",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Card
          sx={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <img
            src={kids}
            alt='Child with bread'
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <CardContent>
            <Box display='flex' alignItems='center' mb={1}>
              <Avatar
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                  width: 24,
                  height: 24,
                  mr: 1,
                }}
              >
                <PeopleAltIcon fontSize='small' />
              </Avatar>
              <Typography variant='body2' color='text.secondary'>
                89,433 supporters
              </Typography>
            </Box>
            <Typography
              variant='h6'
              color='primary'
              sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
            >
              465,123 meals
            </Typography>
          </CardContent>
        </Card>

        {/* Overview Card */}
        <Card
          sx={{
            marginTop: "24px",
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <CardContent>
            <Typography variant='h5' fontWeight='bold' gutterBottom>
              Overview
            </Typography>
            <Typography variant='body1' fontWeight='bold' paragraph>
              Common Meals brings hope and support by providing emergency food
              assistance to affected families in Palestine and Ukraine.
            </Typography>
            <Typography variant='body1'>
              In Palestine, the intensified conflict since October 2023 has
              triggered a severe humanitarian crisis. More than 1.8 million
              people are experiencing food insecurity, and many of them have
              lost their homes, finding refuge in temporary shelters. Similarly,
              in Ukraine, following attacks by Russia, many children and
              families are struggling to survive and in urgent need of support.
              Food for Life aims to reach as many people as possible, constantly
              expanding the network of volunteers to make a real difference in
              the lives of those affected. Together we can bring comfort and
              hope where it is needed most. 💙
            </Typography>
          </CardContent>
        </Card>

        {/* Image Carousel Card */}
        <Card
          sx={{
            marginTop: "24px",
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <Slider {...settings}>
            {images.map((image, index) => (
              <Box key={index}>
                <img
                  src={image}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
          </Slider>
          <CardContent>
            <Typography variant='h5' fontWeight='bold'>
              Photo Stories of Impact
            </Typography>
            <Typography variant='body1' sx={{ marginTop: "10px" }}>
              These images capture moments of hope and the impact made through
              our initiatives, reaching communities and providing vital aid
              where it is needed most.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            marginTop: "24px",
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <CardContent>
            <Typography variant='h5' fontWeight='bold' gutterBottom>
              Updates
            </Typography>

            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              27/12/2024
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              13,000 children received New Year's gifts. These included:
              chocolates, cereals, drinks and clothes.
            </Typography>

            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              12/11/2024
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              With the ceasefire agreement in Lebanon, FFL was able to reach
              59,000 people in the Gaza Strip with reduced rations.
            </Typography>

            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              10/09/2024
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              FFL managed to insure 46,234 needy people from Ukraine, who
              suffered as a result of the war with Russia.
            </Typography>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              29/05/2024
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              FFL has provided more than 34,000 people with food assistance
              across Gaza and the West Bank.
            </Typography>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              17/03/2024
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              FFL sent 15,000 units of croup for Ukraine, to feed on the front.
            </Typography>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              21/01/2024
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              In Palestine, 23,433 children were provided with food products.
            </Typography>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              21/01/2024
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              3500 children received New Year's gifts.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
