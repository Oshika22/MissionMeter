import React, { useState } from 'react';
import axios from 'axios';
import BudgetAnalyzer from './BudgetAnalyzer';
export default function Predictor() {
  const [payload, setPayload] = useState('');
  const [duration, setDuration] = useState('');
  const [orbit, setOrbit] = useState('LEO');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [showTips, setShowTips] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

      const payloadNum = parseFloat(payload);
      const durationNum = parseInt(duration);
      const orbitVal = orbit;
      
   
    try {

      const res = await axios.post('http://127.0.0.1:5000/predict', {
        payload_kg: parseFloat(payload),
        duration_months: parseInt(duration),
        orbit_type: orbit
      });
      console.log("📦 Payload:", payloadNum);
      console.log("🕒 Duration:", durationNum);
      console.log("🛰️ Orbit:", orbitVal);
      setResult(res.data.predicted_budget_crore);
      setShowTips(true);
    } catch (err) {
      setError(err.response?.data?.error || 'Prediction failed');
    }
  };

  return (
    <>
      <h2 className="text-5xl font-bold text-center mt-20 text-indigo-600">Space Budget Predictor</h2>
      <div className="max-w-md mx-auto mt-6 bg-white shadow-xl p-6 rounded-lg space-y-4">
        
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            value={payload}
            onChange={(e) => setPayload(e.target.value)}
            placeholder="Payload (kg)"
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Duration (months)"
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <select
            value={orbit}
            onChange={(e) => setOrbit(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="LEO">LEO</option>
            <option value="MEO">MEO</option>
            <option value="GEO">GEO</option>
          </select>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Predict Budget
          </button>
        </form>
  
        {error && <div className="text-red-500 font-medium text-center">{error}</div>}
  
        {result !== null && (
          <div className="text-center mt-4">
            <h3 className="text-xl font-bold text-green-600">Estimated Budget</h3>
            <p className="text-2xl">₹ {result} Cr</p>
  
            {showTips && (
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-300 rounded-xl shadow-inner">
                <h4 className="font-semibold text-yellow-700">💡 Cost-Saving Tip</h4>
                <p className="text-sm text-gray-700">
                  {orbit === 'GEO'
                    ? 'Try switching to LEO orbit to reduce launch cost.'
                    : payload > 3000
                    ? 'Consider using a rideshare launch to cut payload expenses.'
                    : 'Reduce duration or payload slightly to optimize budget.'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <BudgetAnalyzer
      totalBudget={result}
      duration={parseInt(duration)}
      />
    </>
  );
}
