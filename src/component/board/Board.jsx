import React from "react";
import "./board.css";
import Title from "../title/Title";
import MainBoard from "./mainBoard/MainBoard";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Board({ parentCallback }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="board">
      <div className="topBar">
        <Title />
        <div
          className="toggleBar"
          onClick={() => {
            toggle ? setToggle(false) : setToggle(true);
            parentCallback(toggle);
          }}
        >
          {toggle ? <DensityMediumIcon /> : <CloseIcon />}
        </div>
      </div>

      <MainBoard />
    </div>
  );
}
