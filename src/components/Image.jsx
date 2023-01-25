import React from "react";

function Image({ imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt="Google Logo" />
    </div>
  );
}

export default Image;
