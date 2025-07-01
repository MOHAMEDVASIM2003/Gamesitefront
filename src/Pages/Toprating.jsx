import React, { useRef, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

// Game images
import img1 from '../Assests/img1.jpg';
import img2 from '../Assests/img2.jpg';
import img3 from '../Assests/img3.jpg';
import img4 from '../Assests/img4.jpeg';
import img5 from '../Assests/img5.jpeg';

const images = [img1, img2, img3, img4, img5];

const imageStyles = [
  { width: 340, height: 350 },
  { width: 350, height: 350 },
  { width: 350, height: 350 },
  { width: 350, height: 350 },
  { width: 350, height: 350 },
];

const Toprating = () => {
  const scrollRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  // Auto-scroll left to right with ping-pong effect
  useEffect(() => {
    const ref = scrollRef.current;
    if (!ref) return;

    let direction = 5; // 1 = right, -1 = left

    const interval = setInterval(() => {
      if (!ref) return;

      ref.scrollLeft += direction * 1.5;

      // Switch direction at ends
      if (ref.scrollLeft <= 0) {
        direction = 1;
      } else if (ref.scrollLeft >= ref.scrollWidth - ref.clientWidth) {
        direction = -1;
      }
    }, 20); // adjust speed here

    return () => clearInterval(interval);
  }, []);

  const scrollToIndex = (index) => {
    const { current } = scrollRef;
    if (!current) return;
    const imageBoxes = current.querySelectorAll("img");
    const target = imageBoxes[index];
    if (target) {
      const left = target.offsetLeft - current.offsetLeft;
      current.scrollTo({ left, behavior: "smooth" });
      setScrollIndex(index);
    }
  };

  const scroll = (direction) => {
    const maxIndex = images.length - 1;
    let nextIndex = direction === "left" ? scrollIndex - 1 : scrollIndex + 1;
    nextIndex = Math.max(0, Math.min(nextIndex, maxIndex));
    scrollToIndex(nextIndex);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(to bottom, #330000, #000)",
        paddingY: 0,
        color: "white",
        overflow: "hidden"
      }}
    >
      <Typography
        sx={{
          fontFamily: "Metal Mania",
          fontWeight: 400,
          fontSize: "35px",
          marginLeft: "30px"
        }}
      >
        TOP RATING
      </Typography>

      {/* Scrollable image container */}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: 2,
          px: 2,
          paddingTop: "20px",
          height: "370px",
          '&::-webkit-scrollbar': { display: 'none' }
        }}
        ref={scrollRef}
      >
        {images.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`game-${index}`}
            sx={{
              width: imageStyles[index].width,
              minWidth: imageStyles[index].width,
              height: imageStyles[index].height,
              borderRadius: 2,
              objectFit: "cover",
              flexShrink: 0,
              transition: "transform 0.3s ease, filter 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                filter: "brightness(1.1)",
              },
            }}
          />
        ))}
      </Box>

      {/* Navigation buttons and dots */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5, alignItems: "center", gap: 2 }}>
        <Box
          onClick={() => scroll("left")}
          sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "2px solid white",
            transition: "transform 0.3s ease, background-color 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              backgroundColor: "#333"
            }
          }}
        >
          <ArrowBackOutlinedIcon sx={{ color: "white", fontSize: 28 }} />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {images.map((_, idx) => (
            <Box
              key={idx}
              onMouseEnter={() => scrollToIndex(idx)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: idx === scrollIndex ? "white" : "gray",
                transition: "background-color 0.3s",
                cursor: "pointer"
              }}
            />
          ))}
        </Box>

        <Box
          onClick={() => scroll("right")}
          sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "2px solid white",
            transition: "transform 0.3s ease, background-color 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              backgroundColor: "#333"
            }
          }}
        >
          <ArrowForwardOutlinedIcon sx={{ color: "white", fontSize: 28 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Toprating;
