import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import House from "./House";
import { properties } from "../properties";
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
const Properties = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "40px",
    color: "#000336",
    fontWeight: "bold",
    textAlign: "center",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ mt: 5, background: "linear-gradient(#387FF5, #fff)", py: 10 }}>
      <Container>
        <PropertiesTextBox>
        <Title variant="h1" sx={{color: "#1C1F25"}}>
        Your Retirement Planning Services
            </Title>
          {/* <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold", textAlign: "center", }}
          >
            Featured Properties
          </Typography> */}
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1, textAlign: "center", }}>
          Leverage proactive retirement intelligence to optimize your financial strategy. From projecting retirement income to assessing investment performance, we provides insights to empower sound decisions, ensuring a secure and informed retirement journey.
          </Typography>
        </PropertiesTextBox>
        <Box sx={{ width: '100%', mt:10 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
          <Typography
              variant="body2"
              sx={{
                fontSize: "30px",
                color: "#1C1F25",
                fontWeight: "bold",
                mb: 4,
              }}
            >
              <span >Empower Your Retirement with</span> 
            </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 ,  }}>
          Leverage proactive retirement intelligence to optimize your financial strategy. From projecting retirement income to assessing investment performance, we provides insights to empower sound decisions, ensuring a secure and informed retirement journey.
          </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
     
      </Container>
    </Box>
  );
};

export default Properties;
