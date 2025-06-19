import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer
} from 'recharts';

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444'];

export default function BudgetAnalyzer({ totalBudget, duration }) {
  const monthlyBudget = totalBudget / duration;

  const barData = Array.from({ length: duration }, (_, i) => ({
    month: `M${i + 1}`,
    budget: parseFloat(monthlyBudget.toFixed(2))
  }));

  const pieData = [
    { name: 'Launch', value: totalBudget * 0.4 },
    { name: 'Research', value: totalBudget * 0.25 },
    { name: 'Operations', value: totalBudget * 0.2 },
    { name: 'Misc', value: totalBudget * 0.15 }
  ];

  return (
    <div className="mt-10 p-4 bg-white rounded-2xl shadow-lg space-y-6">
      <h3 className="text-lg font-semibold text-center">Budget Distribution Analysis</h3>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Monthly Budget Bar Chart */}
        <div className="w-full md:w-1/2 h-[300px]">
          <h4 className="text-center text-sm font-medium mb-2">Monthly Budget</h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="budget" fill="#6366f1" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sector-wise Budget Pie Chart */}
        <div className="w-full md:w-1/2 h-[300px] mb-3">
          <h4 className="text-center text-sm font-medium mb-2">Sector-wise Budget</h4>
          <ResponsiveContainer width="100%" height="95%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="80%"
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
