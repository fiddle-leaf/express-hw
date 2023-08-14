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
app.get("/", (req, res) => {
  res.send(`
  <h1>Express Labs/HW</h1>
  <ul>
  <li><a href="/greeting/User">Greetings</a></li>
  <li><a href="/tip/200/10">Tip Calculator</a></li>
  `);
});

app.get("/greeting/:name", (req, res) => {
  res.send(`<h2>1.  Greetings</h2>
  <p>Hello there, ${req.params.name}! Have a great day.</p>`);
});

/**
 * Tip Calculator
 *  1.  Route of '/tip'and it should expect
 *  2.  2 params: 'total' and 'tipPercentage'.
 *  3.  The page should display the tip based on the total amount of the bill and the tip percentage.
 */
app.get("/tip/:total/:tipPercentage", (req, res) => {
  const tip = req.params.tipPercentage * 0.01;
  const subtotal = req.params.total;

  console.log(tip);
  res.send(`
  <h2>Tip Calculator</h2>
  <ul>
  <li>Tip Percent:\t${req.params.tipPercentage}%</li>
  <li>Subtotal:\t$${subtotal}</li>
  <li>Tip Total:\t$${subtotal * tip}</li>
  <li>Total Bill:\t$${subtotal * (1 + tip)}</li>
  </ul>`);
});

// App to listens on port 3002
app.listen(port, () => {
  console.log("Listening on port 3002");
});
