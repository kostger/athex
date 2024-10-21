// src/components/StockInfo.jsx
import React from "react";
import { useState } from "react";
const StockInfo = ({ stockData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  if (!stockData) {
    return <div>Loading...</div>;
  }
  const filteredStocks = stockData.data.filter(
    (stock) =>
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1>Stock Search</h1>
      <input
        type="text"
        placeholder="Search for a stock..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredStocks.map((stock, index) => (
          <li key={index}>
            {stock.symbol} - {stock.name} ({stock.exchange})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockInfo;
