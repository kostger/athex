import axios from "axios";

const API_BASE_URL = "https://api.twelvedata.com";
const API_KEY = "e66d30f69d04446f860713324751732e";

export const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stocks`, {
      params: {
        country: "Greece",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
};
