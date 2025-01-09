import React from "react";
import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage from "/privacy.png";

const images = [
  "/donation.jpg",
  "/home.jpg",
  "/home2.jpg",
  "/kids.jpg",
  //   "/images/img5.jpg",
];

export default function PrivacyPolicy({ darkMode }) {
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
          maxWidth: "800px",
          textAlign: "center",
          padding: "40px",
          color: darkMode ? "#000" : "#fff",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Card
          sx={{
            marginTop: "24px",
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <Typography variant='h4' fontWeight='bold' gutterBottom>
            Privacy Policy
          </Typography>
          <CardContent>
            <Typography
              variant='body2'
              color='text.primary'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              Food for Life is an individual charity organization. It undertakes
              to respect the privacy of individuals in accordance with its own
              rules and regulations, including regarding the protection of
              personal data. Our goal is to help as many people as possible from
              all corners of the world.
            </Typography>

            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              1. Scope of Policy
            </Typography>
            <Typography
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              This Privacy Policy describes how we collect, use, process and
              disclose your information, including personal information. Our
              website is referred to as the "Service". By using this service,
              you agree to the privacy policy presented here.
            </Typography>

            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              2. Information We Collect
            </Typography>
            <Typography
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              We collect information to provide and provide our Service, to
              administer the Service, and to enable you to enjoy and easily
              navigate our Service. When you use the Service or engage in
              certain activities, such as making a donation, we may ask you to
              provide some or all of the following types of information:
            </Typography>
            <Typography
              variant='body2'
              sx={{
                marginLeft: "16px",
                textIndent: "2em",
                textAlign: "justify",
              }}
            >
              <strong>•</strong> Making a donation through the Service: If you
              make a one-time or recurring donation through the Service, provide
              your payment method information.
            </Typography>
            <Typography
              variant='body2'
              sx={{
                marginLeft: "16px",
                textIndent: "2em",
                textAlign: "justify",
              }}
            >
              <strong>•</strong> Communications with us: We may collect personal
              information from you, such as your email address, first and last
              name, when you choose to request information about our service,
              sign up for the Food for Life newsletter, or make a donation.
            </Typography>
            <Typography
              variant='body2'
              sx={{
                marginLeft: "16px",
                textIndent: "2em",
                textAlign: "justify",
              }}
            >
              <strong>•</strong> Making a gift donation: If you make a donation
              on behalf of another person, you may be asked for that person's
              name and contact details to enable us to deliver the gift to the
              recipient.
            </Typography>
            <br />
            <Typography
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              In addition to the information you choose to provide to us, we and
              our service providers also use standard technologies to
              automatically collect certain additional information:
            </Typography>
            <Typography
              variant='body2'
              sx={{
                marginLeft: "16px",
                textIndent: "2em",
                textAlign: "justify",
              }}
            >
              <strong>•</strong> We automatically record certain information
              about how you use our Service. This may include information such
              as a User’s Internet Protocol (IP) address, cookie identifiers,
              Advertiser ID and other device identifiers that are automatically
              assigned to your computer or device when you access the Internet,
              operating system, country, languages and locales, hardware type,
              the pages or features of our Service to which you browsed and the
              time spent on those pages or features, the links on our Services
              that you clicked on and other statistics. We use such data to
              administer the Service and we analyze (and may engage third
              parties to analyze) such data to improve, customize and enhance
              our Service by expanding features and functionality and tailoring
              them to individuals’ needs and preferences.
            </Typography>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              3. Information from Other Sources
            </Typography>
            <Typography
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              We may receive information about you from third parties. For
              example, if you access our Services through an application of a
              third party, such as the App Store/Google Play Store or a Social
              Networking Service (“SNS”), we may collect such information about
              you from that third-party application that you have made public
              via your privacy settings therein. Information we collect through
              third-party applications may include your name, your SNS user
              identification number, your SNS user name, profile picture and
              optionally your email and list of your contacts on the SNS.
              <br />
              <br />
              We will never post anything to a SNS without your permission.
            </Typography>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              4. How We Use Your Information
            </Typography>
            <Typography
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              We acquire, hold, use, and process personal information for a
              variety of business purposes, including:
            </Typography>
            <Typography
              variant='body2'
              sx={{
                marginLeft: "16px",
                textIndent: "2em",
                textAlign: "justify",
              }}
            >
              <strong>•</strong> to provide, personalise, and improve your
              experience with the Service, for example by providing customised,
              personalised, or localised content, recommendations, features, and
              advertising related to the Service on or outside of the Service.
            </Typography>
            <Typography
              variant='body2'
              sx={{
                marginLeft: "16px",
                textIndent: "2em",
                textAlign: "justify",
              }}
            >
              <strong>•</strong> to ensure technical functionality of the
              Service, develop new features and services, and analyse your use
              of the Service, including your interaction with the mobile
              application, advertising, products, and services that are made
              available, linked to, or offered through the Service. Serviciului.
            </Typography>
            <Typography
              variant='body2'
              sx={{
                marginLeft: "16px",
                textIndent: "2em",
                textAlign: "justify",
              }}
            >
              <strong>•</strong> to communicate with you for Service-related or
              research purposes including via emails, notifications, or other
              messages, which you agree to receive.
            </Typography>
            <Typography
              variant='body2'
              sx={{
                marginLeft: "16px",
                textIndent: "2em",
                textAlign: "justify",
              }}
            >
              <strong>•</strong> to process your payment to prevent or detect
              fraud including fraudulent payments and fraudulent use of the
              Service.
            </Typography>
            <Typography
              variant='body2'
              sx={{
                marginLeft: "16px",
                textIndent: "2em",
                textAlign: "justify",
              }}
            >
              <strong>•</strong> to communicate with you, either directly or
              through one of our partners, for marketing and promotional
              purposes via emails, notifications, or other messages, consistent
              with any permissions you may have communicated to us; in the
              section User Access and Control below, we inform you of the
              controls you can use to opt out from receiving certain messages.
            </Typography>
            <Typography
              variant='body2'
              sx={{
                marginLeft: "16px",
                textIndent: "2em",
                textAlign: "justify",
              }}
            >
              <strong>•</strong> to enable and promote the Service and other
              relevant services or products, either within or outside the
              Service, including features and content of the Service and
              products and services made available through the Service.
            </Typography>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              5. Sharing Personal Information with Third Parties
            </Typography>
            <Typography
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              We use technical service providers which may operate the technical
              infrastructure that we need to provide the Service, in particular
              providers which host, store, manage, and maintain the application,
              its content and the data we process.
              <br />
              <br />
              We use technical service providers to help us communicate with
              you, as described in Section ”How We Use Your Information” of this
              Policy.
              <br />
              <br />
              We use marketing and advertising partners to show you more
              tailored content, or to help us understand your use of the
              Service, to provide you with a better service. We also may share
              personal information with certain marketing and advertising
              partners to send you promotional communications about the Service.
            </Typography>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              6. Cookies, Third-Party Software Development Kits and Tracking
            </Typography>
            <Typography
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              A cookie is a piece of data stored on the User's device containing
              information about the device. Usage of a cookie is in no way
              linked to any personally identifiable information while using the
              Service. By setting a cookie, Foodforlive will remember the User
              the next time he/she visits the Service. The User is always free
              to decline our cookies if his/her browser permits, although in
              that case he/she may not be able to use certain features of the
              Service and may be required to re-enter information more
              frequently to use certain features of the Service.
            </Typography>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              7. Social Media Platforms
            </Typography>
            <Typography
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              From within the Service, users are able to share content on
              Facebook, Twitter, Instagram, TikTok and WhatsApp.
            </Typography>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              8. Donations via the Service
            </Typography>
            <Typography
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              When you make donations to ShareTheMeal, we process these through
              third-party payment processors such as Coinbase, PayPal.
            </Typography>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              9. Children
            </Typography>
            <Typography
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              The Service is not directed to children under the age of 16. We do
              not knowingly collect personal information from children under 16.
            </Typography>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              10. Security
            </Typography>
            <Typography
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              To protect your personal data from unauthorized access and abuse,
              we have implemented technical and organizational security
              measures. We review these security measures regularly and adapt
              them, as appropriate, at the stage of technological progress. Our
              infrastructure is served over HTTPS so your device can it only
              communicates with our server through a secure channel. All payment
              data is processed by our processing partners a payments. The
              payment data itself is not processed by Foodforlife, they are
              managed only by third-party services, in order to ensure greater
              security. All responsibility for data processing of endowment, as
              well as the payment method are managed safely by to our payment
              processors, which are payment companies of global trust.
            </Typography>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              11. Notification of Changes
            </Typography>
            <Typography
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              This privacy policy may change from time to time. Changes will be
              posted within the Service so Users are always aware of what
              information is collected and how it is used. Please make sure you
              read any such notice carefully. If you do not wish to continue
              using the Service under the new version of the Privacy Policy,
              please leave the platform.
            </Typography>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              12. Disclaimer – Links to other Sites
            </Typography>
            <Typography
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              The Service contains hypertext links to other services. The
              Foodofrlive Programme assumes no responsibility for those services
              including the privacy practices or the content of such web sites.
            </Typography>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              sx={{ marginTop: "16px" }}
              textAlign='left'
            >
              13. Donation
            </Typography>
            <Typography
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              All donated resources will be used for the maintenance of the
              Foodforlive platform, for help, for the founders and for other
              actions at the decision of the platform founders.
              <br />
              <br />
              By making a donation, donors confirm that they have read,
              understood and fully accepted these conditions. Before completing
              the donation process, each user is required to check that they
              have read this informative text. This action represents the
              donor's express consent and acceptance that:
            </Typography>
            <Typography
              variant='body2'
              sx={{
                marginLeft: "16px",
                textIndent: "2em",
                textAlign: "justify",
              }}
            >
              <strong>•</strong> Donations cannot be returned under any
              circumstances.
            </Typography>
            <Typography
              variant='body2'
              sx={{
                marginLeft: "16px",
                textIndent: "2em",
                textAlign: "justify",
              }}
            >
              <strong>•</strong> The founders and administrators of the platform
              cannot be threatened, blackmailed or held accountable for how the
              funds are managed, as their use is at their discretion.
            </Typography>
            <Typography
              variant='body2'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
              }}
            >
              Any action, such as a donation, represents the free and conscious
              decision of the donor. Therefore, the responsibility belongs
              exclusively to the donor, and any dissatisfaction related to the
              management of funds cannot be a valid basis for claims or pressure
              on the founders of the platform.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
