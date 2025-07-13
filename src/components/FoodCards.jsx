import React from "react";

const foodImages = {
  "oats": "./images/food/Oats.jpg",
  "banana": "./images/food/fruits.jpg",
  "grilled chicken": "./images/food/chicken.jpg",
  "salad": "./images/food/salad.jpg",
  "tofu": "./images/food/tofu.jpg",
  "lentils": "./images/food/lentils.jpg",
  "smoothie": "./images/food/smoothie.jpg",
  "rice": "./images/food/rice.jpg",
  "green tea": "./images/food/greentea.jpg",
  "vegetables" :"./images/food/vegetables.jpg",
  "beans" : "./images/food/beans.jpg",
  "vitamin b12" : "./images/food/vitaminC.jpg",
  "vitamin C" : "./images/food/vitaminC.jpg",
  "calcium" : "./images/food/milk.jpg",
  "hydrate" : "./images/food/hydrate.jpg",
  "pulses" : "./images/food/pulses.jpg",
  "nuts": "./images/food/nuts.jpg",
  "fats": "./images/food/fats.jpg",
};

const FoodCards = ({ plan }) => {
  const planLower = plan.toLowerCase();

  return (
    <>
      <h3 className="text-lg font-semibold text-white text-center bg-gradient-to-br from-green-300 to-green-700 py-2 rounded-md mb-4">🍱 Meals to include in Diet</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {Object.keys(foodImages).map((foodKey) =>
          planLower.includes(foodKey) ? (
            <div key={foodKey} className="border rounded-xl p-4 bg-green-100 shadow-xl hover:scale-103">
              <img
                src={foodImages[foodKey]}
                alt={foodKey}
                className="w-full h-50 object-cover rounded-lg mb-3"
              />
              <h4 className="text-md font-bold text-gray-700 text-center capitalize">{foodKey}</h4>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default FoodCards;
