// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
// } from "@mui/material";
// import { motion } from "framer-motion";
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

// const games = [
//   {
//       id: 1,
//       title: "Apex",
//       category: "Action",
//       price: 29.99,
//       description: "An epic space adventure with stunning visuals.",
//       image: apex,
//     },
//     {
//       id: 2,
//       title: "Cyberpunk",
//       category: "Racing",
//       price: 39.99,
//       description: "Fast-paced car racing game.",
//       image: cyberpunk,
//     },
//     {
//       id: 3,
//       title: "SpiderVerse",
//       category: "Adventure",
//       price: 19.99,
//       description: "Adventures of Teenage SuperHero.",
//       image: spider,
//     },
//     {
//       id: 4,
//       title: "Odyssey",
//       category: "Adventure",
//       price: 24.99,
//       description: "Survival of the fittest.",
//       image: odyssey,
//     },
//     {
//       id: 5,
//       title: "Witcher",
//       category: "Fantasy",
//       price: 34.99,
//       description: "A magical journey through enchanted lands.",
//       image: witcher,
//     },
//     {
//       id: 6,
//       title: "Need for speed 2",
//       category: "Racing",
//       price: 59.99,
//       description: "An adventure car racing game.",
//       image: nfs,
//     },
//     {
//       id: 7,
//       title: "God Of War",
//       category: "Adventure",
//       category: "Action",
//       price: 39.99,
//       description: "Battle between gods.",
//       image: arena1,
//     },
//     {
//       id: 8,
//       title: "Star Odyssey",
//       category: "Sci-Fi",
//       price: 29.99,
//       description: "An epic space adventure with stunning visuals.",
//       image: modern,
//     },
//     {
//       id: 9,
//       title: "Resident evil Village",
//       category: "Horror",
//       price: 39.99,
//       description: "Evil village survival.",
//       image: resident,
//     },
//     {
//       id: 10,
//       title: "Assassins Creed",
//        category: "Action",
//       price: 59.99,
//       description: "An epic space adventure with stunning visuals.",
//       image: New1,
//     },
// ];

// const categories = [
//   "All",
//   "Action",
//   "Adventure",
//   "Racing",
//   "Fantasy",
//   "Horror",
//   "Sci-Fi",
// ];

// const Categories = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredGames =
//     selectedCategory === "All"
//       ? games
//       : games.filter((game) => game.category === selectedCategory);

//   // ✅ Add to Cart Function (localStorage-based)
//   const addToCart = (game) => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const isAlreadyInCart = cart.some((item) => item.id === game.id);

//     if (isAlreadyInCart) {
//       alert(`${game.title} is already in your cart!`);
//     } else {
//       cart.push(game);
//       localStorage.setItem("cart", JSON.stringify(cart));
//     }
//   };

//   return (
//     <Box
//       sx={{
//         background: "linear-gradient(to top, #330000, #000)",
//         minHeight: "100vh",
//         color: "white",
//         padding: 4,
//       }}
//     >
//       <Typography
//         align="center"
//         sx={{ fontFamily: "'Metal Mania', cursive", fontSize: "50px", mb: 4 }}
//       >
//         Game Categories
//       </Typography>

//       {/* Category Buttons */}
//       <Box
//         display="flex"
//         justifyContent="center"
//         flexWrap="wrap"
//         gap={2}
//         mb={4}
//       >
//         {categories.map((cat) => (
//           <Button
//             key={cat}
//             variant={selectedCategory === cat ? "contained" : "outlined"}
//             onClick={() => setSelectedCategory(cat)}
//             sx={{
//               color: "white",
//               borderColor: "red",
//               "&.MuiButton-contained": {
//                 backgroundColor: "red",
//               },
//             }}
//           >
//             {cat}
//           </Button>
//         ))}
//       </Box>

//       {/* Scrollable Horizontal Cards */}
//       <Box
//         sx={{
//           display: "flex",
//           overflowX: "auto",
//           gap: 3,
//           paddingY: 3,
//           paddingX: 1,
//           scrollbarWidth: "none",
//           "&::-webkit-scrollbar": {
//             display: "none",
//           },
//         }}
//       >
//         {filteredGames.map((game) => (
//           <motion.div
//             key={game.id}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4 }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <Card
//               sx={{
//                 minWidth: 300,
//                 maxWidth: 300,
//                 height: 400,
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 background: "linear-gradient(to bottom, #330000, #000)",
//                 color: "white",
//                 "&:hover": {
//                   boxShadow: "2px 4px 10px rgb(98, 1, 1)",
//                 },
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="180"
//                 image={game.image}
//                 alt={game.title}
//                 sx={{ objectFit: "cover" }}
//               />
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography variant="h6">{game.title}</Typography>
//                 <Typography variant="body2" color="gray">
//                   ${game.price.toFixed(2)}
//                 </Typography>
//               </CardContent>
//               <CardActions sx={{ justifyContent: "center", paddingBottom: 2 }}>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "red",
//                     color: "white",
//                     "&:hover": {
//                       transform: "scale(1.05)",
//                     },
//                   }}
//                   onClick={() => addToCart(game)}
//                 >
//                   Add to Cart
//                 </Button>
//               </CardActions>
//             </Card>
//           </motion.div>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Categories;
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import "@fontsource/metal-mania";

// Assets
import apex from "../Assests/apex.png";
import cyberpunk from "../Assests/cyberpunk.png";
import spider from "../Assests/spider.png";
import odyssey from "../Assests/odyssey.png";
import witcher from "../Assests/witcher.png";
import arena1 from "../Assests/Arena1.png";
import nfs from "../Assests/nfs.jpg";
import modern from "../Assests/Modern.jpg";
import resident from "../Assests/resident.jpg";
import New1 from "../Assests/New2.png";

// Dummy Data
const games = [
  {
    id: 1,
    title: "Apex",
    category: "Action",
    price: 29.99,
    description: "An epic space adventure with stunning visuals.",
    image: apex,
  },
  {
    id: 2,
    title: "Cyberpunk",
    category: "Racing",
    price: 39.99,
    description: "Fast-paced car racing game.",
    image: cyberpunk,
  },
  {
    id: 3,
    title: "SpiderVerse",
    category: "Adventure",
    price: 19.99,
    description: "Adventures of Teenage SuperHero.",
    image: spider,
  },
  {
    id: 4,
    title: "Odyssey",
    category: "Adventure",
    price: 24.99,
    description: "Survival of the fittest.",
    image: odyssey,
  },
  {
    id: 5,
    title: "Witcher",
    category: "Fantasy",
    price: 34.99,
    description: "A magical journey through enchanted lands.",
    image: witcher,
  },
  {
    id: 6,
    title: "Need for speed 2",
    category: "Racing",
    price: 59.99,
    description: "An adventure car racing game.",
    image: nfs,
  },
  {
    id: 7,
    title: "God Of War",
    category: "Action",
    price: 39.99,
    description: "Battle between gods.",
    image: arena1,
  },
  {
    id: 8,
    title: "Star Odyssey",
    category: "Sci-Fi",
    price: 29.99,
    description: "An epic space adventure with stunning visuals.",
    image: modern,
  },
  {
    id: 9,
    title: "Resident evil Village",
    category: "Horror",
    price: 39.99,
    description: "Evil village survival.",
    image: resident,
  },
  {
    id: 10,
    title: "Assassins Creed",
    category: "Action",
    price: 59.99,
    description: "An epic space adventure with stunning visuals.",
    image: New1,
  },
];

const categories = [
  "All",
  "Action",
  "Adventure",
  "Racing",
  "Fantasy",
  "Horror",
  "Sci-Fi",
];

// 🎨 Gradient Button Component
const GradientButton = ({ children, onClick, selected }) => {
  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        alignItems: "center",
        backgroundImage: "linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb)",
        border: 0,
        borderRadius: "8px",
        boxShadow: "rgba(151, 65, 252, 0.2) 0 15px 30px -5px",
        color: "#ffffff",
        display: "flex",
        fontSize: "18px",
        justifyContent: "center",
        minWidth: "120px",
        padding: "3px",
        cursor: "pointer",
        transition: "all 0.3s",
        transform: selected ? "scale(1.05)" : "scale(1)",
        "&:active": {
          transform: "scale(0.9)",
        },
      }}
    >
      <Box
        component="span"
        sx={{
          backgroundColor: selected ? "transparent" : "rgb(5, 6, 45)",
          padding: "12px 20px",
          borderRadius: "6px",
          width: "100%",
          height: "100%",
          transition: "300ms",
          textAlign: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGames =
    selectedCategory === "All"
      ? games
      : games.filter((game) => game.category === selectedCategory);

  const addToCart = (game) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = cart.some((item) => item.id === game.id);

    if (isAlreadyInCart) {
      alert(`${game.title} is already in your cart!`);
    } else {
      cart.push(game);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to top, #330000, #000)",
        minHeight: "100vh",
        color: "white",
        padding: 4,
      }}
    >
      <Typography
        align="center"
        sx={{ fontFamily: "'Metal Mania', cursive", fontSize: "50px", mb: 4 }}
      >
        Game Categories
      </Typography>

      {/* 🔘 Category Filter Buttons */}
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={2}
        mb={4}
      >
        {categories.map((cat) => (
          <GradientButton
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            selected={selectedCategory === cat}
          >
            {cat}
          </GradientButton>
        ))}
      </Box>

      {/* 🎮 Game Cards */}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 3,
          paddingY: 3,
          paddingX: 1,
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {filteredGames.map((game) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card
              sx={{
                minWidth: 300,
                maxWidth: 300,
                height: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "linear-gradient(to bottom, #330000, #000)",
                color: "white",
                "&:hover": {
                  boxShadow: "2px 4px 10px rgb(98, 1, 1)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={game.image}
                alt={game.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{game.title}</Typography>
                <Typography variant="body2" color="gray">
                  ${game.price.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", paddingBottom: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                  onClick={() => addToCart(game)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
