const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    linkGit: {
        type: String,
        required: true
    },
    linkDep: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    technologies: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        required:false,
        default: Date.now
    }
}, { timestamps: true });
module.exports = mongoose.model("Project", ProjectSchema);
