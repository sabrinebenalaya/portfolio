const express = require("express");
const router = express.Router();
const Experience = require("../Models/Experience");
const Admin = require("../Models/Admin");
const authMiddleware = require("../Middleware/auth.js");

router.post("/add/:id", authMiddleware, async (req, res) => {
  console.log("body", req.body);
  const id = req.params.id;
  const { year, post, societe, urlSociete, description } = req.body;
  try {
    const newExperience = new Experience({
      year,
      post,
      societe,
      urlSociete,
      description,
      admin: id,
    });

    const savedExperience = await newExperience.save();
    const adminUpdated = await Admin.findByIdAndUpdate(
      id,
      { $push: { experiences: savedExperience._id } },
      { new: true }
    );
    if (!adminUpdated) {
      await Experience.findByIdAndDelete(savedExperience._id);
      return res.status(404).json({ msg: "Admin non trouvé" });
    }

    return res.status(201).json({
      admin: adminUpdated,
      experience: savedExperience,
    });
  } catch (error) {
    console.log(error);
              return res.status(500).json({ msg: error });

  }
});

module.exports = router;
