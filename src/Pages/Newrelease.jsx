import { Box, Typography } from "@mui/material";
import React from "react";
import New1 from "../Assests/New1.png";
import nr2 from "../Assests/nr2.png";
import nr3 from "../Assests/nr3.png";
import nr4 from "../Assests/nr4.png";
import "@fontsource/metal-mania";

function Newrelease() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to top, #330000, #000)",
        color: "white",
        p: 3,
        pb:5
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Metal Mania', cursive",
          fontWeight: 400,
          fontSize: "48px",
          mb: 4,
          ml: 3,
        }}
      >
        New Release
      </Typography>

      <Box mt={2} ml={5} sx={{ position: "relative" }}>
        {/* Image 1 */}
        <Box
          sx={{
            width: "644px",
            height: "1291px",
            overflow: "hidden",
            transition: "transform 0.3s ease, filter 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
              filter: "brightness(1.1)",
              boxShadow:"2px 5px 10px rgb(255, 0, 0)",
              borderRadius:5,
            },
          }}
        >
          <img
            src={New1}
            alt="New1"
            
          />
        </Box>

        {/* Image 2 */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "670px",
            width: "685px",
            height: "558px",
            overflow: "hidden",
            transition: "transform 0.3s ease, filter 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
              filter: "brightness(1.1)",
              boxShadow:"5px 5px 10px rgb(255, 0, 0)",
              borderRadius:5,
            },
          }}
        >
          <img
            src={nr2}
            alt="nr2"
            
          />
        </Box>

        {/* Text */}
        <Typography
          sx={{
            position: "absolute",
            top: "590px",
            left: "670px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "56px",
            lineHeight: "70px",
            letterSpacing: "0%",
            textTransform: "uppercase",
          }}
        >
          WE ARE HERE TO YOU
        </Typography>

        {/* Image 3 */}
        <Box
          sx={{
            position: "absolute",
            top: "680px",
            left: "670px",
            width: "678px",
            height: "277px",
            overflow: "hidden",
            transition: "transform 0.3s ease, filter 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
              filter: "brightness(1.1)",
              boxShadow:"5px 5px 10px rgb(255, 0, 0)",
              borderRadius:5,
            },
          }}
        >
          <img
            src={nr3}
            alt="nr3"
            
          />
        </Box>

        {/* Image 4 */}
        <Box
          sx={{
            position: "absolute",
            top: "1010px",
            left: "670px",
            width: "678px",
            height: "277px",
            overflow: "hidden",
            transition: "transform 0.3s ease, filter 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
              filter: "brightness(1.1)",
              boxShadow:"5px 5px 10px rgb(255, 0, 0)",
              borderRadius:5,
            },
          }}
        >
          <img
            src={nr4}
            alt="nr4"
            
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Newrelease;
