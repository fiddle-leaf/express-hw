//require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

// INDUCES
//index
app.get("/", (req, res) => {
  res.send("Welcome to Pokemon app!");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
