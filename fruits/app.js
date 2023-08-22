/**
 * 
 */

require("dotenv").config();
const express = require("express");
const app = express();
const Veggie = require("./routes/Veggie");
const mongoose = require("mongoose");
const Fruit = require("./routes/Fruit");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
//app.engine("jsx", require("express-react-views").createEngine());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//used to debug mongo connection
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

/**
 * INDUCES
 */

//index
app.get("/fruits", (req, res) => {
  Fruit.find({})
    .then((allFruits) => {
      console.log(allFruits);
      res.render("fruit", { title: "Fruits", fruits: allFruits });
    })
    .catch((error) => console.error(error));
});

app.get("/vegetables", (req, res) => {
  Veggie.find({})
    .then((allVeggies) => {
      console.log(allVeggies);
      res.render("veg", { title: "Vegetables", veggies: allVeggies });
    })
    .catch((error) => console.error(error));
});

//new
app.get("/fruits/new", (req, res) => {
  res.render("new_fruit");
});

app.get("/vegetables/new", (req, res) => {
  res.render("new_veg");
});

//delete
//update

//create
app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  Fruit.create(req.body)
    .then((createdFruit) => {
      res.redirect("/fruits");
    })
    .catch((error) => {
      console.error(error);
    });
});

app.post("/vegetables", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  Veggie.create(req.body)
    .then((createdVeggie) => {
      res.redirect("/vegetables");
    })
    .catch((error) => {
      console.error(error);
    });
});

//edit
//show
app.get("/fruits/:id", (req, res) => {
  Fruit.findOne({ _id: req.params.id })
    .then((foundFruit) => {
      res.render("show_fruit", {
        fruit: foundFruit,
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/vegetables/:id", (req, res) => {
  Veggie.findOne({ _id: req.params.id })
    .then((foundVeggie) => {
      res.render("show_veg", {
        veggie: foundVeggie,
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(3004, () => {
  console.log("Listening on post 3004");
});
