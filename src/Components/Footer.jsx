import React from 'react';
import { Box, Grid, Typography, InputBase, Button } from '@mui/material';
import gif1 from '../Assests/gif1.gif'; // Replace with your correct path

function Footer() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '330px',
        overflow: 'hidden',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Background GIF */}
      <Box
        component="img"
        src={gif1}
        alt="Background"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          minHeight: '330px',
          bgcolor: 'rgba(0, 0, 0, 0.6)',
          px: { xs: 3, md: 6 },
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Grid container spacing={2}>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#bbb', letterSpacing: 1 }}
              >
                GAME VAULT
              </Typography>
              <Typography sx={{ mt: 2 }}>About Us</Typography>
              <Typography>Contact</Typography>
              <Typography>Terms &</Typography>
              <Typography>Privacy Policy</Typography>
              <Typography>FAQ</Typography>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              height="100%"
              
              
              sx={{ textAlign: 'left',marginLeft:'800px' }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontWeight: 300,
                  letterSpacing: 1,
                  color:'#7A7A7A',
                  position:'absolute',
                  right:'120px',
                  top:'90px'
                }}
              >
                Join Us On <span style={{ fontWeight: 500 }}>World</span>
              </Typography>

              {/* Input + Subscribe Bar */}
              <Box
                sx={{
                  display: 'flex',
                  borderRadius: 20,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.2)',
                  // maxWidth: 500,
                  width: '450px',
                  height:'35px',
                  position:'absolute',
                  top:'150px',
                  left:'1000px'
                }}
              >
                <InputBase
                  placeholder="Enter E-Mail"
                  sx={{
                    px: 2,
                    py: 1.3,
                    width:'800',
                    flex: 1,
                    color: '#fff',
                    '&::placeholder': {
                      color: '#ccc',
                    },
                  }}
                />
                {/* Divider */}
                <Box
                  sx={{
                    width: 0.005,
                    backgroundColor: 'rgba(255,255,255,0.3)',
                  }}
                />
                <Button
                  sx={{
                    px: 3,
                    color: '#fff',
                    backgroundColor: 'transparent',
                    borderRadius: 0,
                    textTransform: 'none',
                    width:'190px',
                    fontWeight: 400,
                     backgroundColor: 'rgba(255,255,255,0.5)',
                    // position:'absolute',
                    // right:'1px',
                    // '&:hover': {
                    //   backgroundColor: 'rgba(255,255,255,1)',
                    // },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2" sx={{ color: '#ccc' }}>
            © 2025 Game Vault Gaming Store
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
