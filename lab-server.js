/**
 * First Express Lab: W12D2
 *  * SETUP: require modules, create express app, and define port constants
 */
const express = require("express");
const app = express();
const port = 3002;

// Mount routes
app.get("/", (req, res) => {
  res.send(`
  <h1>Express Labs/HW</h1>
  <ul>
  <li><a href="/greeting/User">Greetings</a></li>
  <li><a href="/tip/200/10">Tip Calculator</a></li>
  <li><a href="/magic/hi">Magic 8 Ball</a></li>
  `);
});

/**
 * Greetings
 *  1.  Route '/greeting': sends a generic greeting to the screen.
 *  2.  Params: '/:name'
 *  3.  The page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!"
 */
app.get("/greeting/:name", (req, res) => {
  res.send(`<h2>1.  Greetings</h2>
  <p>Hello there, ${req.params.name}! Have a great day.</p>`);
});

/**
 * Tip Calculator
 *  1.  Route of '/tip'and it should expect
 *  2.  2 params: '/:total' and '/:tipPercentage'.
 *  3.  The page should display the tip based on the total amount of the bill and the tip percentage.
 */
app.get("/tip/:total/:tipPercentage", (req, res) => {
  const tip = req.params.tipPercentage * 0.01;
  const subtotal = req.params.total;

  //console.log(tip);
  res.send(`
  <h2>Tip Calculator</h2>
  <ul>
  <li>Tip Percent:\t${req.params.tipPercentage}%</li>
  <li>Subtotal:\t$${subtotal}</li>
  <li>Tip Total:\t$${subtotal * tip}</li>
  <li>Total Bill:\t$${subtotal * (1 + tip)}</li>
  </ul>`);
});

/**
 * Magic 8 Ball
 *  1.  Route of '/magic' expects a phrase in the URL that asks the Magic 8 ball a question
 *  2.  Params: /:magicQuestion (%20 as space)
 *  3.  Page returns question AND a random Magic 8 ball response from array.
 */

const magicResponses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic/:magicQuestion", (req, res) => {
  let randomNum = Math.floor(Math.random() * magicResponses.length);

  res.send(`
  <h2>Magic 8 Ball</h2>
  <h3><i>"${req.params.magicQuestion}?"</i></h3>
  <p><b>Magic 8 Ball Response:</b>\t${magicResponses[randomNum]}`);
});

// App to listens on port 3002
app.listen(port, () => {
  console.log("Listening on port 3002");
});
