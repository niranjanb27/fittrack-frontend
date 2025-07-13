import React from "react";

const HealthPlan = ({ plan }) => (
  <div className="mt-6">
    <h2 className="text-lg font-semibold text-white text-center bg-green-600 py-2 rounded-md mb-4">
      🧠 AI-Generated Diet and Exercise Plan
    </h2>
    <div className=" p-4 rounded-xl whitespace-pre-line text-gray-800">
      {plan}
    </div>
  </div>
);

export default HealthPlan;
