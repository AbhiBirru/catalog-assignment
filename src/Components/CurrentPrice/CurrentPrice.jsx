import React from "react";
import "./CurrentPrice.css";

const CurrentPrice = ({ data }) => {
  if (!data || !data.results || data.results.length < 2) {
    return <div className="current-main">Loading...</div>;
  }

  const latestClose = data.results[0].c;
  const earliestOpen = data.results[data.results.length - 1].o;

  const profitLoss = latestClose - earliestOpen;
  const percentageChange = earliestOpen
    ? ((profitLoss / earliestOpen) * 100).toFixed(2)
    : 0;

  const profitLossText =
    profitLoss >= 0 ? `+${profitLoss.toFixed(2)}` : profitLoss.toFixed(2);
  const percentageChangeText =
    profitLoss >= 0 ? `(+${percentageChange}%)` : `(${percentageChange}%)`;

  const profitLossStyle = { color: profitLoss >= 0 ? "green" : "red" };

  const formattedLatestClose = latestClose.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="current-main">
      <div className="current-main--item">
        <div className="price">{formattedLatestClose}</div>
        <div className="currency">USD</div>
      </div>
      <div className="pl" style={profitLossStyle}>
        {profitLossText} {percentageChangeText}
      </div>
    </div>
  );
};

export default CurrentPrice;
