import React from "react";

function ProductCard() {
  return (
    <div className="bg-gray-50 flex flex-col justify-center place-items-center w-1/4">
      <img src="../../assets/products/earbuds-prod-1.webp" alt="" />
      <p className="bg-white text-black p-7">
        TRebel Airdopes 141|8mm drivers, Upto...
        <br />
        $200
      </p>
    </div>
  );
}

export default ProductCard;
