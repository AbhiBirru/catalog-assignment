import "./TimeFrame.css";

const timelines = [
  { key: "1d", label: "1 Day" },
  { key: "3d", label: "3 Days" },
  { key: "1w", label: "1 Week" },
  { key: "1m", label: "1 Month" },
  { key: "6m", label: "6 Months" },
  { key: "1y", label: "1 Year" },
  { key: "max", label: "Max" },
];

const TimeFrame = ({ data, handler }) => {
  return (
    <div className="tools-main">
      <div>
        <div className="fullscreen">
          <img src="fullicon.svg" alt="" />
          <a href="/">Fullscreen</a>
        </div>
        <div className="compare">
          <img src="compare.svg" alt="" />
          <a href="/">Compare</a>
        </div>
      </div>
      <div className="time-line">
        {timelines.map((timeline) => (
          <span
            onClick={() => handler(timeline.key)}
            className={timeline.key === data ? "active-time" : ""}
            style={timeline.key === data ? { color: "#fff" } : {}}
            key={timeline.key}
          >
            {timeline.key}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TimeFrame;
