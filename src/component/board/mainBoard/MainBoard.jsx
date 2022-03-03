import React from "react";
import "./mainboard.css";

import FirstBoard from "./boardFragment/firstBoard/FirstBoard";
import SecondBoard from "./boardFragment/secondBoard/SecondBoard";
import ThirdBoard from "./boardFragment/thirdBoard/ThirdBoard";

export default function MainBoard() {
  return (
    <div className="mainContainer">
      <div className="mainWrapper">
        <FirstBoard />
        <SecondBoard />
        <ThirdBoard />
      </div>
    </div>
  );
}
