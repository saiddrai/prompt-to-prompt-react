import React from "react";

function ImageResult({ imageUrl }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imageUrl}
        alt="Google Logo"
        className="
      shadow-2xl shadow-primary rounded-3xl my-10 "
      />
      {console.log(imageUrl)}
      <button className="bg-primary text-white text-2xl rounded-2xl h-14 w-32 mb-10 ">
        Download
      </button>
    </div>
  );
}

export default ImageResult;
