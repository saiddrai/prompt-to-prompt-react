import React from "react";

function ImageResult({ imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt="Google Logo" />
      {console.log(imageUrl)}
      <button className="bg-primary text-white text-2xl rounded-2xl h-14 w-32 mb-10">
        Download
      </button>
    </div>
  );
}

export default ImageResult;
