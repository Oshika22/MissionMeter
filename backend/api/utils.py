import pickle
import numpy as np
import pandas as pd
import os
def load_model():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # goes from api/ → backend/
    model_path = os.path.join(base_dir, 'model', 'budget_model.pkl')
    with open(model_path, 'rb') as f:
        return pickle.load(f)

def load_encoder():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # goes from api/ → backend/
    encoder_path = os.path.join(base_dir, 'model', 'label_encoder.pkl')
    with open(encoder_path, 'rb') as f:
        return pickle.load(f)

def predict_budget(model, encoder, payload_kg, duration_months, orbit_type):
    # Handle both str and int orbit types
    if isinstance(orbit_type, str):
        orbit_code = encoder.transform([orbit_type])[0]
    else:
        orbit_code = np.int64(orbit_type)

    input_df = pd.DataFrame([{
        'Payload (kg)': payload_kg,
        'Duration (months)': duration_months,
        'Orbit Type': orbit_code
    }])

    prediction = model.predict(input_df)[0]
    return round(prediction, 2)
