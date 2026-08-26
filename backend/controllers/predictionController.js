const Prediction = require("../models/Prediction");
const { predictInsurance } = require("../services/mlService");


// ==========================================
// CREATE PREDICTION
// ==========================================

const predict = async (req, res) => {

    try {

        const prediction =
            await predictInsurance(req.body);


        let riskLevel = "Low";


        if (prediction.predicted_cost > 15000) {

            riskLevel = "High";

        } else if (prediction.predicted_cost > 7000) {

            riskLevel = "Medium";

        }


        const savedPrediction =
            await Prediction.create({

                user: req.user.id,

                age: req.body.age,

                sex: req.body.sex,

                bmi: req.body.bmi,

                children: req.body.children,

                smoker: req.body.smoker,

                region: req.body.region,

                predictedCost:
                    prediction.predicted_cost,

                riskLevel

            });


        res.status(200).json({

            success: true,

            prediction: savedPrediction

        });


    } catch (error) {

        console.error(
            "Prediction Error:",
            error
        );


        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



// ==========================================
// GET PREDICTION HISTORY
// ==========================================

const getPredictionHistory = async (req, res) => {

    try {

        const predictions =
            await Prediction.find({

                user: req.user.id

            })
            .sort({
                createdAt: -1
            });


        res.status(200).json({

            success: true,

            predictions

        });


    } catch (error) {

        console.error(
            "Prediction History Error:",
            error
        );


        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



module.exports = {

    predict,

    getPredictionHistory

};