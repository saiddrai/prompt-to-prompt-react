import axios from "axios";
import { useEffect, useState } from "react";
import ImageResult from "./components/ImageResult";
import Input from "./components/Input";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import fetchApi from "./fetchApi";

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingEdited, setLoadingEdited] = useState(false);
  const [imageArrived, setImageArrived] = useState(false);
  const [editedArrived, setEditedArrived] = useState(false);
  const [editedUrl, setEditedUrl] = useState(null);
  const [original_prompt, setOriginal_prompt] = useState(null);

  const generateImage = async (input, edit, original_prompt) => {
    console.log("loading");
    if (edit) {
      setOriginal_prompt(original_prompt);
    } else {
      setOriginal_prompt(input);
    }
    const imageData = await fetchApi(input, edit, original_prompt);
    if (edit) {
      setLoadingEdited(true);
      setEditedUrl(imageData.with_prompt_to_prompt);
      console.log(imageData.with_prompt_to_prompt);
      setLoadingEdited(false);
      setEditedArrived(true);
    } else {
      setLoading(true);

      setImageUrl(imageData.original_sd);
      console.log(imageData.original_sd);
      setLoading(false);
      setImageArrived(true);
    }
  };
  return (
    <div className="">
      <div className="bg-backg bg-cover bg-center bg-fixed  overflow-x-hidden flex flex-col pb-10 items-center ">
        <Navbar />
        <h1 className="text-7xl text-center mt-32 mb-80  text-white font-bold w-4/6">
          NEXT LEVEL OF IMAGINATION WITH AI{" "}
        </h1>

        <Input onSubmit={generateImage} />
        {loading && <Loading />}
        {imageArrived && <ImageResult imageUrl={imageUrl} />}
        <h1 className="text-2xl text-white font-semibold mt-10 mb-4">
          Edit your prompt here
        </h1>
        <Input
          className=""
          onSubmit={generateImage}
          edit={true}
          original_prompt={original_prompt}
        />
        {loadingEdited && <Loading />}
        {editedArrived && <ImageResult imageUrl={editedUrl} />}
      </div>{" "}
    </div>
  );
}

export default App;
