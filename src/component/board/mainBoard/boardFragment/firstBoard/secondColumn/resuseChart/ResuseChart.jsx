import React from "react";
import "./reuseChart.css";
import { LineChart, Line } from "recharts";

export default function ResuseChart({ data }) {
  const renderLineChart = (
    <LineChart width={200} height={50} data={data}>
      <Line
        type="monotone"
        dataKey="us"
        stroke="#ccc"
        dot={false}
        strokeWidth={3}
      />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        dot={false}
        strokeWidth={3}
      />
    </LineChart>
  );
  return <div className="reuseChart">{renderLineChart}</div>;
}
