import React from "react";

function Image({ imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt="Google Logo" />
      <button className="bg-primary text-white text-2xl rounded-2xl h-14 w-32 mb-10">
        Download
      </button>
    </div>
  );
}

export default Image;