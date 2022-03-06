import React from "react";
import "./secondColumn.css";
import ResuseChart from "./resuseChart/ResuseChart";
import ReuseCircle from "./reuseCircle/ReuseCircle";

const data1 = [
  {
    name: "Mon",
    uv: 17,
    us: 17,
  },
  {
    name: "Tue",
    uv: 3,
    us: 3,
  },
  {
    name: "Wed",
    uv: 20,
    us: 20,
  },
  {
    name: "Thur",
    uv: 15,
    us: 15,
  },
  {
    name: "Fri",
    uv: 18,
    us: 18,
  },
  {
    name: "Sat",
    uv: 6,
    us: 6,
  },
  {
    name: "Sun",
    uv: 1,
    us: 1,
  },
  {
    name: "Mon",
    us: 4,
  },
];

const data2 = [
  {
    name: "Mon",
    uv: 10,
    us: 10,
  },
  {
    name: "Tue",
    uv: 4,
    us: 4,
  },
  {
    name: "Wed",
    uv: 20,
    us: 20,
  },
  {
    name: "Thur",
    uv: 10,
    us: 10,
  },
  {
    name: "Fri",
    uv: 18,
    us: 18,
  },
  {
    name: "Sat",
    uv: 7,
    us: 7,
  },
  {
    name: "Sun",
    uv: 5,
    us: 5,
  },
  {
    name: "Mon",
    us: 7,
  },
];

export default function SecondColumn() {
  return (
    <div className="secondColumn">
      <div className="secondColumnWrapper">
        <div className="box1">
          <div className="box1Title">Cash out</div>
          <div className="box1Resusechart">
            <ResuseChart data={data1} />
          </div>
          <div className="box1Price">$2,340</div>
        </div>
        <div className="box2">
          <div className="box2Title">Cash out</div>
          <div className="box2Resusechart">
            <ResuseChart data={data2} />
          </div>
          <div className="box2Price">$1,300</div>
        </div>
        <div className="box3">
          <span>Overview</span>
          <div className="box3Wrapper">
            <ReuseCircle />
          </div>
        </div>
        <div className="box4">
          <span>Overview</span>

          <div className="box4Wrapper">
            <ReuseCircle />
          </div>
        </div>
      </div>
    </div>
  );
}
