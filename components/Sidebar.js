import React from "react";
import style from "../styles/Sidebar.module.css";
import { useState, useEffect } from "react";

function Sidebar() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://store.vrunibex.com/mobile2/mbProduct/CategoryList")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  console.log(data);

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
