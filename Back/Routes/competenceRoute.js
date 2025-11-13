const express = require("express");
const router = express.Router();
const Competence = require("../Models/Competence.js");
const Admin = require("../Models/Admin.js");
const authMiddleware = require("../Middleware/auth.js");

router.post("/add/:id", authMiddleware, async (req, res) => {
  const { name } = req.body;
const id  = req.params.id;

  try {
       const newCompetence = new Competence({
          name,
          admin:id
        });
    const savedCompetence = await newCompetence.save();

       const adminUpdated = await Admin.findByIdAndUpdate(
          id, 
          { $push: { competences: savedCompetence._id } }, 
          { new: true } 
        );
        if (!adminUpdated) {
          await Competence.findByIdAndDelete(savedCompetence._id);
          return res.status(404).json({ msg: "Admin non trouvé" });
        }
    
        res.status(201).json({
          competence: savedCompetence,
          admin: adminUpdated
        });
    
  } catch (error) {
    console.log("error :", error);
    return res.status(500).json({msg: error});
  }
});



module.exports = router;
