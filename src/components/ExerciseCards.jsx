import React from "react";

const ExerciseCards = ({ plan, exerciseImages }) => (
  <>
    <h3 className="mt-6 mb-3 text-md font-semibold text-blue-700">💪 Exercise Cards</h3>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Object.keys(exerciseImages).map((exercise) =>
        plan.includes(exercise) ? (
          <div key={exercise} className="border rounded-xl p-4 bg-white shadow">
            <img
              src={exerciseImages[exercise]}
              alt={exercise}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h4 className="text-md font-bold text-gray-700">{exercise}</h4>
          </div>
        ) : null
      )}
    </div>
  </>
);

export default ExerciseCards;
