
import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

import gif1 from '../Assests/gif1.gif';
import gif2 from '../Assests/gif2.gif';
import "@fontsource/metal-mania"
const feedbacks = [
  {
    gif: gif2,
    text: '“Excellent product and top-class support throughout. Truly satisfied.”',
  },
  {
    gif: gif1,
    text: '“Really impressive work. Met all expectations with smooth communication.”',
  },
  {
    gif: gif2,
    text: '“Loved the responsiveness and attention to detail in the final delivery.”',
  },
  {
    gif: gif1,
    text: '“Great collaboration! Would definitely recommend to others.”',
  },
];

const Dot = styled(Box)(({ active }) => ({
  height: 10,
  width: 10,
  borderRadius: '50%',
  margin: '0 5px',
  backgroundColor: active ? '#fff' : '#aaa',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
}));

export default function Feedback() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: "linear-gradient(to top, #330000, #000)", color: "white", p: 3,
        color: '#fff',
        paddingTop:5,
        paddingBottom:0
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontFamily: 'Metal Mania',
          letterSpacing: 0,
          fontWeight:'400',
          fontSize:'40px',
          lineHeight:'10px',
          marginLeft:"-1050px",
          top:'50px'
        }}
      >
        FEEDBACK HIGHLIGHTS
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          ml:'80px'
          // width: '100%',
          // maxWidth: 1400,
        }}
      >
        {/* Left - GIF */}
        <Paper
          elevation={4}
          sx={{
            width: '400px',
            height: '450px',
            borderRadius: 2,
            overflow: 'hidden',
            backgroundColor: 'transparent',
           position:'relative',
             top:"20px",
             left:'-50px',
             marginLeft:'20px'
          }}
        >
          <img
            src={feedbacks[activeIndex].gif}
            alt="feedback visual"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Paper>

        {/* Right - Text and Dots */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Paper
            sx={{
              px: 1,
              py: 3,
              width: '870px',
              height:'200px',
              borderRadius: 2,
              backgroundColor: '#ffffff25',
              textAlign: 'center',
              fontSize: '1rem',
              lineHeight: 1.6,
              minHeight: 150,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position:'relative',
              right:"40px",
              top:'-15px',
              marginLeft:'45px',
              color:'white'
            }}
          >
            {feedbacks[activeIndex].text}
          </Paper>

          {/* Dots under the box */}
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center',position:'absolute',marginTop:'180px' }}>
            {feedbacks.map((_, i) => (
              <Dot key={i} active={i === activeIndex} onClick={() => setActiveIndex(i)} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

