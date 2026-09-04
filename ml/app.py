from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

model = joblib.load(
    "outputs/best_medical_cost_model.pkl"
)

print("Medical Cost Model Loaded Successfully!")


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "MediClaimAI ML API is running"
    })


@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.json

        # Create patient dataframe
        patient = pd.DataFrame([{

            "Age": data["age"],

            "Gender": data["gender"],

            "Region": data["region"],

            "Socioeconomic_Status":
                data["socioeconomic_status"],

            "Primary_Diagnosis":
                data["primary_diagnosis"],

            "Blood_Glucose_mg_dL":
                data["blood_glucose"],

            "HbA1c_%":
                data["hba1c"],

            "Total_Cholesterol_mg_dL":
                data["cholesterol"],

            "Treatment_Type":
                data["treatment_type"],

            "Treatment_Outcome":
                data["treatment_outcome"],

            "Imaging_Type":
                data["imaging_type"],

            "Hospital_Type":
                data["hospital_type"],

            "Insurance_Covered":
                data["insurance_covered"],

            "BMI":
                data["bmi"]

        }])
        predicted_cost = model.predict(patient)[0]


        if predicted_cost < 10000:

            category = "Low"

        elif predicted_cost < 25000:

            category = "Medium"

        else:

            category = "High"


        return jsonify({

            "success": True,

            "predicted_cost":
                round(float(predicted_cost), 2),

            "cost_category":
                category

        })


    except Exception as error:

        return jsonify({

            "success": False,

            "message": str(error)

        }), 500


if __name__ == "__main__":

    app.run(
        host="127.0.0.1",
        port=5001,
        debug=True
    )