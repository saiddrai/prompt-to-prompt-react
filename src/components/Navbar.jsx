import React from "react";

function Navbar() {
  return (
    <div className="flex justify-end w-screen fixed pr-10 py-4 ">
      <button className="bg-transparent px-4 py-2 m-2 text-white text-lg ">
        <a
          href="https://paperswithcode.com/paper/prompt-to-prompt-image-editing-with-cross"
          target="_blank"
        >
          docs
        </a>
      </button>
      <button className="bg-transparent px-4 py-2 m-2 text-white text-lg ">
        <a href="http://github.com/google/prompt-to-prompt/" target="_blank">
          Github
        </a>
      </button>
      <button className="bg-transparent px-4 py-2 m-2 text-white text-lg ">
        <a
          href="https://replicate.com/cjwbw/prompt-to-prompt/examples"
          target="_blank"
        >
          examples
        </a>
      </button>
    </div>
  );
}

export default Navbar;
