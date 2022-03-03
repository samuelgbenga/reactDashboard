import React from "react";
import "./sidebar.css";
import {
  Widgets,
  BarChart,
  InfoOutlined,
  ChatBubbleOutlined,
  Home,
  Timeline,
  AirplanemodeActive,
  PowerSettingsNew,
} from "@mui/icons-material";

export default function Sidebar({ toggly }) {
  return (
    <div className={`sidebar ${toggly ? "active" : ""}`}>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            Money Sy<span>stems&nbsp;&nbsp;&nbsp;</span>
          </div>
          <div className="sidebarList">
            <ul>
              <li className="active">
                <Home className="icon" /> Dashboard
              </li>
              <li>
                <Timeline className="icon" /> Activity
              </li>
              <li>
                <Widgets className="icon" />
                Tools
              </li>
              <li>
                <BarChart className="icon" />
                Analytics
              </li>
              <li>
                <InfoOutlined className="icon" />
                Help
              </li>
            </ul>
          </div>
          <div className="sidebarList2">
            <ul>
              <li>
                <ChatBubbleOutlined className="icon" />
                Chart
              </li>
              <li>
                <AirplanemodeActive className="icon" />
                Transport
              </li>
              <li>
                <PowerSettingsNew className="icon" /> Log out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
