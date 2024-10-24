import React from "react";
import TimeFrame from "../TimeFrame/TimeFrame";
import Graph from "../Graph/Graph";

const Chart = ({ data, handler, priceData }) => {
  return (
    <div>
      <TimeFrame data={data} handler={handler} />
      <Graph priceData={priceData} />
    </div>
  );
};

export default Chart;
