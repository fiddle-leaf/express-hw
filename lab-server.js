/**
 * First Express Lab: W12D2
 *  * SETUP: require modules, create express app, and define port constants
 */
const express = require("express");
const app = express();
const port = 3002;

/**
 * Greetings
 *  1.  Route '/greeting': sends a generic greeting to the screen.
 *  2.  Params: '/:name'
 *  3.  The page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!"
 */

// Mount routes
app.get("/greeting", (req, res) => {
  res.send(`Hello there!`);
});

app.get("/greeting/:name", (req, res) => {
  res.send(`Hello there, ${req.params.name}!`);
});

// App to listens on port 3002
app.listen(port, () => {
  console.log("Listening on port 3002");
});
