import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Axios import

const Transaction = () => {
  const [purchasedGames, setPurchasedGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setPurchasedGames(cart);
  }, []);

  const handleConfirm = async () => {
    try {
      // ✅ Send all purchased games to backend
      await Promise.all(
        purchasedGames.map((game) =>
          axios.post("http://localhost:3001/api/cart", {
            title: game.title,
            price: game.price,
          })
        )
      );

      localStorage.removeItem("cart");
      alert("Payment successful! Thank you for your purchase.");
      navigate("/"); // redirect to home/store
    } catch (error) {
      console.error("Error saving to DB:", error);
      alert("Something went wrong while saving your purchase. Please try again.");
    }
  };

  const totalAmount = purchasedGames.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <div
      style={{
        background: "linear-gradient(to top, #330000, #000)",
        color: "white",
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "50px",
      }}
    >
      <Container>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          <Typography
            variant="h3"
            style={{ fontFamily: "'Metal Mania', cursive", marginBottom: "10px" }}
          >
            Confirm Your Purchase
          </Typography>
          <Typography variant="h6" color="gray">
            You’ve selected {purchasedGames.length} awesome game(s)!
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {purchasedGames.map((game, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    background: "linear-gradient(to bottom, #1a0000, #000)",
                    color: "white",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 10px rgba(255, 0, 0, 0.5)",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={game.image}
                    alt={game.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{game.title}</Typography>
                    <Typography variant="body2" color="gray">
                      Price: ${Number(game.price).toFixed(2)}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            textAlign: "center",
            marginTop: "40px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "'Metal Mania', cursive", color: "#FFD700" }}
          >
            Total Amount: ${totalAmount.toFixed(2)}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ textAlign: "center", marginTop: "30px" }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "red",
              fontSize: "18px",
              paddingX: "30px",
              paddingY: "10px",
              "&:hover": { backgroundColor: "#ff3333" },
            }}
            onClick={handleConfirm}
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pay Now
          </Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default Transaction;
