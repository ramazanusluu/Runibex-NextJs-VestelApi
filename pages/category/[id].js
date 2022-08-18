import React from "react";
import SubCategoryCard from "../../components/SubCategoryCard";

export default function SubCategory({ subCategory }) {
  console.log(subCategory);
  console.log(subCategory.Result.TopCategory.SubCategoryList);
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <h5 className="display-6 text-center">
            {subCategory.Result.CategoryName}
          </h5>
          {subCategory.Result.TopCategory.SubCategoryList.map((item, key) => (
            <SubCategoryCard key={key} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=${context.params.id}`
  );
  const subCategory = await res.json();
  return {
    props: {
      subCategory,
    },
  };
};
