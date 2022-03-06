import React from "react";
import "./reuseChart.css";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function ResuseChart({ data }) {
  const renderLineChart = (
    <ResponsiveContainer width="95%" height="85%">
      <LineChart
        data={data}
        margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
      >
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
    </ResponsiveContainer>
  );
  return <div className="reuseChart">{renderLineChart}</div>;
}
