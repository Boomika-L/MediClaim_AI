const axios = require("axios");

const predictInsurance = async (data) => {
    try {

        const response = await axios.post(
            "http://127.0.0.1:5001/predict",
            {
                age: Number(data.age),
                gender: data.gender,
                region: data.region,
                socioeconomic_status: data.socioeconomic_status,
                primary_diagnosis: data.primary_diagnosis,
                blood_glucose: Number(data.blood_glucose),
                hba1c: Number(data.hba1c),
                cholesterol: Number(data.cholesterol),
                treatment_type: data.treatment_type,
                treatment_outcome: data.treatment_outcome,
                imaging_type: data.imaging_type,
                hospital_type: data.hospital_type,
                insurance_covered: data.insurance_covered,
                bmi: Number(data.bmi)
            }
        );

        return response.data;

    } catch (error) {

        console.log(
            "ML Service Error:",
            error.message
        );

        throw error;
    }
};

module.exports = {
    predictInsurance
};