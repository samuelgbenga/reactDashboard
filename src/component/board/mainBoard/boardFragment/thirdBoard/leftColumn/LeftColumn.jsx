import React from "react";
import "./leftColumn.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 0,
  },
  {
    name: "Feb",
    uv: 30,
  },
  {
    name: "Mar",
    uv: 20,
  },
  {
    name: "Apr",
    uv: 2,
  },
  {
    name: "May",
    uv: 27,
  },
  {
    name: "Jun",
    uv: 18,
  },
  {
    name: "Jul",
    uv: 0,
  },
  {
    name: "Aug",
    uv: 10,
  },
  {
    name: "Sep",
    uv: 15,
  },
  {
    name: "Oct",
    uv: 10,
  },
  {
    name: "Nov",
    uv: 27,
  },
  {
    name: "Dec",
    uv: 20,
  },
];
export default function LeftColumn() {
  return (
    <div className="leftColumnContainer">
      <div className="leftColumnWrapper">
        <ResponsiveContainer width="95%" height="85%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: -40,
              bottom: 0,
            }}
          >
            <CartesianGrid horizontal={false} vertical={false} />
            <XAxis dataKey="name" stroke="#ccc" fontSize={10} />
            <YAxis dataKey="uv" stroke="#ccc" fontSize={10} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="none"
              strokeWidth={3}
              fill="#057FCB"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
