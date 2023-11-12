import { Box, Container, styled,Card, CardContent, Typography } from "@mui/material";
import React from "react";
import House from "./House";
import { properties } from "../properties";


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
  const PropertyCard = styled(Card)(({ theme }) => ({
    width: "48%", // Adjust the width as needed
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      width: "100%", // Full width on smaller screens
    },
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
        <PropertyCard >
              {/* Adjust the CardContent as needed */}
              <CardContent>
               
                <Typography variant="h2" sx={{ color: "#1C1F25" }}>
                  world 1 
                </Typography>
                <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
                  world will ....
                </Typography>
              </CardContent>
            </PropertyCard>
        <PropertyCard >
              {/* Adjust the CardContent as needed */}
              <CardContent>
               
                <Typography variant="h2" sx={{ color: "#1C1F25" }}>
                  world 1 
                </Typography>
                <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
                  world will ....
                </Typography>
              </CardContent>
            </PropertyCard>
        {/* <PropertiesBox>
          
          {properties.map((property) => (
            <House
              key={property.id}
              img={property.img}
              price={property.price}
              address={property.address}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              space={property.space}
            />
          ))} */}
        {/* </PropertiesBox> */}

      </Container>
    </Box>
  );
};

export default Properties;
