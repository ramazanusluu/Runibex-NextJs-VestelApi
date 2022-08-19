import React from "react";
import style from "../styles/Sidebar.module.css";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useRouter } from "next/router";

function Sidebar() {
  const router = useRouter();
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

  if (isLoading) return <Loading />;
  if (!data) return <p>No profile data</p>;

  console.log(data);

  return (
    <div className="container">
      <div className={style.sidebar}>
        {data.Result.TreeList.map((item, key) => (
          <ul key={key}>
            {item.ID < 11 && (
              <li>
                <button
                  className="btn btn-danger category"
                  onClick={() => router.push(`/category/${item.ID}`)}
                >
                  {item.DisplayName}
                </button>

                {item.SubCategoryList.map((item2, key2) => (
                  <ul key={key2}>
                    <li>
                      <button
                        className="btn btn-danger subCategory"
                        onClick={() =>
                          router.push(`/category/products/${item2.ID}`)
                        }
                      >
                        {item2.DisplayName}
                      </button>
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
