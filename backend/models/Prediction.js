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

    gender: {
      type: String,
      required: true,
    },

    region: {
      type: String,
      required: true,
    },

    socioeconomicStatus: {
      type: String,
      required: true,
    },

    primaryDiagnosis: {
      type: String,
      required: true,
    },

    bloodGlucose: {
      type: Number,
      required: true,
    },

    hba1c: {
      type: Number,
      required: true,
    },

    cholesterol: {
      type: Number,
      required: true,
    },

    treatmentType: {
      type: String,
      required: true,
    },

    treatmentOutcome: {
      type: String,
      required: true,
    },

    imagingType: {
      type: String,
      required: true,
    },

    hospitalType: {
      type: String,
      required: true,
    },

    insuranceCovered: {
      type: Boolean,
      required: true,
    },

    bmi: {
      type: Number,
      required: true,
    },

    predictedCost: {
      type: Number,
      required: true,
    },

    costCategory: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Prediction", predictionSchema);
