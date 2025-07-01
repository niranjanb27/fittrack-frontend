import React from "react";

const BMIResult = ({ bmi, category }) => (
  <div className="mt-6 bg-blue-50 p-4 rounded-xl text-center">
    <p className="text-lg font-medium text-blue-800">
      Your BMI: <strong>{bmi}</strong>
    </p>
    <p className="text-sm text-gray-600">
      Category: <span className="font-semibold">{category}</span>
    </p>
  </div>
);

export default BMIResult;
