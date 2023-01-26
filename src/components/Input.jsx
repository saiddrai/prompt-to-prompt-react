import React, { useState } from "react";

function Input({ onSubmit }) {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };
  return (
    <div className="flex flex-col items-center space-y-4 ">
      {/* <input
        type="text"
        className="  outline-none opacity-90 placeholder-white placeholder-opacity-60 rounded-2xl h-16 bg-secondary border-b-2 border-primary w-96 text-2xl   text-center text-white"
        placeholder="ex: A cat riding a bike"
      />
      <button
        className="bg-primary text-white text-2xl rounded-2xl h-14 w-32 mb-10"
        onClick={() => setText(txt)}
      >
        Generate
      </button> */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center space-y-4 ">
          <input
            className="outline-none opacity-90 placeholder-white placeholder-opacity-60 rounded-2xl h-16 bg-secondary border-b-2 border-primary w-96 text-2xl   text-center text-white"
            type="text"
            placeholder="ex: A cat riding a bike"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-primary text-white text-2xl rounded-2xl h-14 w-32 mb-10"
            type="submit"
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;