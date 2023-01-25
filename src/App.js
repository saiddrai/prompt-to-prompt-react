import axios from "axios";
import { useEffect, useState } from "react";
import Input from "./components/Input";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Output from "./components/Output";

function App() {
  return (
    <div className="">
      <div className="bg-backg h-full w-screen bg-cover flex flex-col items-center ">
        <Navbar />
        <h1 className="text-6xl text-center mt-10 mb-80  text-primary font-bold w-4/6">
          Help AI with your artistic touch to come out with the best images !{" "}
        </h1>
        <input
          type="text"
          className="  outline-none opacity-50 rounded-2xl h-16 bg-secondary border-b-2 border-primary w-1/2 text-2xl   text-center text-white"
          placeholder="Enter your text here"
        />
      </div>{" "}
    </div>
  );
}

export default App;
