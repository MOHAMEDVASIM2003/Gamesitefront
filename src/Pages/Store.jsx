// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Typography,
//   Button,
//   Box,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import Header from "../Components/Header";
// import "@fontsource/metal-mania";

// import apex from "../Assests/apex.png";
// import cyberpunk from "../Assests/cyberpunk.png";
// import spider from "../Assests/spider.png";
// import odyssey from "../Assests/odyssey.png";
// import witcher from "../Assests/witcher.png";
// import arena1 from "../Assests/Arena1.png";
// import nfs from "../Assests/nfs.jpg";
// import modern from "../Assests/Modern.jpg";
// import resident from "../Assests/resident.jpg";
// import New1 from "../Assests/New2.png";

// // All games
// const games = [
//   {
//     id: 1,
//     title: "Apex",
//     price: 29.99,
//     description: "An epic space adventure with stunning visuals.",
//     image: apex,
//   },
//   {
//     id: 2,
//     title: "Cyberpunk",
//     price: 39.99,
//     description: "Fast-paced car racing game.",
//     image: cyberpunk,
//   },
//   {
//     id: 3,
//     title: "SpiderVerse",
//     price: 19.99,
//     description: "Adventures of Teenage SuperHero.",
//     image: spider,
//   },
//   {
//     id: 4,
//     title: "Odyssey",
//     price: 24.99,
//     description: "Survival of the fittest.",
//     image: odyssey,
//   },
//   {
//     id: 5,
//     title: "Witcher",
//     price: 34.99,
//     description: "A magical journey through enchanted lands.",
//     image: witcher,
//   },
//   {
//     id: 6,
//     title: "Need for speed 2",
//     price: 59.99,
//     description: "An adventure car racing game.",
//     image: nfs,
//   },
//   {
//     id: 7,
//     title: "God Of War",
//     price: 39.99,
//     description: "Battle between gods.",
//     image: arena1,
//   },
//   {
//     id: 8,
//     title: "Star Odyssey",
//     price: 29.99,
//     description: "An epic space adventure with stunning visuals.",
//     image: modern,
//   },
//   {
//     id: 9,
//     title: "Resident evil Village",
//     price: 39.99,
//     description: "Evil village survival.",
//     image: resident,
//   },
//   {
//     id: 10,
//     title: "Assassins Creed",
//     price: 59.99,
//     description: "An epic space adventure with stunning visuals.",
//     image: New1,
//   },
// ];

// const Store = ({ updateCartCount = () => {} }) => {
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartCount(cart.length);
//     updateCartCount(cart.length);
//   }, [updateCartCount]);

//   const addToCart = (game) => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     if (!cart.some((item) => item.id === game.id)) {
//       cart.push(game);
//       localStorage.setItem("cart", JSON.stringify(cart));
//       const newCount = cart.length;
//       setCartCount(newCount);
//       updateCartCount(newCount);
//     } else {
//       alert(`${game.title} is already in your cart!`);
//     }
//   };

//   const addToWishlist = (game) => {
//     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     if (!wishlist.some((item) => item.id === game.id)) {
//       wishlist.push(game);
//       localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     } else {
//       alert(`${game.title} is already in your wishlist!`);
//     }
//   };

//   return (
//     <div
//       style={{
//         background: "linear-gradient(to top, #330000, #000)",
//         width: "100%",
//       }}
//     >
//       <div
//         style={{
//           paddingBottom: "50px",
//           paddingTop: "50px",
//           marginLeft: "20px",
//           marginRight: "20px",
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Box sx={{ color: "white", fontFamily: "'Metal Mania', cursive" }}>
//             <Typography
//               align="center"
//               sx={{
//                 fontFamily: "'Metal Mania', cursive",
//                 fontWeight: 400,
//                 fontSize: "55px",
//               }}
//             >
//               Available Games
//             </Typography>
//           </Box>
//         </motion.div>

//         {/* Horizontal scrolling game cards */}
//         <Grid
//           container
//           spacing={4}
//           wrap="nowrap"
//           sx={{
//             overflowX: "auto",
//             paddingY: 6,
//             scrollbarWidth: "none",
//             "&::-webkit-scrollbar": {
//               display: "none",
//             },
//           }}
//         >
//           {games.map((game, index) => (
//             <Grid
//               item
//               key={game.id}
//               sx={{ minWidth: 300, flexShrink: 0, display: "flex" }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
//                 }}
//                 style={{ width: "100%" }}
//               >
//                 <Card
//                   sx={{
//                     height: 420,
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-between",
//                     width: "100%",
//                     background: "linear-gradient(to bottom , #330000, #000)",
//                     color: "white",
//                     cursor: "pointer",
//                     "&:hover": {
//                       filter: "brightness(1.1)",
//                       boxShadow: "2px 4px 4px 4px rgb(60, 0, 0)",
//                     },
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={game.image}
//                     alt={game.title}
//                     style={{
//                       objectFit: "cover",
//                       width: "100%",
//                       maxHeight: "200px",
//                     }}
//                   />
//                   <CardContent>
//                     <Typography variant="h6">{game.title}</Typography>
//                     <Typography variant="body2" color="gray">
//                       {game.description}
//                     </Typography>
//                     <Typography
//                       variant="h6"
//                       color="primary"
//                       style={{ marginTop: "1rem" }}
//                     >
//                       ${game.price.toFixed(2)}
//                     </Typography>
//                   </CardContent>
//                   <CardActions sx={{ justifyContent: "space-between" }}>
//                     <Button
//                       variant="contained"
//                       sx={{ backgroundColor: "red" }}
//                       onClick={() => addToCart(game)}
//                       component={motion.button}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       Add to Cart
//                     </Button>
//                     <Button
//                       variant="outlined"
//                       color="red"
//                       onClick={() => addToWishlist(game)}
//                       component={motion.button}
//                       whileHover={{ scale: 1.0 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       Wishlist
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </div>
//     </div>
//   );
// };

// export default Store;

import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import "@fontsource/metal-mania";

// Images
import apex from "../Assests/apex.png";
import cyberpunk from "../Assests/cyberpunk.png";
import spider from "../Assests/spider.png";
import odyssey from "../Assests/odyssey.png";
import witcher from "../Assests/witcher.png";
import arena1 from "../Assests/Arena1.png";
import nfs from "../Assests/nfs.jpg";
import modern from "../Assests/Modern.jpg";
import resident from "../Assests/resident.jpg";
import New1 from "../Assests/nr2.png";

// Blob animation
const blobBounce = keyframes`
  0% { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
  25% { transform: translate(-100%, -100%) translate3d(100%, 0, 0); }
  50% { transform: translate(-100%, -100%) translate3d(100%, 100%, 0); }
  75% { transform: translate(-100%, -100%) translate3d(0, 100%, 0); }
  100% { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
`;

const games = [
  { id: 1, title: "Apex", price: 29.99, description: "Epic space adventure", image: apex },
  { id: 2, title: "Cyberpunk", price: 39.99, description: "Futuristic racing game", image: cyberpunk },
  { id: 3, title: "SpiderVerse", price: 19.99, description: "Teenage superhero story", image: spider },
  { id: 4, title: "Odyssey", price: 24.99, description: "Survival journey", image: odyssey },
  { id: 5, title: "Witcher", price: 34.99, description: "Magical world quest", image: witcher },
  { id: 6, title: "Need for Speed 2", price: 59.99, description: "Extreme racing", image: nfs },
  { id: 7, title: "God Of War", price: 39.99, description: "Godly battles", image: arena1 },
  { id: 8, title: "Star Odyssey", price: 29.99, description: "Galactic mission", image: modern },
  { id: 9, title: "Resident Evil Village", price: 39.99, description: "Survive horror", image: resident },
  { id: 10, title: "Assassin's Creed", price: 59.99, description: "Historical action", image: New1 },
];

const Store = ({ updateCartCount = () => {} }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
    updateCartCount(cart.length);
  }, [updateCartCount]);

  const addToCart = (game) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.some((item) => item.id === game.id)) {
      cart.push(game);
      localStorage.setItem("cart", JSON.stringify(cart));
      const newCount = cart.length;
      setCartCount(newCount);
      updateCartCount(newCount);
    } else {
      alert(`${game.title} is already in your cart!`);
    }
  };

  return (
    <Box sx={{ background: "linear-gradient(to top, #330000, #000)", minHeight: "100vh", py: 6 }}>
      <Typography
        align="center"
        sx={{
          fontFamily: "'Metal Mania', cursive",
          fontSize: 55,
          color: "white",
          mb: 5,
        }}
      >
        Available Games
      </Typography>

      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 3,
            px: 2,
            pb: 4,
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" }, // hide scrollbar
          }}
        >
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 300,
                  height: 400,
                  borderRadius: "14px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  boxShadow: "4px 4px 4px 4px rgba(239, 13, 13, 0.5)",
                  "&:hover .blob": {
                    opacity: 1,
                    animation: `${blobBounce} 5s infinite ease`,
                  },
                }}
              >
                {/* Background glass layer */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 5,
                    left: 5,
                    width: 290,
                    height: 388,
                    backdropFilter: "blur(24px)",
                    borderRadius: "10px",
                    outline: "2px solid black",
                    zIndex: 2,
                  }}
                />

                {/* Animated blob (on hover only) */}
                <Box
                  className="blob"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    backgroundColor: "#ff0000",
                    opacity: 0,
                    filter: "blur(12px)",
                    zIndex: 1,
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                    transition: "opacity 0.5s ease",
                  }}
                />

                {/* Card Content */}
                <Box
                  sx={{
                    zIndex: 3,
                    textAlign: "center",
                    color: "white",
                    px: 1,
                    
                  }}
                >
                  <Box
                    component="img"
                    src={game.image}
                    alt={game.title}
                    sx={{
                      width: "280px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      mt: 1,
                      mb: 1,
                    }}
                  />
                  <Box sx={{mt:4}}>
                  <Typography variant="h5" sx={{fontSize:"25px",fontFamily: '"Nevan RUS", sans-serif',mb:1}}>{game.title}</Typography>
                  <Typography sx={{ fontSize: "15px",color:"grey",mb:1 }}>{game.description}</Typography>
                  <Typography variant="body2" color="white" mb={1} sx={{fontFamily: '"Nevan RUS", sans-serif',}}>
                    ${game.price.toFixed(2)}
                  </Typography>
                  {/* Custom Slice Button */}
                  <Box
                    onClick={() => addToCart(game)}
                    sx={{
                      "--c1": "#202020",
                      "--c2": "#00a1b7",
                      "--size-letter": "16px",
                      px: 2,
                      py: 1,
                      mt:1,
                      fontSize: "var(--size-letter)",
                      fontWeight: 700,
                      
                      border: "calc(var(--size-letter) / 6) solid rgb(135, 80, 80)",
                      borderRadius: "4px",
                      position: "relative",
                      overflow: "hidden",
                      cursor: "pointer",
                      display: "inline-block",
                      zIndex: 0,
                      transition: "300ms cubic-bezier(0.83, 0, 0.17, 1)",
                      "&:active": {
                        transform: "scale(0.98)",
                        filter: "brightness(0.9)",
                      },
                      "&::after": {
                        content: '""',
                        width: 0,
                        height: "300%",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%) rotate(30deg)",
                        backgroundColor: "red",
                        zIndex: -1,
                        transition: "500ms cubic-bezier(0.83, 0, 0.17, 1)",
                      },
                      "&:hover": {
                        "& .text": { color: "var(--c1)" },
                        "&::after": { width: "calc(120% + 1em)" },
                      },
                    }}
                  >
                    <Typography
                      className="text"
                      sx={{
                        color: "white",
                        transition: "color 700ms cubic-bezier(0.83, 0, 0.17, 1)",
                        fontSize: "16px",
                        fontWeight: 700,
                        fontFamily: '"Nevan RUS", sans-serif'
                      }}
                    >
                      Add to Cart
                    </Typography>
                  </Box>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Store;

