// ✅ BMIResult.jsx using recharts for circular progress ring
import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const BMIResult = ({ bmi, category }) => {
  const data = [
    {
      name: category,
      value: bmi,
      fill:
        category === "Normal"
          ? "#22c55e"
          : category === "Overweight"
          ? "#facc15"
          : category === "Obese"
          ? "#ef4444"
          : "#3b82f6",
    },
  ];

  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">Your BMI Result</h3>
      <div className="flex justify-center">
        <RadialBarChart
          width={200}
          height={200}
          cx={100}
          cy={100}
          innerRadius={60}
          outerRadius={90}
          barSize={15}
          data={data}
          startAngle={180}
          endAngle={-180}
        >
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="value"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            align="center"
          />
        </RadialBarChart>
      </div>
      <p className="mt-4 text-gray-600">
        <span className="font-semibold">BMI:</span> {bmi} | <span className="font-semibold">Category:</span> {category}
      </p>
    </div>
  );
};

export default BMIResult;
