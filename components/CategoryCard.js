import React from "react";
import Link from "next/link";
import Image from "next/image";

function CategoryCard({ item }) {
  return (
    <>
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <Link href="/">
          <a>
            <div className="card mt-5">
              <div className="card-head">
                <Image
                  src={
                    item.ImageUri === "" ? "/images/dummy.jpg" : item.ImageUri
                  }
                  alt={item.Code}
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="card-text title my-3 text-center">
              {item.DisplayName}
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}

export default CategoryCard;
