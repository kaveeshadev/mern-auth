import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="text-center">
        <div className="spinner-border animate-spin w-12 h-12 border-4 border-white border-t-transparent rounded-full mb-4"></div>
        <p className="text-white text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
