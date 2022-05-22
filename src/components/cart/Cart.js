import React from "react";
// import * as React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import phonePic from "../assets/imgs/phonePic.jpeg";

const Cart = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Smart Phone"
        height="140"
        image={phonePic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          HEADPHONE
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Explore our extensive range of over-ear headphones including Bluetooth
          & wireless headphones designed to help you enjoy your favourite music
          on the go.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">$100</Button>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
};
export default Cart;
