const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormationSchema = new Schema({
  year: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});
module.exports = mongoose.model("Formation", FormationSchema);