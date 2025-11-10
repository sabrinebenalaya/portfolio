const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompetenceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
   admin: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Admin",
          required: false,
        }
});
module.exports = mongoose.model("Competence", CompetenceSchema);