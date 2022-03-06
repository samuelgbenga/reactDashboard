import React from "react";
import "./linearBar.css";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
export default function LinearBar() {
  return (
    <div>
      <div className="linearBarWrapper">
        <div className="linearBarRow">
          <div className="linerBarHeading">
            <span>Mail</span>
            <span>200</span>
          </div>
          <BorderLinearProgress variant="determinate" value={50} />
        </div>
        <div className="linearBarRow">
          <div className="linerBarHeading">
            <span>Income</span>
            <span>345</span>
          </div>
          <BorderLinearProgress variant="determinate" value={70} />
        </div>
        <div className="linearBarRow">
          <div className="linerBarHeading">
            <span>Answer</span>
            <span>121</span>
          </div>
          <BorderLinearProgress variant="determinate" value={20} />
        </div>
        <div className="linearBarRow">
          <div className="linerBarHeading">
            <span>Review</span>
            <span>80%</span>
          </div>
          <BorderLinearProgress variant="determinate" value={80} />
        </div>
      </div>
    </div>
  );
}
