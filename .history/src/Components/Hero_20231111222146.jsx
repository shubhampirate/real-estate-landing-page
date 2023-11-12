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
import heroImg_2 from "../media/img_2.jpeg";
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


  const containerStyle = {
    display: 'flex',
    gap: '10px', // Adjust the gap between buttons as needed
  };
  const secondButtonStyle = {
    border: '1px solid #000', // Black border for the second button
    textTransform: 'none', // Disable the uppercase text transform
  };

  return (
    <Box sx={{ backgroundColor: "#ffffff"}}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1"}}>
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
            <Button
        variant="contained"
        style={{
          backgroundColor: '#fff',
          color: '#000',
          ...secondButtonStyle,
        }}
      >
        Watch Video
      </Button>
            </div>
          </Box>

          <Box sx={{ flex: "0.75" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%", maxHeight: "80%", marginLeft: "4rem"}}
            />
          </Box>
        </CustomBox>
        {/* <Companies /> */}
        
        <CustomBox>
        <Box sx={{ flex: "0.75" }}>
            <img
              src={heroImg_2}
              alt="heroImg_2"
              style={{ maxWidth: "100%", maxHeight: "80%", marginLeft: "4rem"}}
            />
          </Box>
          <Box sx={{ flex: "1"}}>
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
            <Button
        variant="contained"
        style={{
          backgroundColor: '#fff',
          color: '#000',
          ...secondButtonStyle,
        }}
      >
        Watch Video
      </Button>
            </div>
          </Box>

          
        </CustomBox>
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
