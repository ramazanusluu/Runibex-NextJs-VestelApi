import React from "react";
import Link from "next/link";
import Image from "next/image";

function ProductCard({ item }) {
  return (
    <>
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <div className="card product-card my-5">
          <div className="card-head product-card-head text-center fw-bold">
            <Image
              src={
                item.FirstProductImageURL
                  ? item.FirstProductImageURL
                  : "/images/dummy.jpg"
              }
              alt={item.DisplayName}
              width={500}
              height={500}
              title={item.DisplayName}
            />
            <div className="card-text p-1">{item.DisplayName}</div>
          </div>
          <div className="card-body">
            <p className="card-text text-muted text-center mb-0">
              {item.AttributeList[0].DisplayName}
            </p>
            <p className="card-text text-muted text-center">
              {item.AttributeList[1].DisplayName}
            </p>
            <h4 className="fw-bold text-center">
              {item.StrikeThroughPriceToShowOnScreen} TL
            </h4>
            <div className="text-center my-4">
              <input
                type="checkbox"
                name="check"
                id="check"
                className="form-check-input"
              />
              <label htmlFor="check" className="form-check-label text-muted">
                Karşılaştır
              </label>
            </div>
          </div>
          <div>
            <Link href="/">
              <button type="button" className="btn-incele">
                İNCELE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
