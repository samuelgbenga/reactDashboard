import React from "react";
import "./secondBoard.css";
import LinearBar from "./linearBar/LinearBar";
import Barchart from "./barChart/Barchart";
export default function SecondBoard() {
  return (
    <div className="secondBoardContainer">
      <div className="secondBoardWrapper">
        <div className="second-firstColumn">
          <LinearBar />
        </div>
        <div className="second-secondColumn">
          <Barchart />
        </div>
      </div>
    </div>
  );
}
