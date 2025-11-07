const express = require("express");
const router = express.Router();
const Project = require("../Models/Project.js");
const authMiddleware = require("../Middleware/auth.js");
  const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Dossier où sauvegarder les fichiers
  },
  filename: function (req, file, cb) {
    // Nom unique pour éviter les conflits
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const fileFilter = (req, file, cb) => {
  // Autoriser seulement les images
  console.log(file)
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Seules les images sont autorisées!'), false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB max
  }
});

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ date: -1 });
    res.status(200).json(projects); 
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
router.post("/admin/project",authMiddleware, upload.single('imageUrl'), async (req, res) => {

     console.log('Fichier reçu:', req.file);
    console.log('Données texte reçues:', req.body);
       console.log('id admin texte reçues:', req.body.idAdmin);
      const { name, description, linkGit, linkDep, id, technologies, date } =
    req.body;
  try {
    const newProject = new Project({
      name,
      description,
      linkGit,
      linkDep,
      imageUrl : req.file.path,
      technologies,
      date,
      admin:req.body.idAdmin
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
