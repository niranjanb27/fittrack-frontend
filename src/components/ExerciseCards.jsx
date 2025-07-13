import React from "react";

const ExerciseCards = ({ plan, exerciseImages }) => (
  <>
    <h3 className="text-lg font-semibold text-white text-center bg-gradient-to-tr from-blue-700 to-blue-300 mt-3 py-2 rounded-md mb-4">💪 Exercise to Do</h3>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      {Object.keys(exerciseImages).map((exercise) =>
        plan.includes(exercise) ? (
          <div key={exercise} className="border rounded-xl p-4 bg-blue-100 shadow-xl hover:scale-103">
            <img
              src={exerciseImages[exercise]}
              alt={exercise}
              className="w-full h-80 object-cover rounded-lg mb-3"
            />
            <h4 className="text-md font-bold text-gray-700 capitalize text-center">{exercise}</h4>
          </div>
        ) : null
      )}
    </div>
  </>
);

export default ExerciseCards;
