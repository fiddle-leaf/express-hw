/**
 *
 */

require("dotenv").config();
const express = require("express");
const app = express();
const Veggie = require("./routes/Veggie");
const mongoose = require("mongoose");
const Fruit = require("./routes/Fruit");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
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
      res.render("index", {
        title: "Fruits",
        items: allFruits,
        target: "/fruits",
      });
    })
    .catch((error) => console.error(error));
});

app.get("/vegetables", (req, res) => {
  Veggie.find({})
    .then((allVeggies) => {
      console.log(allVeggies);
      res.render("index", {
        title: "Vegetables",
        items: allVeggies,
        target: "/vegetables",
      });
    })
    .catch((error) => console.error(error));
});

//new
app.get("/fruits/new", (req, res) => {
  res.render("new", {
    title: "New Fruits!",
    name: "fruits",
    target: "/fruits",
  });
});

app.get("/vegetables/new", (req, res) => {
  res.render("new_item", {
    title: "New Veggies!",
    name: "veggies",
    target: "/vegetables",
  });
});

//delete
app.delete("/vegetables/:id", (req, res) => {
  Veggie.deleteOne({ _id: req.params.id })
    .then((info) => {
      console.log(info);
      res.redirect("/vegetables");
    })
    .catch((error) => console.log(error));
});
//update
app.put("/veggies/:id", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  Veggie.updateOne({ _id: req.params.id }, req.body).then((info) => {
    console.log(info);
    res.redirect(`/vegetables/${req.params.id}`);
  });
});

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
app.get("/fruits/:id/edit", (req, res) => {
  Fruit.findOne({ _id: req.params.id })
    .then((foundFruit) => {
      //console.log(foundFruit);
      res.render("edit", {
        item: foundFruit,
        name: "Fruit",
        target: "/fruits",
      });
    })
    .catch((error) => console.log(error));
});

app.get("/vegetables/:id/edit", (req, res) => {
  Veggie.findOne({ _id: req.params.id })
    .then((foundVeggie) => {
      //console.log(foundVeggie);
      res.render("edit", {
        item: foundVeggie,
        name: "Vegetable",
        target: "/vegetables",
      });
    })
    .catch((error) => console.log(error));
});
//show
app.get("/fruits/:id", (req, res) => {
  Fruit.findOne({ _id: req.params.id })
    .then((foundFruit) => {
      res.render("show", {
        item: foundFruit,
        title: "Fruits",
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/vegetables/:id", (req, res) => {
  Veggie.findOne({ _id: req.params.id })
    .then((foundVeggie) => {
      res.render("show", {
        item: foundVeggie,
        title: "Vegetables",
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(3004, () => {
  console.log("Listening on post 3004");
});
