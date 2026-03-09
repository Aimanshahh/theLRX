import axios from "axios";

// Base URL of your backend
const BASE_URL = "https://backend.thelrx.com/api";

// Get auth token from localStorage
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Subscribe email to the guide
export const subscribeGuide = async (email) => {
  try {
    const response = await axios.post(`${BASE_URL}/guides/subscribe`, { email });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong, please try again.");
    }
  }
};

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong, please try again.");
    }
  }
};

// Login an existing user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong, please try again.");
    }
  }
};

// Get user profile
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/auth/profile`, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed to fetch profile.");
    }
  }
};

// Update user profile
export const updateProfile = async (profileData) => {
  try {
    const response = await axios.put(`${BASE_URL}/auth/profile`, profileData, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed to update profile.");
    }
  }
};

// Change password
export const changePassword = async (passwordData) => {
  try {
    const response = await axios.put(`${BASE_URL}/auth/password`, passwordData, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed to change password.");
    }
  }
};

// ── Chatbot ──────────────────────────────────────────

// Send a message and get bot reply
// export const sendChatMessage = async (message, sessionId) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/chat/message`, { message, sessionId });
//     return response.data.data.reply;
//   } catch (error) {
//     if (error.response && error.response.data) {
//       throw new Error(error.response.data.message);
//     } else {
//       throw new Error("Failed to send message.");
//     }
//   }
// };

// Fetch conversation history for a session
// export const fetchChatHistory = async (sessionId) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/chat/history/${sessionId}`);
//     return response.data.data.messages || [];
//   } catch (error) {
//     if (error.response && error.response.data) {
//       throw new Error(error.response.data.message);
//     } else {
//       throw new Error("Failed to fetch chat history.");
//     }
//   }
// };

// Clear conversation history for a session
// export const clearChatHistory = async (sessionId) => {
//   try {
//     await axios.delete(`${BASE_URL}/chat/history/${sessionId}`);
//   } catch (error) {
//     if (error.response && error.response.data) {
//       throw new Error(error.response.data.message);
//     } else {
//       throw new Error("Failed to clear chat history.");
//     }
//   }
// };