import React, { useState } from "react";
import Header from "./components/Header";
import BMIForm from "./components/BMIForm";
import BMIResult from "./components/BMIResult";
import DownloadPDF from "./components/DownloadPDF";
import FoodCards from "./components/FoodCards";
import ExerciseCards from "./components/ExerciseCards";
import { calculateBMICategory, generatePlan, calculateWeightChange } from "./utils/planGenerator";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [plan, setPlan] = useState(null);
  const [weightChange, setWeightChange] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!height || !weight) return alert("Enter height & weight");

    const heightM = height / 100;
    const bmiValue = parseFloat((weight / (heightM * heightM)).toFixed(1));
    setBmi(bmiValue);

    const cat = calculateBMICategory(bmiValue);
    setCategory(cat);

    const generatedPlan = generatePlan(bmiValue);
    setPlan(generatedPlan);

    const change = calculateWeightChange(bmiValue, weight, height);
    setWeightChange(change);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center overflow-y-auto">
      <div className="w-full p-10">
        <Header />
        <p className="text-center mb-6 text-gray-700 text-lg italic">
          Your Personal Health Assistant (Static with Hover Tips + Chart)
        </p>

        <BMIForm
          height={height}
          weight={weight}
          setHeight={setHeight}
          setWeight={setWeight}
          handleSubmit={handleSubmit}
        />

        {bmi && (
          <div className="text-center mt-4">
            <BMIResult bmi={bmi} category={category} />
            {weightChange && (
              <div className="mt-4 text-center">
                {weightChange.type === "gain" ? (
                  <p className="text-blue-700 font-semibold">
                    👉 You need to gain <b>{weightChange.amount} kg</b> to reach Normal BMI.
                  </p>
                ) : (
                  <p className="text-red-700 font-semibold">
                    👉 You need to lose <b>{weightChange.amount} kg</b> to reach Normal BMI.
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {plan && (
          <>
            <h2 className="mt-6 text-xl font-bold">Diet Plan</h2>
            <FoodCards plan={plan} />

            <h2 className="mt-6 text-xl font-bold">Exercise Plan</h2>
            <ExerciseCards plan={plan} />

            <DownloadPDF
              bmi={bmi}
              category={category}
              weightChange={weightChange}
              plan={plan}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
