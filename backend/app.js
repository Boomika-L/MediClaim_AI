const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const predictionRoutes = require("./routes/predictionRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Medical Insurance Prediction API Running",
  });
});
app.use(
    "/api/predictions",
    predictionRoutes
);


app.use("/api/auth", authRoutes);
app.use("/api/predict", predictionRoutes);
module.exports = app;