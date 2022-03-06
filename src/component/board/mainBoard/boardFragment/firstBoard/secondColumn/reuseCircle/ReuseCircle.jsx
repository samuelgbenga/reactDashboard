import React from "react";
import "./reuseCircle.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ReuseCircle() {
  const percentage = 66;

  return (
    <div className="reuseCircleContainer" style={{ width: 85, padding: 5 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={5}
        styles={buildStyles({
          strokeLinecap: "butt",
        })}
      />
    </div>
  );
}
