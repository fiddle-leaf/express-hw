const mongoose = require("mongoose");

/**
 * Schema is the bluprint or structure for data
 */
const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean,
});

/**
 * model adds all methods to schema to edit data
 */

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
