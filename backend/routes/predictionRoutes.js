const express = require("express");

const router = express.Router();

const protect =
    require("../middleware/authMiddleware");

const {
    predict,
    getPredictionHistory
} = require("../controllers/predictionController");



router.post(
    "/",
    protect,
    predict
);

router.get(
    "/history",
    protect,
    getPredictionHistory
);


module.exports = router;