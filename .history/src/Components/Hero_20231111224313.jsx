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
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import ListDivider from '@mui/joy/ListDivider';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';


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
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "40px",
    color: "#000336",
    fontWeight: "bold",
    textAlign: "right",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
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
              sx={{ fontSize: "18px", color: "#1C1F25", my: 4 }}
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
        
          <Title variant="h1" sx={{color: "#1C1F25"}}>
              Your Trusted Retirement Partner
            </Title>
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
              sx={{ fontSize: "18px", color: "#1C1F25", my: 4 }}
            >
              At TIAA,We take pride as your trusted retirement planners, committed to fostering enduring relationships. Our dedication extends to delivering personalized solutions with round-the-clock customer service, ensuring your long-term financial well-being!
            </Typography>
            <List>
  <ListItem>
   <ListItemButton>
     <ListItemDecorator><Home /></ListItemDecorator>
     <ListItemContent>Home</ListItemContent>
     {/* <KeyboardArrowRight /> */}
   </ListItemButton>
   <ListItemButton>
     <ListItemDecorator><Home /></ListItemDecorator>
     <ListItemContent>Home</ListItemContent>
     {/* <KeyboardArrowRight /> */}
   </ListItemButton>
   <ListItemButton>
     <ListItemDecorator><Home /></ListItemDecorator>
     <ListItemContent>Home</ListItemContent>
     {/* <KeyboardArrowRight /> */}
   </ListItemButton>
   <ListItemButton>
     <ListItemDecorator><Home /></ListItemDecorator>
     <ListItemContent>Home</ListItemContent>
     {/* <KeyboardArrowRight /> */}
   </ListItemButton>
  </ListItem>
</List>
        
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
