// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const navigate = useNavigate()

  const [missions, setMissions] = useState([]);
  const [newMission, setNewMission] = useState({
    name: '',

  });

  const handleChange = (e) => {
    setNewMission({ ...newMission, [e.target.name]: e.target.value });
  };

  const handleAddMission = () => {
    if (!newMission.name) return;
    setMissions([...missions, newMission]);
    setNewMission({ name: '', });
  };

  const handleDelete = (index) => {
    const updated = [...missions];
    updated.splice(index, 1);
    setMissions(updated);
  };

  return (
    <div id="dashboard" className="min-h-screen text-black p-6">
      <h2 className="text-5xl font-bold mb-6 text-center text-indigo-700">Mission Dashboard</h2>
      <div className="max-w-5xl mx-auto bg-slate-50 p-8 rounded-lg shadow-sm">
        

        {/* Add New Mission */}
        <div className="grid sm:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Mission Name"
            className="p-3 rounded bg-slate-100 border border-gray-200"
            value={newMission.name}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleAddMission}
          className="w-full py-3 mb-6 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold"
        >
          ➕ Add Mission
        </button>

        {/* List of Missions */}
        {missions.length > 0 ? (
          <div className="space-y-4">
            {missions.map((mission, index) => (
              <div
                key={index}
                onClick={() => {
                  localStorage.setItem('latestMission', JSON.stringify(mission));
                  navigate('/predictor');
                }}
                className="bg-indigo-100 p-4 rounded-lg flex justify-between items-center border border-gray-700"
                
              >
                <div>
                  <h4 className="text-xl font-semibold">{mission.name}</h4>
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-400 hover:text-red-600"
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No missions added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;