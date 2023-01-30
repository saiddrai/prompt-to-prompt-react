import axios from "axios";

const fetchApi = async (input) => {
  try {
    console.log("loading");
    const response = await axios.get("http://127.0.0.1:5000/original", {
      params: {
        original_prompt: input,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("loaded");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occured while fetching the image from the API");
  }
};

export default fetchApi;
