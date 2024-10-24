import React from "react";
import "./Summary.css";

const Summary = () => {
  return (
    <div className="summary-container">
      <h2 className="summary-title">
        Project Summary: <span>Cryptocurrency Price Tracker</span>
      </h2>
      <p className="summary-description">
        As part of my interview task, I developed a Cryptocurrency Price Tracker
        application using React for the frontend and integrated it with the
        Polygon.io API to fetch real-time cryptocurrency data. The application
        visualizes the price trends of Bitcoin (BTC) through an area graph, bar
        graph, enabling users to analyze historical data over various timeframes
        (e.g., 1 day, 1 week, 1 month).
      </p>
      <h3 className="summary-subtitle">Key Features:</h3>
      <ul className="summary-features">
        <li>
          <strong>Real-Time Data Fetching:</strong> Utilized Axios to make API
          calls to retrieve cryptocurrency price data, handling potential API
          rate limits gracefully.
        </li>
        <li>
          <strong>Data Visualization:</strong> Implemented charts using
          Recharts, displaying closing, opening, high, and low prices with
          dynamic tooltips for enhanced user interaction.
        </li>
        <li>
          <strong>User Interface:</strong> Developed a clean and intuitive UI
          with tabs for selecting timeframes and displaying the current price
          prominently on the graph.
        </li>
      </ul>
      <p className="summary-conclusion">
        This project not only strengthened my skills in React and data
        visualization but also demonstrated my ability to integrate APIs and
        handle real-time data effectively.
      </p>
    </div>
  );
};

export default Summary;
