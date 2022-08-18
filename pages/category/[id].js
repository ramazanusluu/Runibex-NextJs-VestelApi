import React from "react";

export default function SubCategory({ subCategory }) {
  console.log(subCategory);
  return (
    <div>
      <h1>SubCategor Page Component</h1>
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
