const Prediction = require("../models/Prediction");
const { predictInsurance } = require("../services/mlService");

const predict = async (req, res) => {
    try {

        const prediction = await predictInsurance(req.body);

        let riskLevel = "Low";

        if (prediction.predicted_cost > 15000)
            riskLevel = "High";
        else if (prediction.predicted_cost > 7000)
            riskLevel = "Medium";

        const savedPrediction = await Prediction.create({

            user: req.user.id,

            age: req.body.age,
            sex: req.body.sex,
            bmi: req.body.bmi,
            children: req.body.children,
            smoker: req.body.smoker,
            region: req.body.region,

            predictedCost: prediction.predicted_cost,

            riskLevel
        });

        res.status(200).json({
            success: true,
            prediction: savedPrediction
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    predict
};