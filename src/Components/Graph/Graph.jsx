import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
  CartesianGrid,
  ComposedChart,
  BarChart,
  ReferenceLine,
  Label,
} from "recharts";
import "./Graph.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(payload[0].value);

    return (
      <div className="custom-tooltip">
        <p>{formattedPrice}</p>
      </div>
    );
  }

  return null;
};

const Graph = ({ priceData }) => {
  console.log(priceData);
  const [tooltipData, setTooltipData] = useState(null);

  return (
    <div className="graph-main">
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={priceData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            onMouseMove={(e) => {
              if (e && e.activePayload && e.activePayload.length) {
                setTooltipData({
                  x: e.activeCoordinate.x,
                  y: e.activeCoordinate.y,
                  value: e.activePayload[0].value,
                  date: e.activeLabel,
                });
              } else {
                setTooltipData(null);
              }
            }}
            onMouseLeave={() => setTooltipData(null)}
            style={{
              borderLeft: "2px solid #E2E4E7",
              borderRight: "2px solid #E2E4E7",
              borderBottom: "2px solid #E2E4E7",
              borderTop: "none",
            }}
          >
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E8E7FF" stopOpacity={1} />
                <stop
                  offset="100%"
                  stopColor="rgba(255, 255, 255, 0)"
                  stopOpacity={1}
                />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#E2E4E7" horizontal={false} />

            <XAxis dataKey="date" hide={true} />
            <YAxis hide={true} />
            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="closingPrice"
              stroke="#4B40EE"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPrice)"
            />

            {tooltipData && (
              <>
                <ReferenceLine
                  x={tooltipData.date}
                  stroke="#999999"
                  strokeWidth={1}
                  strokeDasharray="3 3"
                />

                <ReferenceLine
                  y={tooltipData.value}
                  stroke="#999999"
                  strokeDasharray="3 3"
                />

                <ReferenceLine y={tooltipData.value} stroke="transparent">
                  <Label
                    value={`$${tooltipData.value.toFixed(2)}`}
                    position="right"
                    fill="#fff"
                    background={{ fill: "white" }}
                    style={{ padding: "5px", borderRadius: "5px" }}
                  />
                </ReferenceLine>
              </>
            )}
          </ComposedChart>
        </ResponsiveContainer>

        <div className="bar-chart-container">
          <ResponsiveContainer width="100%" height={50}>
            <BarChart
              data={priceData}
              barSize={30}
              barGap={20}
              barCategoryGap="50%"
            >
              <XAxis dataKey="date" hide />
              <YAxis hide />
              <Bar dataKey="closingPrice" fill="#e0e0e0" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Graph;
