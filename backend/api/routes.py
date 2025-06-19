from flask import Blueprint, request, jsonify
from .utils import load_model, load_encoder, predict_budget
import numpy as np
import pandas as pd
from .chatbot import call_openrouter
api_bp = Blueprint('api', __name__)

model = load_model()
encoder = load_encoder()

@api_bp.route('/')
def home():
    return jsonify({'message': '🚀 Space Budget API is running!'})

@api_bp.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        payload = float(data['payload_kg'])
        duration = int(data['duration_months'])
        orbit_input = data['orbit_type']  # string or int

        # # 🛡️ Handle orbit value smartly
        # if isinstance(orbit_input, str):
        #     try:
        #         # Try to convert string digit to int first (e.g. "1")
        #         orbit_input = int(orbit_input)
                
        #     except ValueError:
        #         # If not convertible to int, use label encoder
        #         orbit_input = encoder.transform([orbit_input])[0]
        if orbit_input == 'LEO':
            orbit_input = 1
        elif orbit_input == 'GEO':
            orbit_input = 0
        elif orbit_input == 'MEO':
            orbit_input = 2

        # If it's already int or converted
        orbit_code = np.int64(orbit_input)
        print(orbit_input,orbit_code)
        # Build input
        input_df = pd.DataFrame([{
            'Payload (kg)': payload,
            'Duration (months)': duration,
            'Orbit Type': orbit_code
        }])

        prediction = model.predict(input_df)[0]
        return jsonify({'predicted_budget_crore': round(prediction, 2)})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

@api_bp.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_input = data.get("message")

        if not user_input:
            return jsonify({"error": "No message provided"}), 400

        bot_response = call_openrouter(user_input)
        return jsonify({"response": bot_response})

    except Exception as e:
        print("❌ Chatbot Error:", e)
        return jsonify({"error": "Something went wrong"}), 500