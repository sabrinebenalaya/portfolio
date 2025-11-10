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
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: false,
  },
});
module.exports = mongoose.model("Formation", FormationSchema);
