import React from "react";

function Navbar() {
  return (
    <div className="flex justify-end pr-10 px-4 w-screen">
      <button className="bg-transparent px-4 py-2 m-2 text-white text-lg ">
        <a href="http://localhost:3000/">docs</a>
      </button>
      <button className="bg-transparent px-4 py-2 m-2 text-white text-lg ">
        <a href="http://localhost:3000/input">Github</a>
      </button>
      <button className="bg-transparent px-4 py-2 m-2 text-white text-lg ">
        <a href="http://localhost:3000/output">examples</a>
      </button>
    </div>
  );
}

export default Navbar;
