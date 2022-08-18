import React from "react";
import Link from "next/link";
import Image from "next/image";

function CategoryCard({ item }) {
  return (
    <>
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <Link href={`/category/${item.ID}`}>
          <a>
            <div className="card category-card mt-5">
              <div className="card-head category-card-head">
                <Image
                  src={
                    item.ImageUri === "" ? "/images/dummy.jpg" : item.ImageUri
                  }
                  alt={item.Code}
                  width={500}
                  height={500}
                  title={item.DisplayName}
                />
              </div>
            </div>
            <div className="card-text category-title my-3 text-center">
              {item.DisplayName}
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}

export default CategoryCard;
