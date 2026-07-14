const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const { predict } = require("../controllers/predictionController");

router.post("/", protect, predict);

module.exports = router;