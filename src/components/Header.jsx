import React from "react";
//import "./App.css"; // Custom animations here

const Header = () => (
  <div className="flex flex-wrap items-center justify-center gap-4 px-4 py-6 max-w-full overflow-hidden">
    
    {/* Blue ECG - animates first */}
    <svg
      className="w-32 md:w-48 h-16 md:h-20 text-green-500 ecg-line-blue mt-5"
      viewBox="0 0 100 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
    >
      <polyline
        points="0,25 10,25 15,5 20,45 25,25 40,25 50,15 60,35 70,25 100,25"
      />
    </svg>

    {/* Brand name - appears after delay */}
    <div className="flex items-end space-x-1 brand-animation text-center">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-blue-500 italic">F</h1>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 text-blue-500 italic">IT</h1>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-green-500 italic">T</h1>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 text-green-500 italic">RACK</h1>
    </div>

    {/* Green ECG - animates last */}
    <svg
      className="w-32 md:w-48 h-16 md:h-20 text-blue-500 ecg-line-green mt-5"
      viewBox="0 0 100 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
    >
      <polyline
        points="0,25 10,25 20,10 30,40 40,25 60,25 70,15 80,35 90,25 100,25"
      />
    </svg>
  </div>
);

export default Header;
