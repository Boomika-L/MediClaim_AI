const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    sex: {
      type: String,
      required: true,
    },

    bmi: {
      type: Number,
      required: true,
    },

    children: {
      type: Number,
      required: true,
    },

    smoker: {
      type: String,
      required: true,
    },

    region: {
      type: String,
      required: true,
    },

    predictedCost: {
      type: Number,
      required: true,
    },

    riskLevel: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Prediction", predictionSchema);