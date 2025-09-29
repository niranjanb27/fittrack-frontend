// utils/planGenerator.js

// Calculate BMI category
export const calculateBMICategory = (bmiValue) => {
  if (bmiValue < 18.5) return "Underweight";
  if (bmiValue < 25) return "Normal";
  if (bmiValue < 30) return "Overweight";
  return "Obese";
};

// Generate diet & exercise plan based on BMI
export const generatePlan = (bmiValue) => {
  const dietAmount = () => {
    if (bmiValue < 18.5) return "2 servings";
    if (bmiValue < 25) return "1-2 servings";
    if (bmiValue < 30) return "1 serving";
    return "0.5 serving";
  };

  const exerciseDuration = () => {
    if (bmiValue < 18.5) return "15 reps";
    if (bmiValue < 25) return "20 reps";
    if (bmiValue < 30) return "25 reps";
    return "10 reps / 15 min";
  };

  if (bmiValue < 18.5) {
    // Underweight: Gain weight
    return {
      diet: [
        { name: "Oats", amount: dietAmount() },
        { name: "Banana", amount: dietAmount() },
        { name: "Chicken", amount: dietAmount() },
        { name: "Nuts", amount: dietAmount() },
        { name: "Milk", amount: dietAmount() },
        { name: "Eggs", amount: dietAmount() },
        { name: "Peanut Butter", amount: dietAmount() },
        { name: "Avocado", amount: dietAmount() },
        { name: "Cheese", amount: dietAmount() },
        { name: "Smoothie", amount: dietAmount() },
      ],
      exercise: [
        { name: "Push-ups", amount: exerciseDuration() },
        { name: "Squats", amount: exerciseDuration() },
        { name: "Plank", amount: exerciseDuration() },
        { name: "Yoga", amount: exerciseDuration() },
        { name: "Jogging", amount: exerciseDuration() },
        { name: "Dumbbell Curls", amount: exerciseDuration() },
        { name: "Bench Press", amount: exerciseDuration() },
        { name: "Lunges", amount: exerciseDuration() },
        { name: "Deadlifts", amount: exerciseDuration() },
        // { name: "Resistance Bands", amount: exerciseDuration() },
      ],
    };
  } else if (bmiValue < 25) {
    // Normal weight: Maintain
    return {
      diet: [
        { name: "Oats", amount: dietAmount() },
        { name: "Salad", amount: dietAmount() },
        { name: "Rice", amount: dietAmount() },
        { name: "Vegetables", amount: dietAmount() },
        { name: "Smoothie", amount: dietAmount() },
        { name: "Eggs", amount: dietAmount() },
        { name: "Fish", amount: dietAmount() },
        { name: "Fruits", amount: dietAmount() },
        { name: "Yogurt", amount: dietAmount() },
        { name: "Nuts & Seeds", amount: dietAmount() },
      ],
      exercise: [
        { name: "Jogging", amount: exerciseDuration() },
        { name: "Cycling", amount: exerciseDuration() },
        { name: "Plank", amount: exerciseDuration() },
        { name: "Yoga", amount: exerciseDuration() },
        { name: "Jumping Jacks", amount: exerciseDuration() },
        { name: "Push-ups", amount: exerciseDuration() },
        { name: "Squats", amount: exerciseDuration() },
        { name: "Swimming", amount: exerciseDuration() },
        { name: "Mountain Climbers", amount: exerciseDuration() },
        { name: "Walking", amount: exerciseDuration() },
      ],
    };
  } else if (bmiValue < 30) {
    // Overweight: Lose weight
    return {
      diet: [
        { name: "Salad", amount: dietAmount() },
        { name: "Tofu", amount: dietAmount() },
        { name: "Vegetables", amount: dietAmount() },
        { name: "Beans", amount: dietAmount() },
        { name: "Smoothie", amount: dietAmount() },
        { name: "Brown Rice", amount: dietAmount() },
        { name: "Chicken", amount: dietAmount() },
        { name: "Fruits", amount: dietAmount() },
        { name: "Green Tea", amount: dietAmount() },
        { name: "Low-fat Yogurt", amount: dietAmount() },
      ],
      exercise: [
        { name: "Cycling", amount: exerciseDuration() },
        { name: "Swimming", amount: exerciseDuration() },
        { name: "Squats", amount: exerciseDuration() },
        { name: "Lunges", amount: exerciseDuration() },
        { name: "Jumping Jacks", amount: exerciseDuration() },
        { name: "Plank", amount: exerciseDuration() },
        { name: "Jogging", amount: exerciseDuration() },
        { name: "Stair Climbing", amount: exerciseDuration() },
        { name: "Burpees", amount: exerciseDuration() },
        // { name: "Resistance Bands", amount: exerciseDuration() },
      ],
    };
  } else {
    // Obese: Weight loss (low impact)
    return {
      diet: [
        { name: "Salad", amount: dietAmount() },
        { name: "Vegetables", amount: dietAmount() },
        { name: "Fats", amount: dietAmount() },
        { name: "Milk", amount: dietAmount() },
        { name: "Nuts", amount: dietAmount() },
        { name: "Tofu", amount: dietAmount() },
        { name: "Beans", amount: dietAmount() },
        { name: "Fruits", amount: dietAmount() },
        { name: "Oats", amount: dietAmount() },
        { name: "Green Tea", amount: dietAmount() },
      ],
      exercise: [
        { name: "Walking", amount: exerciseDuration() },
        { name: "Yoga", amount: exerciseDuration() },
        { name: "Plank", amount: exerciseDuration() },
        { name: "Lunges", amount: exerciseDuration() },
        { name: "Jogging", amount: exerciseDuration() },
        { name: "Swimming", amount: exerciseDuration() },
        { name: "Cycling", amount: exerciseDuration() },
        { name: "Chair Exercises", amount: exerciseDuration() },
        { name: "Light Resistance", amount: exerciseDuration() },
        { name: "Step-ups", amount: exerciseDuration() },
      ],
    };
  }
};

// Calculate weight adjustment to reach Normal BMI
export const calculateWeightChange = (bmiValue, weight, heightCm) => {
  const heightM = heightCm / 100;

  if (bmiValue < 18.5) {
    const minNormalWeight = 18.5 * (heightM * heightM);
    return { type: "gain", amount: (minNormalWeight - weight).toFixed(1) };
  } else if (bmiValue >= 25) {
    const maxNormalWeight = 24.9 * (heightM * heightM);
    return { type: "lose", amount: (weight - maxNormalWeight).toFixed(1) };
  } else {
    return null;
  }
};
