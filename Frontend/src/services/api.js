// services/api.js
import axios from "axios";

// Base URL of your backend
const BASE_URL = "http://localhost:5000/api"; // change this to your deployed backend later

// Subscribe email to the guide
export const subscribeGuide = async (email) => {
  try {
    const response = await axios.post(`${BASE_URL}/guides/subscribe`, { email });
    return response.data;
  } catch (error) {
    // Return error message
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong, please try again.");
    }
  }
};
