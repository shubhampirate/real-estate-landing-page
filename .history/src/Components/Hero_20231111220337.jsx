import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import Companies from "./Companies";
import Guide from "./Guide";
import Properties from "./Properties";
import Details from "./Details";
import GetStarted from "./GetStarted";
import Footer from "./Footer";

import heroImg from "../media/img_1.jpeg";
import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  // const Title = styled(Typography)(({ theme }) => ({
  //   fontSize: "64px",
  //   color: "#000336",
  //   fontWeight: "bold",
  //   margin: theme.spacing(4, 0, 4, 0),
  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: "40px",
  //   },
  // }));
  const containerStyle = {
    display: 'flex',
    gap: '10px', // Adjust the gap between buttons as needed
  };

  return (
    <Box sx={{ backgroundColor: "#ffffff"}}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "40px",
                // color: "#1C1F25",
                fontWeight: "bold",
                mt: 10,
                mb: 4,
              }}
            >
              <span >Empower Your Retirement with</span> <span sx={{color:"#387FF5 !important"}}>    AI-Driven Insights </span>
            </Typography>

            {/* <Title variant="h4" sx={{color: "#1C1F25"}}>
              Empower Your Retirement with AI-Driven Insights
            </Title> */}
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Nimbus harnesses the power of artificial intelligence to transform your retirement goals into actionable insights, propelling you to new heights of legacy!
            </Typography>
            <div style={containerStyle}>
            <CustomButton
              backgroundColor="#387FF5"
              color="#fff"
              buttonText="Sign In"
              heroBtn={true}
            />
            <CustomButton
              backgroundColor="#fff"
              color="387FF5"
              buttonText="Sign In"
              border={true}
              heroBtn={true}
            />
            </div>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%", maxHeight: "60%", marginLeft: "6rem"}}
            />
          </Box>
        </CustomBox>
        <Companies />
      <Guide />
      <Properties />
      <Details />
      <GetStarted />
      <Footer />
      </Container>

    </Box>
    
  );
};

export default Hero;
