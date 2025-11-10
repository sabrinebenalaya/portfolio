const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  year: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  societe: {
    type: String,
    required: true,
  },
  urlSociete: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
   admin: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Admin",
          required: false,
        }
});
module.exports = mongoose.model("Experience", ExperienceSchema);
