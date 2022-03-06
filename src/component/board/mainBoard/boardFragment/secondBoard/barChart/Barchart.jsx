import React from "react";
import "./barChart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 70,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 100,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 308,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 50,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 400,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 30,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 50,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 3490,
    pv: 30,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 30,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 3490,
    pv: 40,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 400,
    amt: 2100,
  },
];

export default function Barchart() {
  return (
    <div className="barChartContainer">
      <div className="barChartWrapper">
        <ResponsiveContainer width="95%" height="95%">
          <BarChart
            width={100}
            height={100}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <YAxis stroke="#ccc" fontSize={10} />
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
              stroke="#ccc"
              fontSize={10}
            />

            <CartesianGrid horizontal vertical={false} strokeDasharray="3 3" />
            <Bar dataKey="pv" fill="#2a76da" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
