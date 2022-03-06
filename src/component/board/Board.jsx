import React from "react";
import "./board.css";
import Title from "../title/Title";
import MainBoard from "./mainBoard/MainBoard";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";

export default function Board({ parentCallback }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(true);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="board">
      <div className="topBar">
        {width <= 600 ? setToggle(true) : setToggle(false)}
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
