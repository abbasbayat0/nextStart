const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({
  title: { type: String },
  age: { type: Number },
});
mongoose.models = {};
module.exports = mongoose.model("Note", noteSchema);
