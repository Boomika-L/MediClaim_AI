from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

# Load trained model
model = joblib.load("models/best_model.pkl")

@app.route("/")
def home():
    return jsonify({
        "message": "Medical Insurance Prediction API is Running"
    })

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        input_data = pd.DataFrame({
            "age": [data["age"]],
            "sex": [data["sex"]],
            "bmi": [data["bmi"]],
            "children": [data["children"]],
            "smoker": [data["smoker"]],
            "region": [data["region"]]
        })

        prediction = model.predict(input_data)

        return jsonify({
            "success": True,
            "predicted_cost": round(float(prediction[0]), 2)
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })

if __name__ == "__main__":
    app.run(debug=True, port=5001)