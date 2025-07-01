import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Deal1 from "../Assests/Deal1.png";
import Deal2 from "../Assests/Deal2.png";
import Deal3 from "../Assests/Deal3.png";
import Deal4 from "../Assests/Deal4.png";
import "@fontsource/metal-mania";

const Topdeals = () => {
  const defaultMain = {
    src: Deal1,
    title: "Latest Version\nNeed For Speed",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    color: "black",
  };

  const [mainImage, setMainImage] = useState(defaultMain);

  const [subImages, setSubImages] = useState([
    {
      src: Deal2,
      id: 0,
      title: "Pokemon Go Plus",
      desc: "Play and enjoy with Pokemon GO Plus",
      color: "black",
    },
    {
      src: Deal3,
      id: 1,
      title: "Marvel Guardians of the Galaxy",
      desc: "Lets get into the Marvel Galaxy",
    },
    {
      src: Deal4,
      id: 2,
      title: "Resident Evil Village",
      desc: "Lets go the Evil Village",
    },
  ]);

  const handleImageClick = (index) => {
    const clicked = subImages[index];
    const updatedSubImages = [...subImages];
    updatedSubImages[index] = {
      src: mainImage.src,
      id: index,
      title: mainImage.title,
      desc: mainImage.desc,
    };
    setMainImage({
      src: clicked.src,
      title: clicked.title,
      desc: clicked.desc,
    });
    setSubImages(updatedSubImages);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #330000, #000)",
        color: "white",
        pb: 5,
        pt: 2,
        px: 4,
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Metal Mania', cursive",
          fontWeight: 400,
          fontSize: "48px",
          mb: 4,
        }}
      >
        Top Deals
      </Typography>

      <Box sx={{ display: "flex", gap: 3, marginLeft: "30px" }}>
        {/* Left: Main Image */}
        <Box
          sx={{
            width: "653px",
            height: "659px",
            position: "relative",
            borderRadius: 5,
            overflow: "hidden",
            
            transition: "transform 0.3s ease, filter 0.3s ease",
            "&:hover": {
                transform: "scale(1.02)",
                filter: "brightness(1.0)",
                boxShadow: "2px 4px 10px rgb(255, 0, 0)",
                borderRadius: 5,
              },
          }}
        >
          <img
            src={mainImage.src}
            alt="Main"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 30,
              left: 20,
              pr: 2,
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "40px",
                whiteSpace: "pre-line", // To respect \n in title
                textTransform: "uppercase",
              }}
            >
              {mainImage.title}
            </Typography>
            {mainImage.desc && (
              <Typography sx={{ fontSize: "22px", mt: 1 }}>
                {mainImage.desc}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Right: Sub Images */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "695px",
          }}
        >
          {/* Top 2 Images Side by Side */}
          <Box sx={{ display: "flex", gap: 4 }}>
            {[0, 1].map((idx) => (
              <Box
                key={idx}
                onClick={() => handleImageClick(idx)}
                sx={{
                  width: "500px",
                  height: "235px",
                  borderRadius: 5,
                  overflow: "hidden",
                  cursor: "pointer",
                  
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  "&:hover": {
                transform: "scale(1.02)",
                filter: "brightness(1.0)",
                boxShadow: "2px 4px 10px rgb(255, 0, 0)",
                borderRadius: 5,
              },
                }}
              >
                <img
                  src={subImages[idx]?.src}
                  alt={`Sub ${idx}`}
                  style={{
                    width: "374px",
                    height: "235px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Bottom Wide Image */}
          <Box
            onClick={() => handleImageClick(2)}
            sx={{
              width: "694px",
              height: "396px",
              borderRadius: 5,
              overflow: "hidden",
              cursor: "pointer",
              marginTop: 1,
              
              transition: "transform 0.3s ease, filter 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
                filter: "brightness(1.0)",
                boxShadow: "2px 4px 10px rgb(255, 0, 0)",
                borderRadius: 5,
              },
            }}
          >
            <img
              src={subImages[2]?.src}
              alt="Sub 2"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Topdeals;
