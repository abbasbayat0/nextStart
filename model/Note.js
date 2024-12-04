const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({ title: { type: String } });
mongoose.models = {};
module.exports = mongoose.model("Note", noteSchema);
