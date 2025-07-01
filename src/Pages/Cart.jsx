import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "@fontsource/metal-mania";

const Cart = ({ updateCartCount }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate(); // ✅ useNavigate for routing

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCart(cartItems);
    setWishlist(wishlistItems);
    updateCartCount(cartItems.length);
  }, [updateCartCount]);

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    updateCartCount(newCart.length);
  };

  const removeFromWishlist = (index) => {
    const newWishlist = [...wishlist];
    newWishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    setWishlist(newWishlist);
  };

  const moveToCart = (game) => {
    const newCart = [...cart, game];
    const newWishlist = wishlist.filter((item) => item.id !== game.id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    setCart(newCart);
    setWishlist(newWishlist);
    updateCartCount(newCart.length);
    alert(`${game.title} moved to cart!`);
  };

  const purchase = () => {
    if (cart.length > 0) {
      navigate("/transaction"); // ✅ Navigate to transaction page
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      style={{
        background: "linear-gradient(to top, #330000, #000)",
        color: "white",
        width: "100%",
        height: "100%",
        paddingBottom: "47.5px",
      }}
    >
      <Container
        disableGutters
        maxWidth="False"
        style={{
          marginTop: 0,
          paddingTop: 100,
          paddingBottom: 60,
          paddingLeft: 50,
        }}
      >
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography
            sx={{
              fontFamily: "'Metal Mania', cursive",
              fontWeight: 400,
              fontSize: "55px",
              marginLeft: "50px",
            }}
          >
            My Cart
          </Typography>
        </motion.div>

        {cart.length === 0 ? (
          <Typography
            sx={{
              marginLeft: "50px",
              fontFamily: '"Nevan RUS", sans-serif',
              fontWeight: 400,
              fontSize: 35,
              marginTop: "30px",
              marginBottom: "30px",
              color: "gray",
            }}
          >
            Your cart is empty.
          </Typography>
        ) : (
          <Grid container spacing={3} pb={10} borderRadius={5}>
            {cart.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} ml={5}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      borderRadius: 0,
                      border: "0 solid black",
                      transition: "transform 0.3s ease, filter 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.04)",
                        filter: "brightness(1.1)",
                        boxShadow: "2px 4px 10px rgb(98, 1, 1)",
                        borderRadius: 0,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={item.image}
                      alt={item.title}
                      sx={{ borderRadius: 0 }}
                    />
                    <Card
                      sx={{
                        background: "linear-gradient(to bottom, #330000, #000)",
                        borderRadius: 0,
                        color: "white",
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="body2">${item.price.toFixed(2)}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button color="secondary" onClick={() => removeFromCart(index)}>
                          Remove
                        </Button>
                      </CardActions>
                    </Card>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Typography
            sx={{
              fontFamily: "'Metal Mania', cursive",
              fontWeight: 400,
              fontSize: "55px",
              marginLeft: "50px",
            }}
          >
            Wishlist
          </Typography>
        </motion.div>

        {wishlist.length === 0 ? (
          <Typography
            sx={{
              marginLeft: "50px",
              fontFamily: '"Nevan RUS", sans-serif',
              fontWeight: 400,
              fontSize: 35,
              marginTop: "30px",
              marginBottom: "30px",
              color: "gray",
            }}
          >
            Your wishlist is empty.
          </Typography>
        ) : (
          <Grid container spacing={3} ml={5}>
            {wishlist.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      background: "linear-gradient(to top, #330000, #000)",
                      color: "white",
                      transition: "transform 0.3s ease, filter 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        filter: "brightness(1.1)",
                        boxShadow: "2px 4px 10px rgb(98, 1, 1)",
                        borderRadius: 0,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="body2">${item.price.toFixed(2)}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => moveToCart(item)}>Move to Cart</Button>
                      <Button color="secondary" onClick={() => removeFromWishlist(index)}>
                        Remove
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        {cart.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography
              variant="h6"
              style={{
                marginTop: "2rem",
                marginLeft: "50px",
                fontFamily: '"Nevan RUS", sans-serif',
                fontSize: "30px",
              }}
            >
              Total: ${total.toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={purchase}
              style={{
                marginTop: "20px",
                marginLeft: "50px",
                backgroundColor: "red",
                fontSize: "20px",
              }}
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy Now
            </Button>
          </motion.div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
