import React from "react";
import style from "../styles/Loading.module.css";

function Loading() {
  return (
    <div className="container">
      <div className={style.loading}>
        <div className={style.loader}></div>
      </div>
    </div>
  );
}

export default Loading;
