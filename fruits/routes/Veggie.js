const mongoose = require("mongoose");

/**
 * Schema is the bluprint or structure for data
 */
const veggieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean,
});

/**
 * model adds all methods to schema to edit data
 */

const Veggie = mongoose.model("Veggie", veggieSchema);

module.exports = Veggie;
