import React, { useState, useRef } from "react";
import axios from "axios";

const exerciseImages = {
  "Push-ups": "/images/pushup.jpg",
  "Plank": "/images/plank.jpg",
  "Squats": "/images/squat.jpg",
  "Jumping Jacks": "/images/jumping-jacks.jpg",
  "Lunges": "/images/lunges.jpg",
  "Sit-ups": "/images/situps.jpg",
  "jog": "/images/jogging.jpg",
  "yoga": "/images/yoga.jpg",
  "swim": "/images/swim.jpg",
};

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [goal, setGoal] = useState("Lose Weight");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const calculateBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    else if (bmi < 25) return "Normal";
    else if (bmi < 30) return "Overweight";
    else return "Obese";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPlan("");
    setCategory("");

    try {
      const bmiResponse = await axios.post(
        "https://fittrack-backend-ftz6.onrender.com/api/bmi",
        { height, weight }
      );
      const calculatedBmi = parseFloat(bmiResponse.data.bmi);
      setBmi(calculatedBmi);
      setCategory(calculateBMICategory(calculatedBmi));

      const planResponse = await axios.post(
        "https://fittrack-backend-ftz6.onrender.com/api/plan",
        {
          bmi: calculatedBmi,
          age,
          gender,
          goal,
        }
      );

      setPlan(planResponse.data.plan);
    } catch (err) {
      console.error("Error:", err);
      setPlan("❌ Error generating plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold mb-6 text-center text-blue-900 italic">F</h1>
          <h1 className="text-3xl font-bold mt-3 text-center text-blue-900 italic">it</h1>
          <h1 className="text-4xl font-bold mt-4 text-center text-green-700 italic">T</h1>
          <h1 className="text-3xl font-bold mt-3 text-center text-green-700 italic">rack</h1>
        </div>

        <p className="text-center mb-4 text-gray-600">
          Get your BMI and an AI-generated health plan
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="w-32 text-gray-700 font-medium italic">Height (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="input flex-1"
              placeholder="e.g. 170"
              required
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 text-gray-700 font-medium italic">Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="input flex-1"
              placeholder="e.g. 65"
              required
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 text-gray-700 font-medium italic">Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input flex-1"
              placeholder="e.g. 25"
              required
            />
          </div>

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

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-xl hover:bg-green-700 transition duration-200"
          >
            Calculate BMI and Generate Health Plan
          </button>
        </form>

        {loading && (
          <div className="flex justify-center items-center mt-6">
            <div className="w-10 h-10 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {!loading && bmi && (
          <div className="mt-6 bg-blue-50 p-4 rounded-xl text-center">
            <p className="text-lg font-medium text-blue-800">
              Your BMI: <strong>{bmi}</strong>
            </p>
            <p className="text-sm text-gray-600">
              Category: <span className="font-semibold">{category}</span>
            </p>
          </div>
        )}

        {!loading && plan && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-green-700 mb-2">🧠 AI-Generated Plan</h2>
            <div className="bg-green-50 p-4 rounded-xl whitespace-pre-line text-gray-800">
              {plan}
            </div>

            <h3 className="mt-6 mb-3 text-md font-semibold text-blue-700">💪 Exercise Cards</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Object.keys(exerciseImages).map((exercise) => {
                if (plan.includes(exercise)) {
                  return (
                    <div key={exercise} className="border rounded-xl p-4 bg-white shadow">
                      <img
                        src={exerciseImages[exercise]}
                        alt={exercise}
                        className="w-full h-40 object-cover rounded-lg mb-3"
                      />
                      <h4 className="text-md font-bold text-gray-700">{exercise}</h4>
                    </div>
                  );
                } else return null;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
