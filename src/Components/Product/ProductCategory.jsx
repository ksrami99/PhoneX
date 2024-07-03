import React from "react";

function ProductCategory(props) {
  const { imagSrc } = props;
  console.log(imagSrc);
  return (
    <div className="flex flex-col justify-center place-items-center w-1/4 m-5">
      <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
        <img src={imagSrc} alt="productCategory" />
      </div>
    </div>
  );
}

export default ProductCategory;
