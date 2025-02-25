import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import homeBack from "/home.jpg";
import homeBack2 from "/home2.jpg";
import ua1 from "/ua1.jpg";
import ua2 from "/ua2.jpg";
import { Link } from "react-router-dom";

const Section = styled(Box)({
  padding: "10px 0",
  textAlign: "center",
});

const Image = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
});

const YellowButton = styled(Button)({
  backgroundColor: "#f4c430",
  color: "#000",
  padding: "12px 32px",
  fontSize: "16px",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#dba100",
  },
});
const BackgroundBox = styled(Box)({
  width: "100%",
  height: "400px", // Adjust the height as needed
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
});
export default function Home({ darkMode }) {
  return (
    <Box
      sx={{
        backgroundColor: darkMode,
        width: "100%",
      }}
    >
      {/* Hero Section */}
      <Section
        sx={{
          padding: "80px 0",
          backgroundColor: darkMode,
          width: "100%",
        }}
      >
        <Box sx={{ maxWidth: "100%" }}>
          <Typography
            variant='h3'
            component='h1'
            fontWeight='bold'
            gutterBottom
          >
            Fight hunger with us
          </Typography>
          <Typography variant='h6' color={darkMode}>
            With just a few taps on your phone you can donate to someone in need
            and the World Food Programme will deliver the meals. Help us end
            hunger by donating now.
          </Typography>
        </Box>
      </Section>

      {/* Call to Action Section */}
      <Section
        sx={{
          backgroundColor: darkMode,
          width: "100%",
        }}
      >
        <Grid container alignItems='center'>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: "0 20px 0 0",
              boxSizing: "border-box",
            }}
          >
            <BackgroundBox style={{ backgroundImage: `url(${homeBack})` }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                width: "100%",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <CardContent>
                <Typography
                  variant='body2'
                  color='text.primary'
                  sx={{
                    textAlign: "justify",
                    textIndent: "2em",
                    fontSize: "12pt",
                  }}
                >
                  The situation in Palestine, especially in the Gaza Strip, is
                  marked by armed conflicts and a deep humanitarian crisis
                  characterized by famine and massive destruction. The clashes
                  generated a severe food crisis. International organizations
                  warn that hundreds of thousands of people in Gaza are facing
                  starvation. A UN report from October 2024 estimates that
                  around 345,000 people in the Gaza Strip will reach
                  "catastrophic" levels of hunger this winter, up from 133,000
                  today. Palestinian officials and representatives of the
                  international community have accused Israel of using
                  starvation as a weapon of war by restricting access to food,
                  water and medicine. The Palestinian Foreign Minister stated in
                  December 2023 that Israel is deliberately using starvation
                  against the population of Gaza. Children are among the most
                  affected by this crisis. Malnutrition and lack of access to
                  adequate health services have led to an alarming increase in
                  cases of illness and death among minors. The UN reported that
                  Gaza now has "the highest number of child amputees per capita
                  in the world", many of them losing their limbs and undergoing
                  surgery without anaesthesia.
                </Typography>
                <Typography variant='h5' fontWeight='bold' gutterBottom mt={3}>
                  <YellowButton variant='contained' component={Link} to='/donate'>
                    Donate for Palestine
                  </YellowButton>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg'
                    alt='Palestine Flag'
                    style={{
                      width: "24px",
                      height: "16px",
                      marginLeft: "8px",
                    }}
                  />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Section>

      {/* Purpose Section */}
      <Section
        sx={{
          backgroundColor: darkMode,
          width: "100%",
        }}
      >
        <Grid container alignItems='center'>
          <Grid item xs={12} md={6}>
            <Typography
              variant='h4'
              component='h2'
              fontWeight='bold'
              gutterBottom
            >
              Our Purpose
            </Typography>
            <Typography>
              Empowering people to end global hunger. We’re here to make
              fighting hunger accessible for everyone.
            </Typography>
            <Typography color={darkMode}>
              We’re here to end global hunger. And we’re guessing you are too.
              That’s why we were founded in 2015 under the United Nations World
              Food Programme — to make fighting hunger accessible to everyone.
              Because with just €0.70 and a few taps on your phone, you can
              share your meal with someone in need.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: "0 20px",
              boxSizing: "border-box",
            }}
          >
            <BackgroundBox style={{ backgroundImage: `url(${homeBack2})` }} />
          </Grid>
        </Grid>
      </Section>
      <Section
        sx={{
          backgroundColor: darkMode,
          width: "100%",
        }}
      >
        <Grid container alignItems='center'>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: "0 20px 0 0",
              boxSizing: "border-box",
            }}
          >
            <BackgroundBox style={{ backgroundImage: `url(${ua1})` }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                width: "100%",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <CardContent>
                <Typography
                  variant='body2'
                  color='text.primary'
                  sx={{
                    textAlign: "justify",
                    textIndent: "2em",
                    fontSize: "12pt",
                  }}
                >
                  Children in conflict zones, such as Palestine and Ukraine,
                  live in a reality marked by deep suffering, insecurity and
                  acute deprivation. In Palestine, especially in the Gaza Strip,
                  the war turned childhood into a nightmare. Thousands of
                  children have been killed or injured, and those who survive
                  face daily shortages of food, water and medicine. Destroyed
                  streets and bombed homes no longer offer safety, and schools
                  frequently become collateral targets of attacks. Education
                  comes to an abrupt halt and the prospect of a stable future
                  vanishes under the weight of continued violence.
                  <br />
                  <br />
                  In Ukraine, the war has forced millions of children from their
                  homes, some becoming refugees in other countries, while others
                  live in underground shelters, hiding from bombings. Lack of
                  food, limited access to medical care and psychological trauma
                  become part of their daily lives. Many children have spent
                  years without going to school, growing up in a climate
                  dominated by fear and uncertainty.
                </Typography>
                <Typography variant='h5' fontWeight='bold' gutterBottom mt={3}>
                <YellowButton variant='contained' component={Link} to='/donate'>
                    Donate for Ukraine
                  </YellowButton>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg'
                    alt='Ukrainian Flag'
                    style={{
                      width: "24px",
                      height: "16px",
                      marginLeft: "8px",
                    }}
                  />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Section>

      {/* Purpose Section */}
      <Section
        sx={{
          backgroundColor: darkMode,
          width: "100%",
        }}
      >
        <Grid container alignItems='center'>
          <Grid item xs={12} md={6}>
            {/* <Typography
              variant='h4'
              component='h2'
              fontWeight='bold'
              gutterBottom
            >
              Our Purpose
            </Typography> */}
            <Typography
              variant='body2'
              color={darkMode}
              sx={{
                textAlign: "justify",
                textIndent: "2em",
                fontSize: "12pt",
              }}
            >
              In both conflicts, children are affected by devastating losses –
              be it parents, friends or their own homes. Malnutrition is
              becoming more widespread and hunger is becoming a silent but
              lethal weapon. Hospitals are overwhelmed, and in many cases, basic
              treatments are lacking, leaving children to suffer in silence.
            </Typography>
            <Typography
              color={darkMode}
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
                fontSize: "12pt",
              }}
            >
              This reality outlines a generation for whom war has become
              normality, a generation that sees its future threatened at every
              turn. The international community looks on with concern, but
              solutions are slow to bring immediate relief. Despite humanitarian
              efforts, children continue to be the most vulnerable to these
              tragedies, and their voices often go unheard, lost in the noise of
              conflict.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: "0 20px",
              boxSizing: "border-box",
            }}
          >
            <BackgroundBox style={{ backgroundImage: `url(${ua2})` }} />
          </Grid>
        </Grid>
      </Section>
    </Box>
  );
}
