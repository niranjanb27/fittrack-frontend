
import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import BMIForm from "./components/BMIForm";
import Loader from "./components/Loader";
import BMIResult from "./components/BMIResult";
import HealthPlan from "./components/HealthPlan";
import ExerciseCards from "./components/ExerciseCards";

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
      const bmiResponse = await axios.post("https://fittrack-backend-ftz6.onrender.com/api/bmi", {
        height,
        weight,
      });
      const calculatedBmi = parseFloat(bmiResponse.data.bmi);
      setBmi(calculatedBmi);
      setCategory(calculateBMICategory(calculatedBmi));

      const planResponse = await axios.post("https://fittrack-backend-ftz6.onrender.com/api/plan", {
        bmi: calculatedBmi,
        age,
        gender,
        goal,
      });

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
        <Header />
        <p className="text-center mb-4 text-gray-600">
          Get your BMI and an AI-generated health plan
        </p>

        <BMIForm
          height={height}
          weight={weight}
          age={age}
          gender={gender}
          goal={goal}
          setHeight={setHeight}
          setWeight={setWeight}
          setAge={setAge}
          setGender={setGender}
          setGoal={setGoal}
          handleSubmit={handleSubmit}
        />

        {loading && <Loader />}
        {!loading && bmi && <BMIResult bmi={bmi} category={category} />}
        {!loading && plan && (
          <>
            <HealthPlan plan={plan} />
            <ExerciseCards plan={plan} exerciseImages={exerciseImages} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
