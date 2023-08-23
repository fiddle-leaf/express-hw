//require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon");

//set pug as view engine
app.set("view engine", "pug");

// INDUCES
//index
app.get("/", (req, res) => {
  res.send("Welcome to Pokemon app!");
});

app.get("/pokemon", (req, res) => {
  res.render("Index", {
    title: "Pokemon",
    message: "See all Pokemon!",
    pokemons: pokemon,
  });
});

// show
app.get("/pokemon/:id", (req, res) => {
  console.log(pokemon);
  res.render("show", { pokemons: pokemon, id: req.params.id });
});

// listening to port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
