# 🚀 MissionMeter

**MissionMeter** is a full-stack web application built with **React** and **Flask** that predicts the **budget of a satellite launch** based on custom inputs like orbit type, weight, and duration. It provides a comprehensive financial breakdown along with insights, visual reports, and an interactive chatbot for support.

---

Frontend Deployed link : https://mission-meter-7l66.vercel.app/
Demo Video Link: https://drive.google.com/file/d/1q3PBis1tAy_kOxeuqIu_0Jc5unHLRwVX/view?usp=sharing

## 🌐 Tech Stack

- **Frontend:** React, Tailwind CSS *(optional: mention if using any animation libs like GSAP/Framer Motion)*
- **Backend:** Flask (Python)
- **API:** OpenRouter (LLM API for chatbot and suggestions)
- **Data Visualization:** Chart.js / Recharts / any other lib used (please confirm)
- **Deployment:** *[Mention if hosted on Vercel, Render, etc.]*

---

## ✨ Features

- 🔮 **Budget Prediction**: Machine Learning Model(linear regression) Estimates satellite launch cost based on:
  - Orbit Type
  - Satellite Weight
  - Mission Duration (in months)

- 📊 **Monthly Planner Reports**:
  - Line/Bar charts of cost over time
  - Dynamic budget scaling based on duration

- 🥧 **Cost Breakdown Pie Chart**:
  - Launch Cost
  - Research Cost
  - Miscellaneous
  - Operations

- 💡 **Smart Tips**:
  - Suggestions to optimize and reduce costs
  - AI-powered insights using OpenRouter API

- 🤖 **Interactive Chatbot**:
  - Ask mission-related queries
  - Get personalized recommendations
  - Powered by LLM (OpenRouter)

---

## 📸 Screenshots

*Add screenshots of the dashboard, prediction result, charts, and chatbot UI here.*

---

## 🛠️ Installation

### 🔁 Clone the repository

```bash
git clone https://github.com/your-username/MissionMeter.git
cd MissionMeter

Frontend (React):
cd MissionMeter
npm install
npm run dev

Backend:
cd server
pip install -r requirements.txt
python app.py

## 🔐 Environment Variables

Create a `.env` file in the `api/chatbot.py` directory and add your OpenRouter API key:

```env
OPENROUTER_API_KEY=your_key_here

📄 License
MIT License — feel free to use this project for learning and non-commercial use.

📬 Contact
For queries or feedback:
oshika004@gmail.com
