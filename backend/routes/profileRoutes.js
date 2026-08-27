const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");


// GET LOGGED-IN USER PROFILE
router.get("/", protect, getProfile);


// UPDATE LOGGED-IN USER PROFILE
router.put("/", protect, updateProfile);


module.exports = router;