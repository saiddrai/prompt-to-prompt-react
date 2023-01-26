import axios from "axios";
import { useEffect, useState } from "react";
import Input from "./components/Input";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Output from "./components/Output";
import fetchApi from "./fetchApi";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async (input) => {
    setLoading(true);
    const imageData = await fetchApi(input);
    setImageUrl(imageData.url);
    setLoading(false);
  };
  return (
    <div className="">
      <div className="bg-backg  w-screen bg-cover flex flex-col pb-10 items-center ">
        <Navbar />
        <h1 className="text-6xl text-center mt-10 mb-80  text-primary font-bold w-4/6">
          Help AI with your artistic touch to come out with the best images !{" "}
        </h1>

        <Input onSubmit={generateImage} />
        {loading && <Loading />}
      </div>{" "}
    </div>
  );
}

export default App;