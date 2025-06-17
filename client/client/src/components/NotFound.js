import React from "react";
import "./NotFound.css"; // Externalized custom styles

const GridBackground = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white">
        <p className="text-gradient text-5xl sm:text-7xl font-bold py-4">
          Oops! 404 - Page Not Found
        </p>
        <p className="text-xl mb-6">
          Looks like you've discovered a black hole or a page that doesn't exist.
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default GridBackground;
