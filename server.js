/**
 * First Express Lab: W12D2
 *  *
 */

// Require modules
const express = require("express");

// Create the Express app
const app = express();

// Mount routes
app.get("/greeting", (req, res) => {
  res.send(`Hello there!`);
});

app.get("/greeting/:name", (req, res) => {
  res.send(`Hello there, ${req.params.name}!`);
});

// Tell the app to listen on port 3000
app.listen(3002, function () {
  console.log("Listening on port 3002");
});
