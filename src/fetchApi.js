import axios from "axios";

const fetchApi = async (input) => {
  try {
    const response = await axios.post("https://localhost:5000/", {
      input,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occured while fetching the image from the API");
  }
};

export default fetchApi;