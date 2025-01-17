import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader"; // Import the Loader component

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false); // State for full-page loading
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsLoading(true); // Show loader
    setTimeout(() => {
      navigate("/login"); // Navigate to login after a simulated delay
      setIsLoading(false); // Reset loading state (optional)
    }, 1000); // Simulate a delay for loading
  };

  return (
    <>
      {isLoading && <Loader />} {/* Render Loader if loading */}
      <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
        <img src={assets.logo} alt="" className="w-28 sm:w-32" />
        <button
          onClick={handleLoginClick}
          className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all"
          disabled={isLoading} // Disable button when loading
        >
          Login <img src={assets.arrow_icon} alt="" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
