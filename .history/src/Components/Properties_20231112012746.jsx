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
  const StyledTypography = styled(Typography)({
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3, // Limit to 3 lines
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
  });
  
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
                fontSize: "22px",
                color: "#1C1F25",
                fontWeight: "bold",
              
              }}
            >
            Investment Advice
            </Typography>
          <StyledTypography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 ,  }}>
          Navigate the financial landscape confidently with our tailored investment advice, ensuring your portfolio aligns with your goals. We prioritize your success, offering strategic insights for a secure and thriving financial future.   </StyledTypography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Typography
              variant="body2"
              sx={{
                fontSize: "22px",
                color: "#1C1F25",
                fontWeight: "bold",
              
              }}
            >
            Estate Planning
            </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 ,  }}>
          Secure your family's future with meticulous estate planning, supported by a wealth of educational resources. From wills to trusts, empower yourself with the knowledge needed to make informed decisions for a lasting legacy.
  </Typography>            
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Typography
              variant="body2"
              sx={{
                fontSize: "22px",
                color: "#1C1F25",
                fontWeight: "bold",
              
              }}
            >
Long Term Care Insurance 
            </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 ,  }}>
          Guard against unforeseen challenges with our comprehensive long-term care insurance solutions. Prioritize your well-being and financial stability, allowing you to age gracefully without compromising your financial security.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Typography
              variant="body2"
              sx={{
                fontSize: "22px",
                color: "#1C1F25",
                fontWeight: "bold",
              
              }}
            >
            Legacy Planning
            </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 ,  }}>
          Shape a meaningful legacy with our personalized planning services. From charitable giving to wealth transfer, we assist you in creating a lasting impact, ensuring your values endure for generations to come.
                   </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
    <Item>
    <Typography
              variant="body2"
              sx={{
                fontSize: "22px",
                color: "#1C1F25",
                fontWeight: "bold",
              
              }}
            >
           Stay Updated, Always
            </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 ,  }}>
          Stay at the forefront of financial trends with our commitment to keeping you informed. Regular updates and insights ensure you're well-equipped to make timely and informed decisions, fostering financial resilience in ever-evolving markets.
                 </Typography>

    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
          
    <Typography
              variant="body2"
              sx={{
                fontSize: "22px",
                color: "#1C1F25",
                fontWeight: "bold",
              
              }}
            >
        Your Data's Safe Haven
            </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 ,  }}>
          Rest easy knowing your data is protected with top-tier security protocols. From encryption to access controls, we prioritize your data's safety.  
              
                 </Typography>
    
    </Item>
  </Grid>
      </Grid>
    </Box>
     
      </Container>
    </Box>
  );
};

export default Properties;
