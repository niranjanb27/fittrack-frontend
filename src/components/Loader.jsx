import React from "react";
// import "./App.css"; // Make sure this includes the keyframes below

const Loader = () => (
  <div className="flex justify-center items-center mt-6">
    <svg
      className="w-40 h-16 text-green-700 ecg-loader"
      viewBox="0 0 100 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <polyline
        points="0,25 10,25 15,5 20,45 25,25 40,25 50,15 60,35 70,25 100,25"
      />
    </svg>
  </div>
);

export default Loader;
