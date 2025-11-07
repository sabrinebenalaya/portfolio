const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
    formations: { 
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Formation"
    }],
    default: []
  },
  competences: {  
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Competence"
    }],
    default: []
  },
  experiences: { 
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Experience"
    }],
    default: []
  },
  projects: { 
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project"
    }],
    default: []
  }
});
module.exports = mongoose.model("Admin", AdminSchema);
