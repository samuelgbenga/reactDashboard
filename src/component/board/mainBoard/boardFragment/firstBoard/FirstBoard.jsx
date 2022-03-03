import React from "react";
import "./firstBoard.css";
import SecondColumn from "./secondColumn/SecondColumn";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    uv: 10,
    us: 9,
  },
  {
    name: "Tue",
    uv: 4,
    us: 3,
  },
  {
    name: "Wed",
    uv: 20,
    us: 19,
  },
  {
    name: "Thur",
    uv: 10,
    us: 9,
  },
  {
    name: "Fri",
    uv: 18,
    us: 17,
  },
  {
    name: "Sat",
    uv: 7,
    us: 6,
  },
  {
    name: "Sun",
    uv: 15,
    us: 14,
  },
  {
    name: "Mon",
    uv: 5,
    us: 4,
  },
];
export default function FirstBoard() {
  return (
    <div className="firstBoard">
      <div className="firstBoardWrapper">
        <div className="firstColumn">
          <div className="weeks">
            <div className="currentWeek">
              <h5>Current week</h5>
              <span>$ 12 300</span>
            </div>
            <div className="previousWeek">
              <h5>Previous week</h5>
              <span>$ 10 150</span>
            </div>
          </div>
          <ResponsiveContainer width="95%" height="85%">
            <LineChart
              data={data}
              margin={{ top: 30, right: 20, left: 10, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 1" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis dataKey="uv" stroke="#ccc" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#2a76da"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="us"
                stroke="#EFF1F0"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <SecondColumn />
      </div>
    </div>
  );
}
