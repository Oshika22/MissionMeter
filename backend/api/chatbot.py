from flask import request, jsonify
import requests
API_KEY = ""
API_URL = "https://openrouter.ai/api/v1/chat/completions"
def call_openrouter(prompt):
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type":
        "application/json"
    }
    data = {
        "model": "mistralai/devstral-small:free",
        "messages": [
            {"role": "system", "content": 
              f"MissionMeter Bot a friendly and intelligent space mission planning assistant response only."
              f"Your job is to help users understand how to plan cost-effective space missions. You ask relevant questions about their mission goals, duration, payload, and orbit type."
              f"You can provide tips on reducing launch costs, choosing orbits (LEO, MEO, GEO), and optimizing budgets. You explain in simple, non-technical terms, and sound like a mission advisor "
              f"If a user provides mission details, guide them with helpful suggestions, or recommend using the budget prediction tool."},
              
            {"role": "user", "content": prompt}
        ]
    }
    response = requests.post(API_URL, headers=headers, json=data)
    try:
        return response.json()['choices'][0]['message']['content']
    except Exception as e:
        print("Error decoding JSON:", e)
        return None