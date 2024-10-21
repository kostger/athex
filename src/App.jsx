// src/App.jsx
import React, { useState, useEffect } from "react";
import { fetchStockData } from "./api/twelveData";
import StockInfo from "./components/StockInfo";
import "./App.css";

function App() {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStockData = async () => {
      try {
        setLoading(true);
        const data = await fetchStockData("AAPL");
        setStockData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getStockData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>Stock Information</h1>
      <StockInfo stockData={stockData} />
    </div>
  );
}

export default App;
