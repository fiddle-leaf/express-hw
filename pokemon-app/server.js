require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const pokemons = require("./models/pokemons");
const Pokemon = require("./models/Pokemon");

app.use(express.urlencoded({ extended: true }));

//set pug as view engine
app.set("view engine", "pug");

//connecting to Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// INDUCES
// index
app.get("/", (req, res) => {
  res.send("Welcome to Pokemon app!");
});

app.get("/pokemons", (req, res) => {
  Pokemon.find({})
    .then((allPokemons) => {
      console.log(allPokemons);
      res.render("Index", { pokemons: allPokemons });
    })
    .catch((error) => console.log(error));
});

// new
app.get("/pokemons/new", (req, res) => {
  res.render("new");
});

// create
app.post("/pokemons", (req, res) => {
  console.log(req.body);
  Pokemon.create(req.body)
    .then((createdPokemon) => {
      res.redirect("/pokemons");
    })
    .catch((error) => console.log(error));
});

app.get("/pokemons/seed", (req, res) => {
  Pokemon.insertMany([
    { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
    { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
    { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
    { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
    { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
    { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
    { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" },
  ]);
});

// show
app.get("/pokemons/:id", (req, res) => {
  Pokemon.findOne({ _id: req.params.id })
    .then((foundPokemon) => {
      res.render("show", { pokemon: foundPokemon });
    })
    .catch((error) => console.log(error));
});

// listening to port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
