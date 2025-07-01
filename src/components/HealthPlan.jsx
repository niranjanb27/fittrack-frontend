import React from "react";

const HealthPlan = ({ plan }) => (
  <div className="mt-6">
    <h2 className="text-lg font-semibold text-green-700 mb-2">🧠 AI-Generated Plan</h2>
    <div className="bg-green-50 p-4 rounded-xl whitespace-pre-line text-gray-800">
      {plan}
    </div>
  </div>
);

export default HealthPlan;
