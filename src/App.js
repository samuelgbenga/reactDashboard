import Sidebar from "./component/sidebar/Sidebar";
import Board from "./component/board/Board";
import "./app.css";
import { useState } from "react";

function App() {
  const [sToggle, setsToggle] = useState(false);

  const callback = (cToggle) => {
    setsToggle(cToggle);
  };

  return (
    <div className="container">
      <Sidebar className="sidebarMain" toggly={sToggle} />
      <Board parentCallback={callback} />
    </div>
  );
}

export default App;
