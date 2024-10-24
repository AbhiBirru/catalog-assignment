import React from "react";
import "./Analysis.css";

const Analysis = () => {
  return (
    <div className="summary-container">
      <h2 className="summary-title">Development Analysis</h2>
      <ul className="analysis-features">
        <li>
          Initially, I developed a static user interface for each component.
        </li>
        <li>Next, I utilized the Polygon.io API to fetch data.</li>
        <li>
          I passed the price data as a prop to the CurrentPrice component to
          render currentprice.
        </li>
        <li>
          For profit and loss calculations, I determined the percentage change
          using the API response.
        </li>
        <li>
          The profit and loss indicator changes color dynamically from green to
          red based on live data.
        </li>
        <li>Implemented tab navigation using a rendering function.</li>
        <li>
          I created a helper function to enable functionality for timeframes and
          graphs using the timespan and value parameters.
        </li>
        <li>
          Subsequently, I made the timeframe functionality dynamic, allowing it
          to reflect profit and loss based on the selected timeframe.
        </li>
        <li>
          I sought assistance from ChatGPT for implementing graph rendering
          using recharts.
        </li>
      </ul>
    </div>
  );
};

export default Analysis;
