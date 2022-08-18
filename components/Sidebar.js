import React from "react";
import style from "../styles/Sidebar.module.css";

function Sidebar() {
  return (
    <div className="container">
      <div className={style.sidebar}>
        <ul>
          <li>React</li>
          <ul>
            <li>Next</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
