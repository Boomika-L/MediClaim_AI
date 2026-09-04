const Prediction = require("../models/Prediction");
const { predictInsurance } = require("../services/mlService");

const predict = async (req, res) => {
  try {
    const prediction = await predictInsurance(req.body);

    if (!prediction.success) {
      return res.status(500).json({
        success: false,

        message: prediction.message || "Prediction failed",
      });
    }

    const savedPrediction = await Prediction.create({
      user: req.user.id,

      age: req.body.age,

      gender: req.body.gender,

      region: req.body.region,

      socioeconomicStatus: req.body.socioeconomic_status,

      primaryDiagnosis: req.body.primary_diagnosis,

      bloodGlucose: req.body.blood_glucose,

      hba1c: req.body.hba1c,

      cholesterol: req.body.cholesterol,

      treatmentType: req.body.treatment_type,

      treatmentOutcome: req.body.treatment_outcome,

      imagingType: req.body.imaging_type,

      hospitalType: req.body.hospital_type,

      insuranceCovered: req.body.insurance_covered,

      bmi: req.body.bmi,

      predictedCost: prediction.predicted_cost,

      costCategory: prediction.cost_category,
    });

    res.status(200).json({
      success: true,

      prediction: savedPrediction,
    });
  } catch (error) {
    console.error("Prediction Error:", error.message);

    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

const getPredictionHistory = async (req, res) => {
  try {
    const predictions = await Prediction.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,

      predictions,
    });
  } catch (error) {
    console.error("Prediction History Error:", error.message);

    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

module.exports = {
  predict,

  getPredictionHistory,
};
