// src/components/ExerciseCards.jsx
import React from "react";
import { exerciseData } from "./data/exerciseData";

const ExerciseCards = ({ plan }) => {
  if (!plan) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
      {plan.exercise.map((item, i) => {
        const exercise = exerciseData.find(e => e.name === item.name) || {};
        return (
          <div
            key={i}
            className="border p-2 rounded-lg flex flex-col items-center bg-blue-100 relative group"
          >
            <img
              src={exercise.image || "./images/exercise/default.jpg"}
              alt={item.name}
              className="w-full h-90 object-cover rounded-md mb-2"
            />
            <span className="font-medium">{item.name}</span>
            <span className="text-sm text-gray-600">{item.amount}</span>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white p-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity text-xs w-40 text-center z-10">
              {exercise.tip || "Exercise safely!"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExerciseCards;
