const express = require("express");
const router = express.Router();
const Project = require("../Models/Project.js");
// GET ALL PROJECTS
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ date: -1 });
    res.status(200).json(projects); // Retourne toujours 200, même si vide
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({
      msg: "Error retrieving projects",
    });
  }
});

// GET /projects/:id - Récupérer un projet par ID
router.get("/projects/:id", async (req, res) => {
  const projectId = req.params.id;
  try {
    const projet = await Project.findById(projectId);
    if (!projet) {
      return res.status(404).json({ msg: "Project not found" });
    }
    res.status(200).json(projet);
  } catch (error) {
    res.status(500).json({ msg: "Error retrieving project" });
  }
});

// add project
router.post("/project", async (req, res) => {
  const { name, description, linkGit, linkDep, imageUrl, technologies, date } =
    req.body;
  try {
    const newProject = new Project({
      name,
      description,
      linkGit,
      linkDep,
      imageUrl,
      technologies,
      date,
    });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({ msg: "Error adding project" });
  }
});

//delete project
router.delete("/project/:id", async (req, res) => {
  const projectId = req.params.id;
  try {
    const projectDeleted = await Project.findByIdAndDelete(projectId);
    if (!projectDeleted) {
      return res.status(404).json({ msg: "Project not found" });
    }
    res.status(200).json({ msg: "Project deleted successfully" });
  } catch (error) {
    console.log("Error deleting project:", error);
    res.status(500).json({ msg: "Error deleting project" });
  }
});

//update project
router.put("/project/:id", async (req, res) => {
  const projectId = req.params.id;
  const { name, description, linkGit, linkDep, imageUrl, technologies, date } =
    req.body;
  try {
    const projectUpdated = await Project.findByIdAndUpdate(
      projectId,
      {
        name,
        description,
        linkGit,
        linkDep,
        imageUrl,
        technologies,
        date,
      },
      { new: true }
    );
    if (!projectUpdated) {
      return res.status(404).json({ msg: "Project not found" });
    }
    res.status(200).json(projectUpdated);
  } catch (error) {
    console.log("Error updating project:", error);
    res.status(500).json({ msg: "Error updating project" });
  }
});

module.exports = router;
