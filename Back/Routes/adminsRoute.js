const express = require("express");
const router = express.Router();
const Admin = require("../Models/Admin.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../Middleware/auth.js");

router.post("/register", async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res.status(400).json({ msg: "email or password are empty" });
    }

    let admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(409).json({ msg: "admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({
      userName,
      email,
      password: hashedPassword,
    });

    // ✅ CORRECTION ICI
    await newAdmin.save();

    return res.status(201).json({
      msg: "admin registered successfully",

      admin: {
        id: newAdmin._id,
        userName: newAdmin.userName,
        email: newAdmin.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ msg: "Server error during registration" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(401).json({ msg: "email or password are empty" });
    }
    let admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ msg: "Error in Password" });
    }
    let token = jwt.sign(
      { email: admin.email, id: admin._id },
      process.env.SECRET_KEY,
      { expiresIn: "1w" }
    );
    const adminData = {
      id: admin._id,
      email: admin.email,
      name: admin.name,
    };
    return res.status(200).json({
      msg: "Login successful",
      admin: adminData,
      token,
    });
  } catch (error) {
    console.error("login error:", error);
    return res.status(500).json({ msg: "Server error during login" });
  }
});

router.get("/get-profile/:id",authMiddleware,  async (req, res) => {
  const response = await Admin.findById(req.params.id);

  if (!response) {
    return res.status(404).json({ msg: "Admin not founs" });
  }
  return res.status(200).json({ msg: " admin is found", response });
});

router.put("/update-profile", async (req, res) => {
  console.log("id", req.adminId);
});
module.exports = router;
