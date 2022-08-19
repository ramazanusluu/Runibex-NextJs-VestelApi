import React from "react";
import style from "../styles/Sidebar.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

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
        {data.Result.TreeList.map((item, key) => (
          <ul key={key}>
            {item.ID < 11 && (
              <li>
                <Link href={`/category/${item.ID}`}>
                  <a>
                    <button className="btn btn-danger category">
                      {item.DisplayName}
                    </button>
                  </a>
                </Link>
                {item.SubCategoryList.map((item2, key2) => (
                  <ul key={key2}>
                    <li>
                      <Link href={`products/${item2.ID}`}>
                        <button className="btn btn-danger subCategory">
                          {item2.DisplayName}
                        </button>
                      </Link>
                    </li>
                  </ul>
                ))}
              </li>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
