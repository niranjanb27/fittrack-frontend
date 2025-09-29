import React from "react";

const BMIForm = ({ height, weight, age, gender, goal, setHeight, setWeight, setAge, setGender, setGoal, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="space-y-4">
    {[
      ["Height (cm):", height, setHeight, "e.g. 170"],
      ["Weight (kg):", weight, setWeight, "e.g. 65"],
      ["Age:", age, setAge, "e.g. 25"],
    ].map(([label, value, setter, placeholder], index) => (
      <div key={index} className="flex items-center gap-4">
        <label className="w-32 text-gray-700 font-medium italic">{label}</label>
        <input
          type="number"
          value={value}
          onChange={(e) => setter(e.target.value)}
          className="input flex-1"
          placeholder={placeholder}
          required
        />
      </div>
    ))}

    <div className="flex items-center gap-4">
      <label className="w-32 text-gray-700 font-medium italic">Gender:</label>
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="input flex-1"
      >
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </div>

    <div className="flex items-center gap-4">
      <label className="w-32 text-gray-700 font-medium italic">Goal:</label>
      <select
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="input flex-1"
      >
        <option>Lose Weight</option>
        <option>Gain Muscle</option>
        <option>Stay Fit</option>
      </select>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-900 text-white py-2 rounded-xl hover:bg-green-600 focus:bg-green-600 transition duration-200"
    >
      Calculate BMI and Generate Health Plan
    </button>
  </form>
);

export default BMIForm;
