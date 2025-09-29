// src/components/FoodCards.jsx
import React from "react";
import { foodData } from "./data/foodData";

const FoodCards = ({ plan }) => {
  if (!plan) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
      {plan.diet.map((item, i) => {
        const food = foodData.find(f => f.name.toLowerCase() === item.name.toLowerCase()) || {};
        return (
          <div
            key={i}
            className="border p-2 rounded-lg flex flex-col items-center bg-green-100 relative group"
          >
            <img
              src={food.image || "./images/food/default.jpg"}
              alt={item.name}
              className="w-full h-80 object-cover rounded-md mb-2"
            />
            <span className="font-medium">{item.name}</span>
            <span className="text-sm text-gray-600">{item.amount}</span>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white p-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity text-xs w-40 text-center z-10">
              {food.tip || "Eat healthy!"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodCards;
