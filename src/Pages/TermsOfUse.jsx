import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage from "/termsofuse.jpg";
import { Link } from "react-router-dom";

export default function TermsOfUse({ darkMode }) {
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
            borderRadius: "26px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <CardContent>
            <Typography variant='h5' fontWeight='bold' gutterBottom>
              Terms of Use
            </Typography>
            <Typography
              variant='body2'
              color='text.primary'
              sx={{
                textAlign: "justify",
                textIndent: "2em",
                fontSize: "12pt",
              }}
            >
              Food for Life is an individual charity organization. It undertakes
              to respect the privacy of individuals in accordance with its own
              rules and regulations, including regarding the protection of
              personal data. Our goal is to help as many people as possible from
              all corners of the world.💙
              <br />
              <br />
              The access to and use of the Service constitutes acceptance by you
              or the entity you represent (“User”) of the following terms and
              conditions of use (the “Terms of Use”). If you do not agree to
              these Terms of Use, you may not access or use the Service.
              <br />
              <br />
              Food for Life can be accessed from any device with an internet
              connection. Please note that the third party services through
              which the donation occurs are not services of FFL and are subject
              to the separate terms of their respective third party service
              providers.
              <br />
              <br />
              The Service is protected by intellectual property laws worldwide.
              Nothing in these Terms of Use shall be deemed to confer any
              third-party rights or benefits on any such content.
              <br />
              <br />
              The Service allows Users to make donations in support of FFL
              projects that aim to provide relief. Donations can be made by
              credit card, PayPal, Coinbase and other payment methods (each a
              “Payment Method”). By providing information related to a Payment
              Method, the User represents, acknowledges and agrees that the
              User: (i) has permission to use that Payment Method; and (ii) will
              be solely responsible for any fee charged by the User's financial
              institution or other payment method provider for the transaction.
              <br />
              <br />
              Donations are processed through third party payment processors
              such as Coinbase, PayPal.
              <br />
              <br />
              We take every reasonable care to ensure that all donations and
              related transactions are conducted via a secure connection.
              However, the security of information and payments transmitted via
              the internet cannot be guaranteed. The User acknowledges and
              agrees that: (i) donations are at User’s own discretion and risk;
              and (ii) we have no liability whatsoever for (a) any loss the User
              may suffer if a third party obtains unauthorized access to any
              information provided by the User and (b) any act or omission by
              the User’s financial institution, credit card or other payment
              method provider, telecommunications services providers or any
              third party in connection with the donations to FFL and
              transactions related thereto.
              <br />
              <br />
              Our collection, retention and use of personal information through
              the Service is described in the{" "}
              <Button
                component={Link}
                to='/privacypolicy'
                variant='text'
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  padding: 0,
                  //   paddingRight: 1,
                  minWidth: "auto",
                }}
              >
                Privacy Policy.
              </Button>
              <br />
              <br />
              Third-party services and webpages are not under our control and
              are subject to the respective third-party’s terms and conditions.
              <br />
              <br />
              The Service is provided “as is” and “as available", without
              warranty of any kind, either express or implied, including,
              without limitation, warranties of merchantability, fitness for a
              particular purpose and non-infringement. We do not make any
              warranties or representations as to accuracy or completeness. We
              periodically change, improve or update the Service.
              <br />
              <br />
              The mention or omission of specific companies, their products or
              brand names in the Service does not imply any endorsement or
              judgement on the part of FFL.
              <br />
              <br />
              FFL’s name, emblem and abbreviation (the “FFL Marks”) are the
              exclusive property of FFL and are protected under international
              law. Unauthorized use of the FFL Marks is prohibited. The FF;
              Marks may not be reproduced or used in any manner without FFL
              prior written permission.
              <br />
              <br />
              We reserve the exclusive right in our sole discretion to (i)
              alter, limit or discontinue the Service in any respect; (ii) deny
              user access to the Service without notice (iii) modify these
              general Terms of Use.
              <br />
              <br />
              Under no circumstances shall FFL, its staff, officials, employees,
              information or content providers be liable for any loss, damage,
              liability or expense incurred or suffered that is claimed to have
              resulted from the use of the Service, including, without
              limitation, any fault, inaccuracy, error, omission, interruption
              or delay deletion, defect, alteration or use, with respect
              thereto, infection by virus or any other contamination of by
              anything which has destructive properties, communication line
              failure, regardless of cause. Under no circumstances, including
              but not limited to negligence, shall FFL be liable for any direct,
              indirect, incidental, special or consequential damages, even if
              FFL has been advised of the possibility of such damages.
              <br />
              <br />
              These Terms of Use and any dispute arising therefrom shall be
              exclusively governed by international principles of international
              law, to the exclusion of any single national system of law.
              <br />
              <br />
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
              <strong>•</strong> Donations cannot be returned under any
              circumstances.
              <strong>•</strong> The founders and administrators of the platform
              cannot be threatened, blackmailed or held accountable for how the
              funds are managed, as their use is at their discretion. Any
              action, such as a donation, represents the free and conscious
              decision of the donor. Therefore, the responsibility belongs
              exclusively to the donor, and any dissatisfaction related to the
              management of funds cannot be a valid basis for claims or pressure
              on the founders of the platform.
              <br />
              <br />
              To the extent that there exists more than one language version of
              these Terms of Use and there is any inconsistency between the
              versions, the English version shall always prevail.
              <br />
              <br />
              If you have any questions about this Terms of Use, please contact
              us via foodforlife.official0@gmail.com.
              <br />
              <br />
              Last modified: January 6, 2025
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
