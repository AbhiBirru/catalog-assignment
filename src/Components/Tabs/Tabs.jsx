import { useState } from "react";
import "./Tabs.css";
import Summary from "../Summary/Summary";
import Chart from "../Chart/Chart";
import Statistics from "../Statistics/Statistics";
import Analysis from "../Analysis/Analysis";
import Setting from "../Settings.jsx/Setting";

const Tabs = ({ data, handler, priceData }) => {
  const [activeTab, setActiveTab] = useState("Chart");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Summary":
        return <Summary />;
      case "Chart":
        return <Chart data={data} handler={handler} priceData={priceData} />;
      case "Statistics":
        return <Statistics />;
      case "Analysis":
        return <Analysis />;
      case "Settings":
        return <Setting />;
      default:
        return null;
    }
  };

  return (
    <div className="tab-main">
      <div className="tab-list">
        {["Summary", "Chart", "Statistics", "Analysis", "Settings"].map(
          (tab) => (
            <p
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={activeTab === tab ? "tab-active " : ""}
              style={activeTab === tab ? { color: "#1A243A" } : {}}
            >
              {tab}
            </p>
          )
        )}
      </div>
      <div className="border-line"></div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
