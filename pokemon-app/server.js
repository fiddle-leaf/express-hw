//require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon");

// INDUCES
//index
app.get("/", (req, res) => {
  res.send("Welcome to Pokemon app!");
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

// show

// listening to port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
