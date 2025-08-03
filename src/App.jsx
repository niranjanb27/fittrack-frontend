import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import BMIForm from "./components/BMIForm";
import Loader from "./components/Loader";
import BMIResult from "./components/BMIResult";
import TabbedHealthPlan from "./components/HealthPlan";
import FoodCards from "./components/FoodCards";
import ExerciseCards from "./components/ExerciseCards";

const exerciseImages = {
  "Push-ups": "./images/exercise/pushup.jpg",
  Plank: "./images/exercise/plank.jpg",
  Squats: "./images/exercise/squat.jpg",
  "Jumping Jacks": "./images/exercise/jumping-jacks.jpg",
  Lunges: "./images/exercise/lunges.jpg",
  "Sit-ups": "./images/exercise/situps.jpg",
  jog: "./images/exercise/jogging.jpg",
  yoga: "./images/exercise/yoga.jpg",
  swim: "./images/exercise/swim.jpg",
  "cycling" : "./images/exercise/cycling.jpg",
  "Bench Press": "./images/exercise/benchpress.jpg",
  "Shoulder Press":"./images/exercise/shoulderpress.jpg"
};

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [goal, setGoal] = useState("Lose Weight");
  const [food, setFood] = useState("Veg");
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
          food,
        }
      );

      const planText = planResponse.data.plan;
      console.log("Generated Plan:\n", planText);
      setPlan(planText);
    } catch (err) {
      console.error("Error:", err);
      setPlan("❌ Error generating plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-gray-300  flex items-center justify-center overflow-y-auto">
      <div className="w-full p-10 ">
        {/* 🔷 1. Hero Header */}
        <Header />
        <p className="text-center mb-6 text-gray-700 text-lg italic">
          Your AI-powered personal health assistant
        </p>

        {/* 🔷 2. Form Inputs */}
        <BMIForm
          height={height}
          weight={weight}
          age={age}
          gender={gender}
          goal={goal}
          food={food}
          setHeight={setHeight}
          setWeight={setWeight}
          setAge={setAge}
          setGender={setGender}
          setGoal={setGoal}
          setFood={setFood}
          handleSubmit={handleSubmit}
        />

        {/* 🔷 3. Loading + BMI Result */}
        {loading && <Loader />}
        {!loading && bmi && (
          <div className="mt-6">
            <BMIResult bmi={bmi} category={category} />
          </div>
        )}

        {/* 🔷 4. Health Plan Tabs + Cards */}
        {!loading && plan && (
          <>
          <FoodCards plan={plan} />
            <ExerciseCards plan={plan} exerciseImages={exerciseImages} />
            <TabbedHealthPlan plan={plan} />
            
          </>
        )}
      </div>
    </div>
  );
}

export default App;
