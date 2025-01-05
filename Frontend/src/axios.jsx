import axios from "axios";

axios.defaults.baseURL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;

const getProtectedData = async () => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    console.error("Token is missing!");
    return;
  }

  try {
    const response = await axios.get("/protected-data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Protected Data:", response.data);
  } catch (error) {
    console.error("Error verifying token:", error.response ? error.response.data : error.message);
  }
};

getProtectedData();
