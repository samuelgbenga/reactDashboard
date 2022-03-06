import React from "react";
import "./thirdBoard.css";
import Rightcolumn from "./rightColumn/Rightcolumn";
import LeftColumn from "./leftColumn/LeftColumn";

export default function ThirdBoard() {
  return (
    <div className="thirdBoardContainer">
      <div className="thirdBoardWrapper">
        <div className="third-firstColumn">
          <Rightcolumn />
        </div>
        <div className="third-secondColumn">
          <LeftColumn />
        </div>
      </div>
    </div>
  );
}
