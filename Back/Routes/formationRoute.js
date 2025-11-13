const express = require("express");
const router = express.Router();
const Formation = require("../Models/Formation.js");
const Admin = require("../Models/Admin.js");
const authMiddleware = require("../Middleware/auth.js");

router.post("/add/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const newFormation = new Formation({
      year: req.body.year,
      title: req.body.title,
      description: req.body.description,
      admin: id,
    });
    const formationSaved = await newFormation.save();
    
    const adminUpdated = await Admin.findByIdAndUpdate(
      id,
      { $push: { formations: formationSaved._id } },
      { new: true }
    );
    if (!adminUpdated) {
      await Formation.findByIdAndDelete(formationSaved._id);
      return res.status(404).json({ msg: "Admin non trouvé" });
    }

    res.status(201).json({
      formation: formationSaved,
      admin: adminUpdated,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ msg: "error" });
  }
});

module.exports = router;
