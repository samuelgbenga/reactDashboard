import React from "react";
import "./rightColumn.css";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "00",
    uv: 0,
  },
  {
    name: "01",
    uv: 30,
  },
  {
    name: "02",
    uv: 20,
  },
  {
    name: "03",
    uv: 2,
  },
  {
    name: "04",
    uv: 27,
  },
  {
    name: "05",
    uv: 18,
  },
];
export default function Rightcolumn() {
  return (
    <div className="rightColumnContainer">
      <div className="rightColumnWrapper">
        <ResponsiveContainer width="95%" height="85%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid horizontal vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#ccc" fontSize={10} />

            <Tooltip />
            <Area
              dataKey="uv"
              stroke="#2a76da"
              strokeWidth={3}
              fill="rgba(42, 118, 218, 0.1)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
