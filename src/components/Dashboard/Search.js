import React, {useState,useEffect} from 'react'
import { Box, Container, Image, Heading } from "theme-ui";


function Search() {

   

  return (
    <Box as="section" id="banner" sx={styles.banner}>
    <Container sx={styles.container}>
    <div>Search</div>
    </Container>
    </Box>
  )
}


const styles = {
    banner: {
      overflow: "hidden",
      backgroundColor: "#F9FBFD",
      textAlign: "center",
      pt: ["110px", null, null, null, "130px"],
      h2: {
        fontSize: ["28px", null, null, "32px", "38px", "48px", "64px"],
        lineHeight: 1.25,
        color: "#02073E",
        fontWeight: 700,
        width: "100%",
        maxWidth: ["100%", null, null, "55%", "500px", "640px", "851px"],
        mx: "auto",
        mt: "30px",
        mb: ["40px", null, null, "65px"],
      },
    },
    logo: {
      display: "block",
      width: "7%",
      borderRadius: "50%",
      mx: "auto",
      boxShadow: "0px 15px 35px rgba(65, 104, 139, 0.12)",
    },
    bannerImage: {
      display: "block",
      mx: "auto",
      position: "relative",
      maxWidth: ["100%", null, null, "80%", null, "100%"],
    },
    container: {
      position: "relative",
      ".bannerIcon": {
        position: "absolute",
        display: ["none", null, null, null, "block"],
      },
    },
    main:{
      padding: "25px",
      borderRadius: "5px",
      height: "auto",
      width: "80vw",
      border: "3px solid #d9d9d9",
      "@media screen and (max-width: 960px)": {
            border: "3px solid #d9d9d9",
          },
        },
  
     
    }
  
  

  

export default Search
